const GUMROAD_API = 'https://api.gumroad.com/v2';
const DEFAULT_PRODUCT_PERMALINK = 'zbmwrj';
const { markUserPaid } = require('./firebase-admin');

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type'
  },
  body: JSON.stringify(body)
});

const normalize = value => String(value || '').trim().toLowerCase();

async function gumroadGet(path, params = {}) {
  const token = process.env.GUMROAD_ACCESS_TOKEN;
  const url = new URL(`${GUMROAD_API}${path}`);
  url.searchParams.set('access_token', token);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const text = await response.text();
  let data = {};
  try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }

  if (!response.ok || data.success === false) {
    const message = data.message || data.error || `Gumroad request failed (${response.status})`;
    throw new Error(message);
  }
  return data;
}

function saleMatchesProduct(sale, productPermalink, productId) {
  if (productId && sale.product_id === productId) return true;
  const fields = [
    sale.product_permalink,
    sale.permalink,
    sale.custom_permalink,
    sale.short_url,
    sale.product_url
  ].map(normalize);
  return fields.some(value => value === productPermalink || value.includes(`/l/${productPermalink}`));
}

function saleIsActive(sale) {
  return !sale.refunded &&
    !sale.disputed &&
    !sale.chargedback &&
    !sale.chargebacked &&
    sale.cancelled !== true &&
    sale.subscription_cancelled_at == null;
}

async function findProductId(productPermalink) {
  try {
    const data = await gumroadGet('/products');
    const products = Array.isArray(data.products) ? data.products : [];
    const product = products.find(item => {
      const fields = [item.permalink, item.custom_permalink, item.short_url, item.url].map(normalize);
      return fields.some(value => value === productPermalink || value.includes(`/l/${productPermalink}`));
    });
    return product?.id || null;
  } catch {
    return null;
  }
}

async function hasVerifiedSale(email) {
  const productPermalink = normalize(process.env.GUMROAD_PRODUCT_PERMALINK || DEFAULT_PRODUCT_PERMALINK);
  const productId = process.env.GUMROAD_PRODUCT_ID || await findProductId(productPermalink);
  let pageKey = null;

  for (let page = 1; page <= 5; page += 1) {
    const data = await gumroadGet('/sales', { page_key: pageKey, email, product_id: productId });
    const sales = Array.isArray(data.sales) ? data.sales : [];
    const match = sales.find(sale =>
      (normalize(sale.email) === email || normalize(sale.purchase_email) === email) &&
      saleMatchesProduct(sale, productPermalink, productId) &&
      saleIsActive(sale)
    );
    if (match) return true;
    pageKey = data.next_page_key || null;
    if (!pageKey || sales.length === 0) break;
  }

  return false;
}

exports.handler = async event => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { ok: false, error: 'Method not allowed' });

  if (!process.env.GUMROAD_ACCESS_TOKEN) {
    return json(500, { ok: false, error: 'Missing GUMROAD_ACCESS_TOKEN' });
  }

  let body = {};
  try { body = JSON.parse(event.body || '{}'); } catch {}
  const email = normalize(body.email);
  const uid = String(body.uid || '').trim();
  if (!email || !email.includes('@')) {
    return json(400, { ok: false, error: 'Valid email is required' });
  }

  try {
    const verified = await hasVerifiedSale(email);
    if (verified && uid) {
      try { await markUserPaid(uid, { type: 'purchase-email', email }); } catch {}
    }
    return json(200, { ok: true, verified });
  } catch (err) {
    return json(502, { ok: false, error: err.message || 'Gumroad verification failed' });
  }
};
