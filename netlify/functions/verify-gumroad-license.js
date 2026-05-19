const GUMROAD_LICENSE_VERIFY_URL = 'https://api.gumroad.com/v2/licenses/verify';
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

function purchaseIsActive(purchase = {}) {
  return !purchase.refunded &&
    !purchase.disputed &&
    !purchase.chargedback &&
    !purchase.chargebacked &&
    purchase.cancelled !== true;
}

exports.handler = async event => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { ok: false, error: 'Method not allowed' });

  let body = {};
  try { body = JSON.parse(event.body || '{}'); } catch {}

  const email = normalize(body.email);
  const uid = String(body.uid || '').trim();
  const licenseKey = String(body.licenseKey || '').trim();
  const productPermalink = process.env.GUMROAD_PRODUCT_PERMALINK || DEFAULT_PRODUCT_PERMALINK;

  if (!email || !email.includes('@')) return json(400, { ok: false, error: 'Valid email is required' });
  if (!licenseKey) return json(400, { ok: false, error: 'License key is required' });

  const params = new URLSearchParams({
    product_permalink: productPermalink,
    license_key: licenseKey,
    increment_uses_count: 'false'
  });

  try {
    const response = await fetch(GUMROAD_LICENSE_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: params
    });
    const result = await response.json().catch(() => ({}));
    const purchase = result.purchase || {};
    const purchaseEmail = normalize(purchase.email || purchase.purchase_email);

    if (!response.ok || !result.success) {
      return json(200, { ok: true, verified: false, reason: 'invalid_license' });
    }
    if (purchaseEmail && purchaseEmail !== email) {
      return json(200, { ok: true, verified: false, reason: 'email_mismatch' });
    }
    if (!purchaseIsActive(purchase)) {
      return json(200, { ok: true, verified: false, reason: 'inactive_purchase' });
    }

    if (uid) {
      try { await markUserPaid(uid, { type: 'license-key', email, licenseKey }); } catch {}
    }
    return json(200, { ok: true, verified: true });
  } catch (err) {
    return json(502, { ok: false, error: err.message || 'Gumroad license verification failed' });
  }
};
