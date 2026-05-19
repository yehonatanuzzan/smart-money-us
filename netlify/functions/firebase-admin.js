let adminApp = null;

function serviceAccountFromEnv() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  }
  if (process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_PROJECT_ID) {
    return {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    };
  }
  return null;
}

function getAdmin() {
  const serviceAccount = serviceAccountFromEnv();
  if (!serviceAccount) return null;
  const admin = require('firebase-admin');
  if (!adminApp) {
    adminApp = admin.apps.length
      ? admin.app()
      : admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  }
  return admin;
}

async function markUserPaid(uid, payment = {}) {
  const admin = getAdmin();
  if (!admin || !uid) return false;
  await admin.firestore().collection('users').doc(uid).set({
    paid: true,
    paymentStatus: 'paid',
    paymentProvider: 'gumroad',
    payment,
    paidAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  return true;
}

module.exports = { markUserPaid };
