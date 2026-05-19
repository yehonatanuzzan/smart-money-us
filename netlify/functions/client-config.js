const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'cache-control': 'public, max-age=300'
  },
  body: JSON.stringify(body)
});

exports.handler = async event => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});

  const projectId = process.env.FIREBASE_PROJECT_ID;
  if (!projectId) return json(500, { ok: false, error: 'Server not configured' });

  return json(200, {
    ok: true,
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: `${projectId}.firebaseapp.com`,
      projectId,
      storageBucket: `${projectId}.firebasestorage.app`,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    },
    gumroadProductPermalink: process.env.GUMROAD_PRODUCT_PERMALINK || 'zbmwrj',
    gumroadProductUrl: `https://7823900106827.gumroad.com/l/${process.env.GUMROAD_PRODUCT_PERMALINK || 'zbmwrj'}`
  });
};
