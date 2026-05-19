// ─── CONSTANTS ─────────────────────────────────────────────────────────────

const CATS = ['דיור','מזון','תחבורה','בריאות','פנאי ובידור',
              'קניות','חינוך','חיסכון והשקעות','מנויים','ילדים',
              'מתנות ותרומות','אחר'];

const CAT_ICON = {
  'דיור':'🏠','מזון':'🛒','תחבורה':'🚗','בריאות':'💊',
  'פנאי ובידור':'🎭','קניות':'👗','חינוך':'📚',
  'חיסכון והשקעות':'💰','מנויים':'📱','ילדים':'👶',
  'מתנות ותרומות':'🎁','אחר':'📦'
};

const CAT_COLOR = {
  'דיור':'#4A90D9','מזון':'#E74C3C','תחבורה':'#E67E22','בריאות':'#2ECC71',
  'פנאי ובידור':'#9B59B6','קניות':'#F39C12','חינוך':'#1ABC9C',
  'חיסכון והשקעות':'#27AE60','מנויים':'#8E44AD','ילדים':'#3498DB',
  'מתנות ותרומות':'#E91E63','אחר':'#95A5A6'
};

const SUBCATS = {
  'דיור':['שכירות','משכנתא','חשמל','מים','גז','ועד בית','אינטרנט','ביטוח דירה'],
  'מזון':['סופרמרקט','מסעדות','קפה','משלוחים','שווקים'],
  'תחבורה':['דלק','חניה','תחבורה ציבורית','אחזקת רכב','מונית/אובר'],
  'בריאות':['ביטוח בריאות','רופא','תרופות','ספורט','מרפאה'],
  'פנאי ובידור':['קולנוע/תיאטרון','הופעות','טיולים','חגים','ספרים'],
  'קניות':['בגדים','נעליים','אלקטרוניקה','ריהוט','מוצרי בית'],
  'חינוך':['קורסים','לימודים','חוגים','שכר לימוד'],
  'חיסכון והשקעות':['קרן פנסיה','השקעות','חיסכון','קרן השתלמות'],
  'מנויים':['נטפליקס','ספוטיפיי','אפל','יוטיוב','אחר'],
  'ילדים':['גן/מעון','חוגים','צעצועים','בגדים'],
  'מתנות ותרומות':['מתנה','תרומה','אחר'],
  'אחר':['כללי']
};

const INCOME_TYPES = ['משכורת','עבודה עצמאית/פרילנס','בונוס','שכר דירה',
                      'דיבידנד/השקעות','מתנה','ירושה','קצבה','אחר'];

const PAYMENT_METHODS = ['כרטיס אשראי','מזומן','העברה בנקאית','ביט/פייבוקס',"צ'ק"];

const OTHER_OPTION = 'אחר';

function withOtherOption(options = []) {
  return [...options.filter(Boolean).filter(option => option !== OTHER_OPTION), OTHER_OPTION];
}

function withSelectedOption(options = [], selected = '') {
  const list = withOtherOption(options);
  return selected && !list.includes(selected) ? [selected, ...list] : list;
}

const DEFAULT_BUDGETS = {
  'דיור':3800,'מזון':2500,'תחבורה':800,'בריאות':400,
  'פנאי ובידור':600,'קניות':700,'חינוך':300,
  'חיסכון והשקעות':1500,'מנויים':150,'ילדים':0,
  'מתנות ותרומות':200,'אחר':300
};

const MONTHS_HE = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני',
                   'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
const MONTHS_EN = ['January','February','March','April','May','June',
                   'July','August','September','October','November','December'];

const LANGS = { HE: 'he', EN: 'en' };
const DEFAULT_USER = { firstName: 'משתמש', username: 'Smart Money User', email: 'user@smartmoney.local' };

const CAT_LABEL_EN = {
  'דיור':'Housing','מזון':'Food','תחבורה':'Transportation','בריאות':'Health',
  'פנאי ובידור':'Leisure','קניות':'Shopping','חינוך':'Education',
  'חיסכון והשקעות':'Savings & Investments','מנויים':'Subscriptions','ילדים':'Children',
  'מתנות ותרומות':'Gifts & Donations','אחר':'Other'
};

const SUBCAT_LABEL_EN = {
  'שכירות':'Rent','משכנתא':'Mortgage','חשמל':'Electricity','מים':'Water','גז':'Gas',
  'ועד בית':'Building Fees','אינטרנט':'Internet','ביטוח דירה':'Home Insurance',
  'סופרמרקט':'Supermarket','מסעדות':'Restaurants','קפה':'Coffee','משלוחים':'Delivery','שווקים':'Markets',
  'דלק':'Fuel','חניה':'Parking','תחבורה ציבורית':'Public Transit','אחזקת רכב':'Car Maintenance','מונית/אובר':'Taxi/Uber',
  'ביטוח בריאות':'Health Insurance','רופא':'Doctor','תרופות':'Medicine','ספורט':'Sport','מרפאה':'Clinic',
  'קולנוע/תיאטרון':'Cinema/Theater','הופעות':'Shows','טיולים':'Trips','חגים':'Holidays','ספרים':'Books',
  'בגדים':'Clothing','נעליים':'Shoes','אלקטרוניקה':'Electronics','ריהוט':'Furniture','מוצרי בית':'Home Goods',
  'קורסים':'Courses','לימודים':'Studies','חוגים':'Classes','שכר לימוד':'Tuition',
  'קרן פנסיה':'Pension Fund','השקעות':'Investments','חיסכון':'Savings','קרן השתלמות':'Education Fund',
  'נטפליקס':'Netflix','ספוטיפיי':'Spotify','אפל':'Apple','יוטיוב':'YouTube',
  'גן/מעון':'Kindergarten','צעצועים':'Toys','מתנה':'Gift','תרומה':'Donation','כללי':'General','אחר':'Other'
};

const INCOME_TYPE_LABEL_EN = {
  'משכורת':'Salary','עבודה עצמאית/פרילנס':'Freelance','בונוס':'Bonus','שכר דירה':'Rental Income',
  'דיבידנד/השקעות':'Dividends/Investments','מתנה':'Gift','ירושה':'Inheritance','קצבה':'Allowance','אחר':'Other'
};

const PAYMENT_LABEL_EN = {
  'כרטיס אשראי':'Credit Card','מזומן':'Cash','העברה בנקאית':'Bank Transfer','ביט/פייבוקס':'Bit/PayBox',"צ'ק":'Check'
};

const VIEW_LABELS = {
  he: { dashboard: 'לוח בקרה', income: 'הכנסות', expenses: 'הוצאות', budget: 'תקציב', analysis: 'ניתוח', profile: 'פרופיל', home: 'בית' },
  en: { dashboard: 'Dashboard', income: 'Income', expenses: 'Expenses', budget: 'Budget', analysis: 'Analysis', profile: 'Profile', home: 'Home' }
};

const TEXT_REPLACEMENTS_EN = [
  ['תכל׳ס, לאן הכסף שלי', 'So, where is my money?'],
  ['ניהול פיננסי אישי', 'Personal finance'],
  ['תזרים · תקציב · ניתוח', 'Cashflow · Budget · Analysis'],
  ['מעקב פיננסי אישי חכם', 'Smart personal finance tracking'],
  ['זה הסכום שבו ההוצאות בתקופה הנבחרת גבוהות מההכנסות. אם הוא 0, ההכנסות מכסות את ההוצאות בתקופה הזו.', 'This is the amount by which expenses in the selected period exceed income. If it is 0, income covers expenses for this period.'],
  ['אומדן שמרני לכמה אפשר לנסות לחסוך מתוך ההוצאות הלא הכרחיות. כרגע הוא מחושב כ-30% מסך ההוצאות שסומנו כלא הכרחיות.', 'A conservative estimate of how much you could try to save from non-essential expenses. Currently calculated as 30% of expenses marked non-essential.'],
  ['תקופה מוצגת:', 'Shown period:'],
  ['יתרה שנתית', 'Annual Balance'],
  ['יתרה חודשית', 'Monthly Balance'],
  ['כסף שנעלם', 'Missing Money'],
  ['הוצאות עולות על הכנסות', 'Expenses exceed income'],
  ['פוטנציאל חיסכון', 'Saving Potential'],
  ['הוצ׳ לא הכרחיות', 'Non-essential Expenses'],
  ['הפקדות שנתיות לחיסכון והשקעות', 'Annual Savings & Investment Deposits'],
  ['הפקדות חודשיות לחיסכון והשקעות', 'Monthly Savings & Investment Deposits'],
  ['מההכנסה השנתית', 'of annual income'],
  ['מההכנסה החודשית', 'of monthly income'],
  ['מבוסס על הוצאות שסווגו תחת', 'based on expenses categorized as'],
  ['תקציב מומלץ להוצאות שנתיות', 'Recommended annual spending budget'],
  ['תקציב מומלץ להוצאות חודשיות', 'Recommended monthly spending budget'],
  ['הכנסות פחות יעד הפקדה שנתי', 'income minus annual deposit target'],
  ['הכנסות פחות יעד הפקדה חודשי', 'income minus monthly deposit target'],
  ['הוצאות לפי קטגוריה', 'Expenses by Category'],
  ['עסקאות אחרונות', 'Recent Transactions'],
  ['אין עסקאות עדיין', 'No transactions yet'],
  ['הוסף הוצאה ראשונה', 'Add your first expense'],
  ['סה"כ הכנסות בשנה', 'Total Annual Income'],
  ['סה"כ הכנסות בחודש', 'Total Monthly Income'],
  ['סה"כ הוצאות בשנה', 'Total Annual Expenses'],
  ['סה"כ הוצאות בחודש', 'Total Monthly Expenses'],
  ['אין הכנסות בתקופה הזו', 'No income in this period'],
  ['אין הוצאות בתקופה הזו', 'No expenses in this period'],
  ['לחץ + להוספת הכנסה ראשונה', 'Tap + to add your first income'],
  ['לחץ + להוספת הוצאה ראשונה', 'Tap + to add your first expense'],
  ['קטגוריות בחריגה', 'Over-budget Categories'],
  ['הוצאה בפועל', 'Actual Spending'],
  ['תקציב שנתי', 'Annual Budget'],
  ['תקציב חודשי', 'Monthly Budget'],
  ['חריגה!', 'Over!'],
  ['קרוב לגבול', 'Near limit'],
  ['הוצאו', 'spent'],
  ['מתוך', 'of'],
  ['ניתוח מלא של ההוצאות שלך', 'A full analysis of your spending'],
  ['סה"כ הוצאות', 'Total Expenses'],
  ['לא הכרחי', 'Non-essential'],
  ['התפלגות הוצאות', 'Expense Breakdown'],
  ['TOP קטגוריות', 'Top Categories'],
  ['מסך הכל', 'of total'],
  ['סיכום שנתי', 'Annual Summary'],
  ['הכנסות מול הוצאות', 'Income vs Expenses'],
  ['הוספת הכנסה', 'Add Income'],
  ['עריכת הכנסה', 'Edit Income'],
  ['הוספת הוצאה', 'Add Expense'],
  ['עריכת הוצאה', 'Edit Expense'],
  ['תאריך', 'Date'],
  ['סוג הכנסה', 'Income Type'],
  ['קטגוריה', 'Category'],
  ['תת-קטגוריה', 'Subcategory'],
  ['תיאור (אופציונלי)', 'Description (optional)'],
  ['אמצעי תשלום', 'Payment Method'],
  ['סכום (₪)', 'Amount (₪)'],
  ['סוג הוצאה', 'Expense Type'],
  ['הכרחי', 'Essential'],
  ['לא הכרחי', 'Non-essential'],
  ['הוסף הכנסה', 'Add Income'],
  ['הוסף הוצאה', 'Add Expense'],
  ['שמור שינויים', 'Save Changes'],
  ['שמור הגדרות', 'Save Settings'],
  ['שמור', 'Save'],
  ['ביטול', 'Cancel'],
  ['עריכה', 'Edit'],
  ['מחיקה', 'Delete'],
  ['נמחק בהצלחה', 'Deleted successfully'],
  ['הכנסה נוספה', 'Income added'],
  ['הכנסה עודכנה', 'Income updated'],
  ['הוצאה נוספה', 'Expense added'],
  ['הוצאה עודכנה', 'Expense updated'],
  ['תקציב עודכן', 'Budget updated'],
  ['הגדרות נשמרו', 'Settings saved'],
  ['הזן סכום תקין', 'Enter a valid amount'],
  ['הרשומה לא נמצאה', 'Entry not found'],
  ['בחירת תקופה', 'Select Period'],
  ['היום', 'Today'],
  ['הצג שנה מלאה', 'Show full year'],
  ['חודשי', 'Monthly'],
  ['שנתי', 'Yearly'],
  ['שנת', 'Year'],
  ['הבנתי', 'Got it'],
  ['פרטי משתמש', 'User Details'],
  ['פרטי התחברות', 'Login Details'],
  ['שם פרטי', 'First Name'],
  ['עריכת שם פרטי', 'Edit First Name'],
  ['שם פרטי עודכן', 'First name updated'],
  ['שם פרטי לא יכול להיות ריק', 'First name cannot be empty'],
  ['שם משתמש', 'Username'],
  ['מייל', 'Email'],
  ['התנתק', 'Log Out'],
  ['כפתור ההתנתקות עדיין לא פעיל', 'Logout is not active yet'],
  ['סינון תקופה', 'Period filter'],
  ['כניסה לחשבון', 'Log In'],
  ['התחברות זמנית במבנה שמתאים להחלפה ל-Firebase Auth בהמשך.', 'Temporary login structured so it can be replaced with Firebase Auth later.'],
  ['המשתמש ייווצר בשכבת mock מקומית. בהמשך נחבר את אותם צעדים ל-Firebase Auth.', 'The user will be created in a local mock layer. Later these same steps can connect to Firebase Auth.'],
  ['תשתית זמנית לסליקה אחרי הרשמה. בהמשך אפשר לחבר כאן Stripe, Tranzila, Meshulam או כל ספק אחר.', 'Temporary payment infrastructure after signup. Later you can connect Stripe, Tranzila, Meshulam, or any other provider here.'],
  ['יצירת חשבון', 'Create Account'],
  ['הרשמה', 'Sign Up'],
  ['שם משתמש או מייל', 'Username or Email'],
  ['סיסמה', 'Password'],
  ['התחבר', 'Log In'],
  ['משתמש בדיקה:', 'Test user:'],
  ['אין לך חשבון?', 'No account?'],
  ['יש לך חשבון?', 'Already have an account?'],
  ['המשך לסליקה', 'Continue to Payment'],
  ['עמוד סליקה', 'Payment Page'],
  ['מסלול Smart Money', 'Smart Money Plan'],
  ['תשלום יחובר בהמשך', 'Payment will be connected later'],
  ['השלם סליקה זמנית', 'Complete Temporary Checkout'],
  ['הכרטיס והתשלום יחוברו בהמשך. כרגע הכפתור רק משלים הרשמה זמנית.', 'Card and payment processing will be connected later. For now this button only completes temporary registration.'],
  ['הרשמה הושלמה', 'Registration completed'],
  ['התחברת בהצלחה', 'Logged in successfully'],
  ['התנתקת בהצלחה', 'Logged out successfully'],
  ['פרטים שגויים', 'Invalid credentials'],
  ['המשתמש כבר קיים', 'User already exists'],
  ['יש למלא את כל השדות', 'Please fill in all fields'],
  ['סיסמה חייבת להכיל לפחות 6 תווים', 'Password must contain at least 6 characters'],
  ['ניהול תקציב וחיסכון', 'Budget and savings tracking'],
  ['ניתוח הכנסות והוצאות', 'Income and expense analysis'],
  ['שמירה מקומית עד חיבור Firebase', 'Local storage until Firebase is connected'],
  ['העדפות', 'Preferences'],
  ['שפה', 'Language'],
  ['שינוי שפה', 'Change language'],
  ['% יתרה', 'Balance %'],
  ['הסבר', 'Info'],
  ['שלום', 'Hello'],
  ['לוח בקרה', 'Dashboard'],
  ['פרופיל', 'Profile'],
  ['הכנסות', 'Income'],
  ['הוצאות', 'Expenses'],
  ['תקציב', 'Budget'],
  ['ניתוח', 'Analysis'],
  ['הגדרות', 'Settings'],
  ['אין נתונים עדיין', 'No data yet'],
  ['למשל: משכורת ינואר', 'Example: January salary'],
  ['למשל: שופרסל יום ג׳', 'Example: supermarket'],
  ['הזן אחוז בין 1 ל-90', 'Enter a percentage between 1 and 90'],
  ['חודש', 'Month'],
  ['בית', 'Home'],
  ['הכל', 'All'],
  ['רשומות', 'records'],
  ['בחודש', 'per month'],
  ['בשנה', 'per year'],
  ['יעד:', 'Goal:'],
  ['יעד הפקדה מתוך ההכנסה (%)', 'Deposit goal from income (%)'],
  ['יום תחילת מחזור חודשי (1–28)', 'Monthly cycle start day (1–28)'],
  ['מחזור נוכחי:', 'Current cycle:'],
  ['קבע יעד להפקדות לחיסכון והשקעות, ואת יום תחילת המחזור החודשי שלך.', 'Set your savings and investment deposit goal, and your monthly cycle start day.'],
  ['דיור', 'Housing'], ['מזון', 'Food'], ['תחבורה', 'Transportation'], ['בריאות', 'Health'],
  ['פנאי ובידור', 'Leisure'], ['קניות', 'Shopping'], ['חינוך', 'Education'],
  ['חיסכון והשקעות', 'Savings & Investments'], ['מנויים', 'Subscriptions'], ['ילדים', 'Children'],
  ['מתנות ותרומות', 'Gifts & Donations'], ['אחר', 'Other']
].sort((a, b) => b[0].length - a[0].length);

const STORAGE_VERSION = 2;
const PERIOD_MODES = { MONTHLY: 'monthly', YEARLY: 'yearly' };
const DEFAULT_PERIOD_FILTERS = {
  dashboard: PERIOD_MODES.MONTHLY,
  income: PERIOD_MODES.MONTHLY,
  expenses: PERIOD_MODES.MONTHLY,
  budget: PERIOD_MODES.MONTHLY
};
let _clientConfig = null;

async function fetchClientConfig() {
  if (_clientConfig) return _clientConfig;
  try {
    const res = await fetch('/.netlify/functions/client-config');
    if (res.ok) {
      const data = await res.json();
      if (data.ok) { _clientConfig = data; return _clientConfig; }
    }
  } catch {}
  return null;
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function currentPeriodParts() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

function monthKeyFromParts(year, month) {
  return `${year}-${pad2(month)}`;
}

function isMonthKey(key) {
  return /^\d{4}-\d{2}$/.test(key || '');
}

function splitMonthKey(key) {
  const [year, month] = key.split('-').map(Number);
  return { year, month };
}

function monthKeyFromDate(dateStr) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr || '')) return dateStr.slice(0, 7);
  const { year, month } = currentPeriodParts();
  return monthKeyFromParts(year, month);
}

function normalizeBudgets(source = {}, fallback = DEFAULT_BUDGETS) {
  return CATS.reduce((acc, cat) => {
    const raw = source?.[cat] ?? fallback?.[cat] ?? 0;
    const val = Number(raw);
    acc[cat] = Number.isFinite(val) && val >= 0 ? val : 0;
    return acc;
  }, {});
}

function makeMonthBucket(budgets, budgetTemplate) {
  return {
    incomes: [],
    expenses: [],
    budgets: normalizeBudgets(budgets, budgetTemplate)
  };
}

function ensureMonthBucket(months, key, budgetTemplate) {
  if (!months[key]) months[key] = makeMonthBucket(null, budgetTemplate);
  return months[key];
}

function normalizeMoneyEntry(entry) {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(entry?.date || '') ? entry.date : today();
  const monthKey = monthKeyFromDate(date);
  const { year, month } = splitMonthKey(monthKey);
  return {
    ...entry,
    date,
    amount: Number(entry?.amount) || 0,
    monthKey,
    year,
    month
  };
}

function addEntryToMonths(months, type, entry, budgetTemplate) {
  const normalized = normalizeMoneyEntry(entry);
  ensureMonthBucket(months, normalized.monthKey, budgetTemplate)[type].push(normalized);
}

function flattenMonthEntries(months, type) {
  return Object.keys(months)
    .sort()
    .flatMap(key => (months[key]?.[type] || []).map(normalizeMoneyEntry))
    .sort((a, b) => transactionDateValue(b) - transactionDateValue(a));
}

function monthKeysForYear(year) {
  return Array.from({ length: 12 }, (_, i) => monthKeyFromParts(year, i + 1));
}

function transactionDateValue(entry) {
  const time = Date.parse(`${entry?.date || ''}T00:00:00`);
  return Number.isFinite(time) ? time : 0;
}

function sortByExecutionDateDesc(entries) {
  return [...entries].sort((a, b) => transactionDateValue(b) - transactionDateValue(a));
}

// ─── STORAGE ───────────────────────────────────────────────────────────────

const FirebaseCloud = {
  app: null,
  auth: null,
  db: null,
  _saveTimer: null,
  _readyPromise: null,
  init() {
    if (this._readyPromise) return this._readyPromise;
    this._readyPromise = (async () => {
      try {
        if (!window.firebase?.initializeApp) return false;
        const cfg = await fetchClientConfig();
        if (!cfg?.firebase?.projectId) return false;
        this.app = window.firebase.apps?.length ? window.firebase.app() : window.firebase.initializeApp(cfg.firebase);
        this.auth = window.firebase.auth();
        this.db = window.firebase.firestore();
        this.db.enablePersistence?.({ synchronizeTabs: true }).catch(() => {});
        return true;
      } catch { return false; }
    })();
    return this._readyPromise;
  },
  async waitForAuth() {
    if (!await this.init() || !this.auth) return null;
    return new Promise(resolve => {
      const unsubscribe = this.auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, () => resolve(null));
    });
  },
  clean(value) {
    return JSON.parse(JSON.stringify(value || {}));
  },
  userRef(uid) {
    return this.db.collection('users').doc(uid);
  },
  stateRef(uid) {
    return this.userRef(uid).collection('finance').doc('state');
  },
  publicUserFromDoc(uid, data = {}) {
    return {
      uid,
      firstName: data.firstName || data.displayName || data.username || '',
      username: data.username || data.displayName || '',
      email: data.email || '',
      displayName: data.displayName || data.firstName || data.username || '',
      paid: Boolean(data.paid)
    };
  },
  async getUser(uid) {
    try {
      if (!uid || !await this.init()) return null;
      const snap = await this.userRef(uid).get();
      return snap.exists ? this.publicUserFromDoc(uid, snap.data()) : null;
    } catch {
      return null;
    }
  },
  async findUserByIdentifier(identifier) {
    try {
      if (!await this.init()) return null;
      const normalized = String(identifier || '').trim().toLowerCase();
      if (!normalized) return null;
      const field = normalized.includes('@') ? 'emailLower' : 'usernameLower';
      const snap = await this.db.collection('users').where(field, '==', normalized).limit(1).get();
      if (snap.empty) return null;
      const doc = snap.docs[0];
      return this.publicUserFromDoc(doc.id, doc.data());
    } catch {
      return null;
    }
  },
  async saveUser(user, extra = {}) {
    if (!user?.uid || !await this.init()) return null;
    const email = String(user.email || extra.email || '').trim().toLowerCase();
    const username = String(user.username || extra.username || '').trim();
    const firstName = String(user.firstName || extra.firstName || '').trim();
    const displayName = String(user.displayName || extra.displayName || firstName || username || email).trim();
    const existing = await this.getUser(user.uid);
    const doc = {
      uid: user.uid,
      firstName: firstName || existing?.firstName || '',
      username: username || existing?.username || displayName || email,
      usernameLower: (username || existing?.username || displayName || email).toLowerCase(),
      email,
      emailLower: email,
      displayName,
      paid: Boolean(extra.paid ?? existing?.paid ?? user.paid),
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    };
    if (!existing) doc.createdAt = window.firebase.firestore.FieldValue.serverTimestamp();
    await this.userRef(user.uid).set(doc, { merge: true });
    return this.publicUserFromDoc(user.uid, doc);
  },
  async createAccount(email, password, profile = {}) {
    if (!await this.init()) return null;
    const username = String(profile.username || '').trim();
    if (username) {
      const existingUsername = await this.findUserByIdentifier(username);
      if (existingUsername) throw new Error('המשתמש כבר קיים');
    }
    const credential = await this.auth.createUserWithEmailAndPassword(email, password);
    const displayName = profile.firstName || username || email;
    await credential.user.updateProfile({ displayName });
    const fallbackUser = {
      uid: credential.user.uid,
      email,
      firstName: profile.firstName,
      username,
      displayName,
      paid: false
    };
    try {
      return await this.saveUser(fallbackUser, { paid: false });
    } catch {
      return this.publicUserFromDoc(credential.user.uid, fallbackUser);
    }
  },
  async signIn(identifier, password) {
    if (!await this.init()) return null;
    const normalized = String(identifier || '').trim().toLowerCase();
    const userDoc = await this.findUserByIdentifier(normalized);
    const email = normalized.includes('@') ? normalized : userDoc?.email;
    if (!email) throw new Error('פרטים שגויים');
    const credential = await this.auth.signInWithEmailAndPassword(email, password);
    const savedUser = await this.getUser(credential.user.uid);
    if (savedUser) return savedUser;
    const fallbackUser = {
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: credential.user.displayName || credential.user.email,
      paid: false
    };
    try {
      return await this.saveUser(fallbackUser, { paid: false });
    } catch {
      return this.publicUserFromDoc(credential.user.uid, fallbackUser);
    }
  },
  async markPaid(uid, payment = {}) {
    try {
      if (!uid || !await this.init()) return;
      await this.userRef(uid).set({
        paid: true,
        paymentStatus: 'paid',
        paymentProvider: 'gumroad',
        payment,
        paidAt: window.firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch {}
  },
  async updateUser(uid, profile = {}) {
    if (!uid || !await this.init()) return null;
    const payload = {
      ...profile,
      usernameLower: profile.username ? String(profile.username).toLowerCase() : undefined,
      emailLower: profile.email ? String(profile.email).toLowerCase() : undefined,
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    };
    Object.keys(payload).forEach(key => payload[key] === undefined && delete payload[key]);
    await this.userRef(uid).set(payload, { merge: true });
    const firebaseUser = this.auth?.currentUser;
    if (firebaseUser && profile.displayName) await firebaseUser.updateProfile({ displayName: profile.displayName });
    return this.getUser(uid);
  },
  async loadUserData(uid) {
    try {
      if (!uid || !await this.init()) return null;
      const snap = await this.stateRef(uid).get();
      if (!snap.exists) return null;
      const data = snap.data() || {};
      delete data.updatedAt;
      return data;
    } catch {
      return null;
    }
  },
  saveUserData(uid, data) {
    if (!uid) return;
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => this.saveUserDataNow(uid, data), 350);
  },
  async saveUserDataNow(uid, data) {
    try {
      if (!uid || !await this.init()) return;
      await this.stateRef(uid).set({
        ...this.clean(data),
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      await this.userRef(uid).set({
        dataUpdatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch {}
  }
};

let currentAuth = null;

const Store = {
  _key: 'smoney_data',
  load() {
    try { return JSON.parse(localStorage.getItem(this._key)) || {}; } catch { return {}; }
  },
  save(d) {
    localStorage.setItem(this._key, JSON.stringify({
      version: STORAGE_VERSION,
      months: d.months || {},
      budgetTemplate: normalizeBudgets(d.budgetTemplate || d.budgets, DEFAULT_BUDGETS),
      savingsGoal: d.savingsGoal ?? 20,
      cycleStartDay: d.cycleStartDay || 1,
      selectedYear: d.selectedYear,
      selectedMonth: d.selectedMonth,
      language: d.language || LANGS.EN,
      user: { ...DEFAULT_USER, ...(d.user || {}) },
      periodFilters: { ...DEFAULT_PERIOD_FILTERS, ...(d.periodFilters || {}) }
    }));
  },
  normalize(d = {}) {
    const now = currentPeriodParts();
    const selectedYear = Number(d.selectedYear) || now.year;
    const selectedMonthRaw = Number(d.selectedMonth) || now.month;
    const selectedMonth = Math.min(12, Math.max(1, selectedMonthRaw));
    const budgetTemplate = normalizeBudgets(d.budgetTemplate || d.budgets, DEFAULT_BUDGETS);
    const months = {};
    const rawMonths = d.months && typeof d.months === 'object' ? d.months : {};

    Object.entries(rawMonths).forEach(([key, bucket]) => {
      if (!isMonthKey(key)) return;
      months[key] = makeMonthBucket(bucket?.budgets, budgetTemplate);
    });

    const hasArrayEntries = Array.isArray(d.incomes) || Array.isArray(d.expenses);
    if (hasArrayEntries) {
      (d.incomes || []).forEach(entry => addEntryToMonths(months, 'incomes', entry, budgetTemplate));
      (d.expenses || []).forEach(entry => addEntryToMonths(months, 'expenses', entry, budgetTemplate));
    } else {
      Object.entries(rawMonths).forEach(([key, bucket]) => {
        if (!isMonthKey(key)) return;
        (bucket?.incomes || []).forEach(entry => addEntryToMonths(months, 'incomes', entry, budgetTemplate));
        (bucket?.expenses || []).forEach(entry => addEntryToMonths(months, 'expenses', entry, budgetTemplate));
      });
    }

    ensureMonthBucket(months, monthKeyFromParts(selectedYear, selectedMonth), budgetTemplate);

    return {
      version: STORAGE_VERSION,
      months,
      incomes: flattenMonthEntries(months, 'incomes'),
      expenses: flattenMonthEntries(months, 'expenses'),
      budgetTemplate,
      budgets: budgetTemplate,
      savingsGoal: d.savingsGoal ?? 20,
      cycleStartDay: d.cycleStartDay || 1,
      selectedYear,
      selectedMonth,
      language: d.language === LANGS.HE ? LANGS.HE : LANGS.EN,
      user: { ...DEFAULT_USER, ...(d.user || {}) },
      periodFilters: { ...DEFAULT_PERIOD_FILTERS, ...(d.periodFilters || {}) }
    };
  },
  getData() {
    return this.normalize(this.load());
  },
  setData(d) {
    const normalized = this.normalize(d);
    this.save(normalized);
    if (typeof currentAuth !== 'undefined' && currentAuth?.uid) {
      FirebaseCloud.saveUserData(currentAuth.uid, normalized);
    }
    return normalized;
  }
};

// ─── AUTH ─────────────────────────────────────────────────────────────────

const AUTH_MODES = { LOGIN: 'login', REGISTER: 'register', PAYMENT: 'payment', FORGOT: 'forgot' };
const PAYMENT_VERIFY_ENDPOINT = '/.netlify/functions/verify-gumroad-purchase';

function gumroadProductUrl() {
  return _clientConfig?.gumroadProductUrl || 'https://7823900106827.gumroad.com/l/zbmwrj';
}

const Auth = {
  _key: 'smoney_auth',
  async ready() {
    try {
      const firebaseUser = await FirebaseCloud.waitForAuth();
      if (!firebaseUser) return null;
      const cloudUser = await FirebaseCloud.getUser(firebaseUser.uid) || await FirebaseCloud.saveUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || firebaseUser.email,
        paid: false
      }, { paid: false });
      const localUser = this.getData().users.find(user => user.uid === cloudUser.uid);
      const mergedUser = { ...cloudUser, paid: Boolean(cloudUser.paid || localUser?.paid) };
      this.save({
        users: [mergedUser],
        session: mergedUser.paid ? { uid: mergedUser.uid, signedInAt: new Date().toISOString() } : null,
        pendingUser: mergedUser.paid ? null : mergedUser
      });
      return mergedUser;
    } catch {
      return null;
    }
  },
  load() {
    try { return JSON.parse(localStorage.getItem(this._key)) || {}; } catch { return {}; }
  },
  save(d) {
    localStorage.setItem(this._key, JSON.stringify({
      users: d.users || [],
      session: d.session || null,
      pendingUser: d.pendingUser || null
    }));
  },
  normalize(d = {}) {
    const users = Array.isArray(d.users) ? d.users : [];
    const cleanedUsers = users.filter(user => user.uid !== 'mock-admin');
    const session = d.session?.uid === 'mock-admin' ? null : (d.session || null);
    const pendingUser = d.pendingUser?.uid === 'mock-admin' ? null : (d.pendingUser || null);
    return { users: cleanedUsers, session, pendingUser };
  },
  getData() {
    const normalized = this.normalize(this.load());
    this.save(normalized);
    return normalized;
  },
  userForSession(session) {
    if (!session?.uid) return null;
    const data = this.getData();
    const user = data.users.find(item => item.uid === session.uid);
    return user ? this.publicUser(user) : null;
  },
  publicUser(user) {
    if (!user) return null;
    return {
      uid: user.uid,
      firstName: user.firstName || user.displayName || user.username,
      username: user.username,
      email: user.email,
      displayName: user.displayName || user.username,
      paid: Boolean(user.paid)
    };
  },
  getSession() {
    const data = this.getData();
    return this.userForSession(data.session);
  },
  getPendingUser() {
    const data = this.getData();
    return this.publicUser(data.pendingUser);
  },
  async signInWithEmailAndPassword(identifier, password) {
    try {
      const cloudUser = await FirebaseCloud.signIn(identifier, password);
      if (cloudUser) {
        const localUser = this.getData().users.find(user => user.uid === cloudUser.uid);
        const mergedUser = { ...cloudUser, paid: Boolean(cloudUser.paid || localUser?.paid) };
        this.save({
          users: [mergedUser],
          session: mergedUser.paid ? { uid: mergedUser.uid, signedInAt: new Date().toISOString() } : null,
          pendingUser: mergedUser.paid ? null : mergedUser
        });
        return { user: mergedUser, needsPayment: !mergedUser.paid };
      }
    } catch (err) {
      throw new Error(err?.code === 'auth/invalid-credential' ? 'פרטים שגויים' : (err.message || 'פרטים שגויים'));
    }

    const data = this.getData();
    const normalizedIdentifier = String(identifier || '').trim().toLowerCase();
    const user = data.users.find(item =>
      (item.username || '').toLowerCase() === normalizedIdentifier ||
      (item.email || '').toLowerCase() === normalizedIdentifier
    );
    if (!user || user.password !== password) throw new Error('פרטים שגויים');
    if (!user.paid) {
      data.pendingUser = user;
      this.save(data);
      return { user: this.publicUser(user), needsPayment: true };
    }
    data.session = { uid: user.uid, signedInAt: new Date().toISOString() };
    data.pendingUser = null;
    this.save(data);
    return { user: this.publicUser(user), needsPayment: false };
  },
  async createUserWithEmailAndPassword(email, password, profile = {}) {
    try {
      const cloudUser = await FirebaseCloud.createAccount(email, password, profile);
      if (cloudUser) {
        this.save({ users: [cloudUser], session: null, pendingUser: cloudUser });
        const initialState = Store.setData({
          ...state,
          user: {
            firstName: cloudUser.firstName || profile.firstName,
            username: cloudUser.username || profile.username,
            email: cloudUser.email
          }
        });
        try { await FirebaseCloud.saveUserDataNow(cloudUser.uid, initialState); } catch {}
        return { user: cloudUser, needsPayment: true };
      }
    } catch (err) {
      if (err?.code === 'auth/email-already-in-use') throw new Error('המשתמש כבר קיים');
      if (err?.code === 'auth/weak-password') throw new Error('סיסמה חייבת להכיל לפחות 6 תווים');
      if (err?.code === 'auth/invalid-email') throw new Error('מייל לא תקין');
      throw new Error(err.message || 'המשתמש כבר קיים');
    }

    const data = this.getData();
    const firstName = String(profile.firstName || '').trim();
    const username = String(profile.username || '').trim();
    const normalizedEmail = String(email || '').trim().toLowerCase();
    const exists = data.users.some(user =>
      (user.username || '').toLowerCase() === username.toLowerCase() ||
      (user.email || '').toLowerCase() === normalizedEmail
    );
    if (exists) throw new Error('המשתמש כבר קיים');
    const user = {
      uid: `mock-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      firstName,
      username,
      email: normalizedEmail,
      displayName: firstName || username,
      password,
      paid: false,
      createdAt: new Date().toISOString()
    };
    data.users.push(user);
    data.pendingUser = user;
    data.session = null;
    this.save(data);
    return { user: this.publicUser(user), needsPayment: true };
  },
  async verifyGumroadCheckout() {
    const data = this.getData();
    if (!data.pendingUser?.uid) throw new Error('יש למלא את כל השדות');
    const response = await fetch(PAYMENT_VERIFY_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ uid: data.pendingUser.uid, email: data.pendingUser.email })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) throw new Error(result.error || 'שגיאה באימות התשלום');
    if (!result.verified) throw new Error('לא נמצא תשלום מאושר למייל הזה');
    await FirebaseCloud.markPaid(data.pendingUser.uid, { type: 'purchase-email', email: data.pendingUser.email });
    data.users = data.users.map(user => user.uid === data.pendingUser.uid ? { ...user, paid: true } : user);
    data.session = { uid: data.pendingUser.uid, signedInAt: new Date().toISOString() };
    data.pendingUser = null;
    this.save(data);
    return { user: this.getSession() };
  },
  async updateProfile(profile = {}) {
    if (FirebaseCloud.auth?.currentUser?.uid) {
      const uid = FirebaseCloud.auth.currentUser.uid;
      const updatedCloudUser = await FirebaseCloud.updateUser(uid, profile);
      if (updatedCloudUser) {
        const data = this.getData();
        data.users = data.users.map(user => user.uid === uid ? { ...user, ...updatedCloudUser } : user);
        this.save(data);
        return updatedCloudUser;
      }
    }

    const data = this.getData();
    const uid = data.session?.uid;
    if (!uid) throw new Error('הרשומה לא נמצאה');
    let updated = null;
    data.users = data.users.map(user => {
      if (user.uid !== uid) return user;
      updated = {
        ...user,
        ...profile,
        displayName: profile.displayName || profile.firstName || user.displayName || user.username
      };
      return updated;
    });
    if (!updated) throw new Error('הרשומה לא נמצאה');
    this.save(data);
    return this.publicUser(updated);
  },
  async signOut() {
    if (FirebaseCloud.auth?.currentUser) await FirebaseCloud.auth.signOut();
    const data = this.getData();
    data.session = null;
    this.save(data);
  },
  async sendPasswordReset(email) {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    if (!normalizedEmail) throw new Error('יש להזין מייל');
    if (await FirebaseCloud.init() && FirebaseCloud.auth) {
      await FirebaseCloud.auth.sendPasswordResetEmail(normalizedEmail);
      return;
    }
    throw new Error('שחזור סיסמה זמין רק דרך Firebase');
  }
};

// ─── STATE ─────────────────────────────────────────────────────────────────

let state = Store.getData();
state = Store.setData(state);
let currentView = 'dashboard';
let charts = {};
let periodPickerYear = state.selectedYear;
currentAuth = Auth.getSession();
let authMode = currentAuth ? AUTH_MODES.LOGIN : AUTH_MODES.LOGIN;
// Period filtering is driven by the selected month/year in the header.

// ─── UTILS ─────────────────────────────────────────────────────────────────

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

function fmt(n) {
  const abs = Math.abs(n);
  if (abs >= 1000) return (n < 0 ? '-' : '') + '₪' + (abs / 1000).toFixed(abs % 1000 === 0 ? 0 : 1) + 'K';
  return (n < 0 ? '-' : '') + '₪' + abs.toLocaleString(localeCode(), { maximumFractionDigits: 0 });
}

function fmtFull(n) {
  return (n < 0 ? '-' : '') + '₪' + Math.abs(n).toLocaleString(localeCode(), { maximumFractionDigits: 0 });
}

function fmtDate(d) {
  return new Date(d + 'T00:00:00').toLocaleDateString(localeCode(), { day: '2-digit', month: '2-digit', year: '2-digit' });
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[ch]);
}

function isEnglish() {
  return state?.language === LANGS.EN;
}

function localeCode() {
  return isEnglish() ? 'en-US' : 'he-IL';
}

function localizeText(text) {
  if (!isEnglish()) return text;
  return TEXT_REPLACEMENTS_EN.reduce((acc, [from, to]) => acc.replaceAll(from, to), String(text));
}

function localizeElement(root) {
  if (!root || !isEnglish()) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.parentElement?.closest('[data-no-i18n]')) return;
    node.nodeValue = localizeText(node.nodeValue);
  });
  root.querySelectorAll?.('[placeholder],[aria-label],[title]').forEach(el => {
    if (el.closest?.('[data-no-i18n]')) return;
    ['placeholder', 'aria-label', 'title'].forEach(attr => {
      if (el.hasAttribute?.(attr)) el.setAttribute(attr, localizeText(el.getAttribute(attr)));
    });
  });
}

function displayCategory(cat) {
  return isEnglish() ? (CAT_LABEL_EN[cat] || cat) : cat;
}

function displaySubcategory(subcat) {
  return isEnglish() ? (SUBCAT_LABEL_EN[subcat] || subcat) : subcat;
}

function displayIncomeType(type) {
  return isEnglish() ? (INCOME_TYPE_LABEL_EN[type] || type) : type;
}

function displayPaymentMethod(method) {
  return isEnglish() ? (PAYMENT_LABEL_EN[method] || method) : method;
}

function displayOptionLabel(value) {
  if (CATS.includes(value)) return `${CAT_ICON[value] || ''} ${displayCategory(value)}`.trim();
  if (INCOME_TYPES.includes(value)) return displayIncomeType(value);
  if (PAYMENT_METHODS.includes(value)) return displayPaymentMethod(value);
  return displaySubcategory(value);
}

function optionTags(options, selected = '', labelFn = displayOptionLabel) {
  return withSelectedOption(options, selected).map(value => `
    <option value="${escapeHtml(value)}" ${value === selected ? 'selected' : ''}>${escapeHtml(labelFn(value))}</option>
  `).join('');
}

function showToast(msg, dur = 2400) {
  const t = document.getElementById('toast');
  t.textContent = localizeText(msg);
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

function syncUserFromAuth(user) {
  if (!user) return;
  state.user = {
    firstName: user.firstName || user.displayName || user.username || DEFAULT_USER.firstName,
    username: user.username || user.displayName || DEFAULT_USER.username,
    email: user.email || DEFAULT_USER.email
  };
  state = Store.setData(state);
}

async function hydrateStateForUser(user) {
  if (!user?.uid) {
    syncUserFromAuth(user);
    return;
  }
  const profileUser = {
    firstName: user.firstName || user.displayName || user.username || DEFAULT_USER.firstName,
    username: user.username || user.displayName || DEFAULT_USER.username,
    email: user.email || DEFAULT_USER.email
  };
  const cloudState = await FirebaseCloud.loadUserData(user.uid);
  if (cloudState) {
    state = Store.setData({
      ...cloudState,
      user: { ...DEFAULT_USER, ...(cloudState.user || {}), ...profileUser }
    });
  } else {
    state = Store.setData({
      ...state,
      user: { ...DEFAULT_USER, ...(state.user || {}), ...profileUser }
    });
    await FirebaseCloud.saveUserDataNow(user.uid, state);
  }
}

function firstNameFor(user = currentAuth || state.user || DEFAULT_USER) {
  const raw = user?.firstName || user?.displayName || user?.username || DEFAULT_USER.firstName;
  const first = String(raw).trim().split(/\s+/)[0];
  return first || DEFAULT_USER.firstName;
}

function authInputValue(id) {
  return document.getElementById(id)?.value.trim() || '';
}

function setAuthError(msg = '') {
  const el = document.getElementById('auth-error');
  if (!el) return;
  const text = String(msg || '');
  const friendly = text.includes('Missing or insufficient permissions')
    ? 'אין הרשאת Firestore. צריך לעדכן Rules ב-Firebase.'
    : text;
  el.textContent = friendly ? localizeText(friendly) : '';
}

function switchAuthMode(mode) {
  authMode = mode;
  renderAuth();
}

function authTabs(active) {
  return `
    <div class="auth-tabs">
      <button class="auth-tab ${active === AUTH_MODES.LOGIN ? 'active' : ''}" onclick="switchAuthMode('${AUTH_MODES.LOGIN}')" type="button">כניסה לחשבון</button>
      <button class="auth-tab ${active === AUTH_MODES.REGISTER ? 'active' : ''}" onclick="switchAuthMode('${AUTH_MODES.REGISTER}')" type="button">הרשמה</button>
    </div>`;
}

function renderLoginAuth() {
  return `
    ${authTabs(AUTH_MODES.LOGIN)}
    <div class="auth-title">כניסה לחשבון</div>
    <form class="auth-form" onsubmit="handleLogin(event)">
      <div class="form-group">
        <label class="form-label">שם משתמש או מייל</label>
        <input id="auth-login-id" class="form-input" autocomplete="username" placeholder="שם משתמש או מייל">
      </div>
      <div class="form-group">
        <label class="form-label">סיסמה</label>
        <input id="auth-login-password" class="form-input" type="password" autocomplete="current-password" placeholder="סיסמה">
      </div>
      <div id="auth-error" class="auth-error"></div>
      <button class="btn-primary" type="submit">התחבר</button>
      <button class="auth-inline-btn" onclick="switchAuthMode('${AUTH_MODES.FORGOT}')" type="button">שכחתי סיסמא</button>
      <button class="auth-inline-btn" onclick="switchAuthMode('${AUTH_MODES.REGISTER}')" type="button">אין לך חשבון? הרשמה</button>
    </form>`;
}

function renderRegisterAuth() {
  return `
    ${authTabs(AUTH_MODES.REGISTER)}
    <div class="auth-title">יצירת חשבון</div>
    <p class="auth-subtitle">המשתמש ייווצר בשכבת mock מקומית. בהמשך נחבר את אותם צעדים ל-Firebase Auth.</p>
    <form class="auth-form" onsubmit="handleRegister(event)">
      <div class="form-group">
        <label class="form-label">שם פרטי</label>
        <input id="auth-register-first-name" class="form-input" autocomplete="given-name">
      </div>
      <div class="form-group">
        <label class="form-label">שם משתמש</label>
        <input id="auth-register-name" class="form-input" autocomplete="username">
      </div>
      <div class="form-group">
        <label class="form-label">מייל</label>
        <input id="auth-register-email" class="form-input" type="email" autocomplete="email">
      </div>
      <div class="form-group">
        <label class="form-label">סיסמה</label>
        <input id="auth-register-password" class="form-input" type="password" autocomplete="new-password">
      </div>
      <div id="auth-error" class="auth-error"></div>
      <button class="btn-primary" type="submit">המשך לסליקה</button>
      <button class="auth-inline-btn" onclick="switchAuthMode('${AUTH_MODES.LOGIN}')" type="button">יש לך חשבון? כניסה לחשבון</button>
    </form>`;
}

function renderForgotPasswordAuth() {
  return `
    <div class="auth-title">שכחתי סיסמא</div>
    <p class="auth-subtitle">הזן את המייל שאיתו נרשמת ונשלח לך קישור לאיפוס סיסמה</p>
    <form class="auth-form" onsubmit="handleForgotPassword(event)">
      <div class="form-group">
        <label class="form-label">מייל</label>
        <input id="f-forgot-email" class="form-input" type="email" placeholder="your@email.com" autocomplete="email" required>
      </div>
      <div id="auth-error" class="auth-error"></div>
      <button class="btn-primary" type="submit">שלח קישור איפוס</button>
    </form>
    <button class="auth-inline-btn" onclick="switchAuthMode('${AUTH_MODES.LOGIN}')" type="button">חזרה לכניסה</button>`;
}

async function handleForgotPassword(e) {
  e.preventDefault();
  const email = document.getElementById('f-forgot-email').value.trim().toLowerCase();
  const errEl = document.getElementById('auth-error');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'שולח...';
  try {
    await Auth.sendPasswordReset(email);
    errEl.style.color = 'var(--accent)';
    errEl.textContent = '✓ קישור איפוס נשלח למייל שלך';
    btn.textContent = 'נשלח!';
  } catch (err) {
    errEl.style.color = '';
    errEl.textContent = err.message || 'שגיאה בשליחה — נסה שוב';
    btn.disabled = false;
    btn.textContent = 'שלח קישור איפוס';
  }
}

function renderPaymentAuth() {
  const pending = Auth.getPendingUser();
  const checkoutHref = escapeHtml(gumroadCheckoutHref());
  return `
    <div class="auth-title">תשלום</div>
    <p class="auth-subtitle">בודקים רכישה קיימת לפי המייל שלך. אם כבר שילמת, נכניס אותך אוטומטית.</p>
    <p class="auth-subtitle" data-no-i18n>${escapeHtml(pending?.email || '')}</p>
    <div id="auth-error" class="auth-error"></div>
    <button class="btn-primary" onclick="verifyGumroadCheckout()" type="button">בדוק תשלום קיים →</button>
    <a class="btn-secondary gumroad-button" href="${checkoutHref}" onclick="rememberGumroadCheckout()" data-gumroad-overlay-checkout="true">עבור לתשלום ב-Gumroad</a>
    <button class="auth-inline-btn" onclick="switchAuthMode('${AUTH_MODES.LOGIN}')" type="button">חזרה לכניסה</button>`;
}

function renderAuth() {
  const content = document.getElementById('auth-content');
  if (!content) return;
  if (authMode === AUTH_MODES.PAYMENT) content.innerHTML = renderPaymentAuth();
  else if (authMode === AUTH_MODES.REGISTER) content.innerHTML = renderRegisterAuth();
  else if (authMode === AUTH_MODES.FORGOT) content.innerHTML = renderForgotPasswordAuth();
  else content.innerHTML = renderLoginAuth();
  localizeElement(document.getElementById('auth-shell'));
}

function showAuth(mode = AUTH_MODES.LOGIN) {
  destroyCharts();
  authMode = mode;
  const appShell = document.getElementById('app-shell');
  const authShell = document.getElementById('auth-shell');
  if (appShell) appShell.style.display = 'none';
  if (authShell) authShell.style.display = 'block';
  renderAuth();
}

async function enterApp(user = currentAuth) {
  if (user) {
    currentAuth = user;
    await hydrateStateForUser(user);
  }
  const authShell = document.getElementById('auth-shell');
  const appShell = document.getElementById('app-shell');
  if (authShell) authShell.style.display = 'none';
  if (appShell) appShell.style.display = 'flex';
  applyLanguage();
  navigate('dashboard');
}

async function handleLogin(event) {
  event.preventDefault();
  const identifier = authInputValue('auth-login-id');
  const password = authInputValue('auth-login-password');
  if (!identifier || !password) { setAuthError('יש למלא את כל השדות'); return; }
  try {
    const result = await Auth.signInWithEmailAndPassword(identifier, password);
    if (result.needsPayment) {
      authMode = AUTH_MODES.PAYMENT;
      renderAuth();
      await verifyGumroadCheckout();
      return;
    }
    showToast('התחברת בהצלחה');
    await enterApp(result.user);
  } catch (err) {
    setAuthError(err.message || 'פרטים שגויים');
  }
}

async function handleRegister(event) {
  event.preventDefault();
  const firstName = authInputValue('auth-register-first-name');
  const username = authInputValue('auth-register-name');
  const email = authInputValue('auth-register-email');
  const password = authInputValue('auth-register-password');
  if (!firstName || !username || !email || !password) { setAuthError('יש למלא את כל השדות'); return; }
  if (password.length < 6) { setAuthError('סיסמה חייבת להכיל לפחות 6 תווים'); return; }
  try {
    await Auth.createUserWithEmailAndPassword(email, password, { firstName, username });
    authMode = AUTH_MODES.PAYMENT;
    renderAuth();
  } catch (err) {
    setAuthError(err.message || 'המשתמש כבר קיים');
  }
}

function gumroadCheckoutHref() {
  const pending = Auth.getPendingUser();
  const checkoutUrl = new URL(gumroadProductUrl());
  checkoutUrl.searchParams.set('wanted', 'true');
  checkoutUrl.searchParams.set('redirect', `${window.location.origin}${window.location.pathname}?paid=true`);
  if (pending?.email) checkoutUrl.searchParams.set('email', pending.email);
  return checkoutUrl.toString();
}

function rememberGumroadCheckout() {
  sessionStorage.setItem('smoney_gumroad_checkout_started', '1');
}

function startGumroadCheckout() {
  rememberGumroadCheckout();
  window.location.href = gumroadCheckoutHref();
}

function handleGumroadSaleMessage(event) {
  let data = event.data;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { return; }
  }
  if (data?.post_message_name !== 'sale') return;
  sessionStorage.setItem('smoney_gumroad_checkout_started', '1');
  verifyGumroadCheckout();
}

async function verifyGumroadCheckout() {
  const btn = document.querySelector('.btn-primary');
  const oldText = btn?.textContent;
  try {
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'בודק תשלום...';
    }
    const result = await Auth.verifyGumroadCheckout();
    showToast('הרשמה הושלמה');
    await enterApp(result.user);
  } catch (err) {
    setAuthError(err.message || 'לא נמצא תשלום מאושר');
    if (btn) {
      btn.disabled = false;
      btn.textContent = oldText || 'בדוק תשלום והיכנס →';
    }
  }
}

function monthNames() {
  return isEnglish() ? MONTHS_EN : MONTHS_HE;
}

function selectedMonthKey() {
  return monthKeyFromParts(state.selectedYear, state.selectedMonth);
}

function selectedMonthLabel() {
  return `${monthNames()[state.selectedMonth - 1]} ${state.selectedYear}`;
}

function periodModeFor(view = currentView) {
  return state.periodFilters?.[view] || PERIOD_MODES.MONTHLY;
}

function periodLabel(mode = periodModeFor()) {
  return mode === PERIOD_MODES.YEARLY
    ? (isEnglish() ? `Year ${state.selectedYear}` : `שנת ${state.selectedYear}`)
    : selectedMonthLabel();
}

function periodControls(view) {
  const mode = periodModeFor(view);
  return `
    <div class="period-toolbar">
      <div class="period-toggle" role="group" aria-label="סינון תקופה">
        <button class="period-option ${mode === PERIOD_MODES.MONTHLY ? 'active' : ''}" onclick="setPeriodMode('${view}', '${PERIOD_MODES.MONTHLY}')">חודשי</button>
        <button class="period-option ${mode === PERIOD_MODES.YEARLY ? 'active' : ''}" onclick="setPeriodMode('${view}', '${PERIOD_MODES.YEARLY}')">שנתי</button>
      </div>
      <button class="period-caption" onclick="openPeriodPicker()" type="button">${periodLabel(mode)}</button>
    </div>`;
}

function setPeriodMode(view, mode) {
  state.periodFilters = { ...DEFAULT_PERIOD_FILTERS, ...(state.periodFilters || {}), [view]: mode };
  state = Store.setData(state);
  updateMonthLabel();
  renderView(currentView);
}

function ensureStateMonth(key = selectedMonthKey()) {
  return ensureMonthBucket(state.months, key, state.budgetTemplate);
}

function getMonthBudgets(key = selectedMonthKey()) {
  return normalizeBudgets(state.months?.[key]?.budgets, state.budgetTemplate);
}

function getPeriodBudgets(mode = periodModeFor()) {
  if (mode !== PERIOD_MODES.YEARLY) return getMonthBudgets();
  const totals = CATS.reduce((acc, cat) => ({ ...acc, [cat]: 0 }), {});
  monthKeysForYear(state.selectedYear).forEach(key => {
    const budgets = getMonthBudgets(key);
    CATS.forEach(cat => { totals[cat] += budgets[cat] || 0; });
  });
  return totals;
}

function moveSelectedPeriod(delta) {
  const mode = periodModeFor(currentView);
  if (mode === PERIOD_MODES.YEARLY) {
    state.selectedYear += delta;
  } else {
    let month = state.selectedMonth + delta;
    let year = state.selectedYear;
    if (month > 12) { month = 1; year += 1; }
    if (month < 1) { month = 12; year -= 1; }
    state.selectedYear = year;
    state.selectedMonth = month;
  }
  ensureStateMonth();
  state = Store.setData(state);
  updateMonthLabel();
  renderView(currentView);
}

function nextMonth() {
  moveSelectedPeriod(1);
}

function prevMonth() {
  moveSelectedPeriod(-1);
}

function updateMonthLabel() {
  const label = document.getElementById('month-label');
  if (label) label.textContent = periodLabel(periodModeFor(currentView));
}

function renderStaticChrome() {
  const labels = VIEW_LABELS[state.language] || VIEW_LABELS.he;
  document.querySelectorAll('#sidebar .nav-btn, #bottom-nav .nav-btn').forEach(btn => {
    const label = btn.querySelector('.nav-label');
    if (!label) return;
    const view = btn.dataset.view;
    label.textContent = btn.closest('#bottom-nav') && view === 'dashboard' ? labels.home : labels[view];
  });

  const headerTitle = document.getElementById('header-title');
  if (headerTitle) headerTitle.textContent = labels[currentView] || '';

  const subtitle = document.querySelector('.sidebar-subtitle');
  if (subtitle) subtitle.textContent = isEnglish() ? 'Personal finance' : 'ניהול פיננסי אישי';

  const footerText = document.querySelector('.sidebar-footer-text');
  if (footerText) footerText.textContent = isEnglish() ? 'Real talk' : 'תכל׳ס';

  const footerSub = document.querySelector('.sidebar-footer-sub');
  if (footerSub) footerSub.textContent = isEnglish() ? 'Cashflow · Budget · Analysis' : 'תזרים · תקציב · ניתוח';

  const splashSub = document.querySelector('.splash-sub');
  if (splashSub) splashSub.textContent = isEnglish() ? 'Smart personal finance tracking' : 'מעקב פיננסי אישי חכם';

  const monthButtons = document.querySelectorAll('.month-nav-btn');
  if (monthButtons.length >= 2) {
    monthButtons[0].textContent = '‹';
    monthButtons[1].textContent = '›';
    monthButtons[0].onclick = isEnglish() ? prevMonth : nextMonth;
    monthButtons[1].onclick = isEnglish() ? nextMonth : prevMonth;
  }
}

function applyLanguage() {
  const dir = isEnglish() ? 'ltr' : 'rtl';
  document.documentElement.lang = state.language || LANGS.HE;
  document.documentElement.dir = dir;
  document.body.dir = dir;
  renderStaticChrome();
  updateMonthLabel();
}

function toggleLanguage() {
  state.language = isEnglish() ? LANGS.HE : LANGS.EN;
  state = Store.setData(state);
  applyLanguage();
  renderView(currentView);
  showToast(isEnglish() ? 'Language changed to English' : 'השפה הוחלפה לעברית');
}

const EXPLANATIONS = {
  disappeared: {
    title: 'כסף שנעלם',
    body: 'זה הסכום שבו ההוצאות בתקופה הנבחרת גבוהות מההכנסות. אם הוא 0, ההכנסות מכסות את ההוצאות בתקופה הזו.'
  },
  savingPotential: {
    title: 'פוטנציאל חיסכון',
    body: 'אומדן שמרני לכמה אפשר לנסות לחסוך מתוך ההוצאות הלא הכרחיות. כרגע הוא מחושב כ-30% מסך ההוצאות שסומנו כלא הכרחיות.'
  }
};

function infoButton(key) {
  return `<button class="info-btn" onclick="openInfo('${key}')" type="button" aria-label="הסבר">?</button>`;
}

function openInfo(key) {
  const info = EXPLANATIONS[key];
  if (!info) return;
  openModal(`
    <div class="modal-title">${escapeHtml(info.title)}</div>
    <p class="info-modal-text">${escapeHtml(info.body)}</p>
    <button class="btn-primary" onclick="closeModal()">הבנתי</button>
  `);
}

function persistSelectedPeriod(mode) {
  state.periodFilters = { ...DEFAULT_PERIOD_FILTERS, ...(state.periodFilters || {}), [currentView]: mode };
  ensureStateMonth();
  state = Store.setData(state);
  closeModal();
  updateMonthLabel();
  renderView(currentView);
}

function openPeriodPicker() {
  periodPickerYear = state.selectedYear;
  renderPeriodPicker();
}

function changePeriodPickerYear(delta) {
  periodPickerYear += delta;
  renderPeriodPicker();
}

function selectCalendarMonth(year, month) {
  state.selectedYear = year;
  state.selectedMonth = month;
  persistSelectedPeriod(PERIOD_MODES.MONTHLY);
}

function selectCalendarYear(year) {
  state.selectedYear = year;
  persistSelectedPeriod(PERIOD_MODES.YEARLY);
}

function jumpCalendarToday() {
  const { year, month } = currentPeriodParts();
  state.selectedYear = year;
  state.selectedMonth = month;
  persistSelectedPeriod(PERIOD_MODES.MONTHLY);
}

function renderPeriodPicker() {
  const activeMode = periodModeFor(currentView);
  const activeMonth = state.selectedMonth;
  const activeYear = state.selectedYear;
  const years = Array.from({ length: 7 }, (_, i) => periodPickerYear - 3 + i);
  const prevYearIcon = isEnglish() ? '‹' : '›';
  const nextYearIcon = isEnglish() ? '›' : '‹';
  openModal(`
    <div class="modal-title">בחירת תקופה</div>
    <div class="calendar-picker">
      <div class="calendar-head">
        <button class="calendar-nav-btn" onclick="changePeriodPickerYear(-1)" type="button">${prevYearIcon}</button>
        <div class="calendar-year-title">${periodPickerYear}</div>
        <button class="calendar-nav-btn" onclick="changePeriodPickerYear(1)" type="button">${nextYearIcon}</button>
      </div>

      <div class="calendar-year-strip">
        ${years.map(year => `
          <button class="calendar-year-btn ${year === activeYear ? 'active' : ''}" onclick="selectCalendarYear(${year})" type="button">
            ${year}
          </button>`).join('')}
      </div>

      <div class="calendar-month-grid">
        ${monthNames().map((monthName, i) => {
          const month = i + 1;
          const isActive = activeMode === PERIOD_MODES.MONTHLY && activeYear === periodPickerYear && activeMonth === month;
          return `
            <button class="calendar-month-btn ${isActive ? 'active' : ''}" onclick="selectCalendarMonth(${periodPickerYear}, ${month})" type="button">
              <span>${monthName}</span>
              <small>${pad2(month)}</small>
            </button>`;
        }).join('')}
      </div>

      <div class="calendar-action-row">
        <button class="calendar-secondary-btn" onclick="jumpCalendarToday()" type="button">היום</button>
        <button class="calendar-primary-btn" onclick="selectCalendarYear(${periodPickerYear})" type="button">הצג שנה מלאה</button>
      </div>
    </div>
  `);
}

// ─── CALCULATIONS ──────────────────────────────────────────────────────────

function getCycleDates() {
  const now = new Date();
  const startDay = state.cycleStartDay || 1;
  let year = now.getFullYear(), month = now.getMonth();
  if (now.getDate() < startDay) {
    month -= 1;
    if (month < 0) { month = 11; year -= 1; }
  }
  const cycleStart = new Date(year, month, startDay);
  const nextStart = new Date(year, month + 1, startDay);
  const cycleEnd = new Date(nextStart - 86400000);
  return {
    start: cycleStart.toISOString().slice(0, 10),
    end: cycleEnd.toISOString().slice(0, 10)
  };
}

function cyclePeriodLabel() {
  const { start, end } = getCycleDates();
  const f = d => new Date(d + 'T00:00:00').toLocaleDateString(localeCode(), { day: 'numeric', month: 'numeric' });
  return `${f(start)} – ${f(end)}`;
}

function getPeriodDates(mode = periodModeFor()) {
  if (mode === PERIOD_MODES.YEARLY) {
    return { start: `${state.selectedYear}-01-01`, end: `${state.selectedYear}-12-31` };
  }
  const month = state.selectedMonth;
  const lastDay = new Date(state.selectedYear, month, 0).getDate();
  return {
    start: `${state.selectedYear}-${pad2(month)}-01`,
    end: `${state.selectedYear}-${pad2(month)}-${pad2(lastDay)}`
  };
}

function filtered(arr, dateField, mode = periodModeFor()) {
  const { start, end } = getPeriodDates(mode);
  return arr.filter(x => x[dateField] >= start && x[dateField] <= end);
}

function totals(mode = periodModeFor()) {
  const inc = filtered(state.incomes, 'date', mode);
  const exp = filtered(state.expenses, 'date', mode);
  const totalIncome = inc.reduce((s, i) => s + i.amount, 0);
  const totalExpenses = exp.reduce((s, e) => s + e.amount, 0);
  const savings = totalIncome - totalExpenses;
  const savingsPct = totalIncome > 0 ? savings / totalIncome : 0;
  const disappeared = Math.max(0, totalExpenses - totalIncome);
  return { totalIncome, totalExpenses, savings, savingsPct, disappeared };
}

function byCategory(mode = periodModeFor()) {
  const exp = filtered(state.expenses, 'date', mode);
  return CATS.reduce((acc, cat) => {
    acc[cat] = exp.filter(e => e.category === cat).reduce((s, e) => s + e.amount, 0);
    return acc;
  }, {});
}

function nonEssentialTotal(mode = periodModeFor()) {
  return filtered(state.expenses, 'date', mode)
    .filter(e => e.essential === false)
    .reduce((s, e) => s + e.amount, 0);
}

function monthlyData(year = state.selectedYear) {
  return monthNames().map((name, i) => {
    const m = i + 1;
    const key = monthKeyFromParts(year, m);
    const bucket = state.months[key] || { incomes: [], expenses: [] };
    const inc = (bucket.incomes || []).reduce((s, x) => s + x.amount, 0);
    const exp = (bucket.expenses || []).reduce((s, x) => s + x.amount, 0);
    return { name, inc, exp, sav: inc - exp };
  });
}

// ─── ROUTER ────────────────────────────────────────────────────────────────

function navigate(view) {
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const viewEl = document.getElementById('view-' + view);
  if (viewEl) viewEl.classList.add('active');
  // Activate all nav buttons with this view (bottom nav + sidebar)
  document.querySelectorAll(`[data-view="${view}"]`).forEach(b => b.classList.add('active'));
  const labels = VIEW_LABELS[state.language] || VIEW_LABELS.he;
  document.getElementById('header-title').textContent = labels[view] || '';
  updateMonthLabel();
  renderView(view);
}

function renderView(view) {
  destroyCharts();
  switch (view) {
    case 'dashboard': renderDashboard(); break;
    case 'income':    renderIncome();    break;
    case 'expenses':  renderExpenses();  break;
    case 'budget':    renderBudget();    break;
    case 'analysis':  renderAnalysis();  break;
    case 'profile':   renderProfile();   break;
  }
  localizeElement(document.getElementById('view-' + view));
  renderStaticChrome();
}

function destroyCharts() {
  Object.values(charts).forEach(c => { try { c.destroy(); } catch {} });
  charts = {};
}

// ─── DASHBOARD ─────────────────────────────────────────────────────────────

function renderDashboard() {
  const mode = periodModeFor('dashboard');
  const { totalIncome, totalExpenses, savings: cashflowBalance, savingsPct: cashflowPct, disappeared } = totals(mode);
  const byCat = byCategory(mode);
  const nonEss = nonEssentialTotal(mode);
  const recent = sortByExecutionDateDesc(filtered(state.expenses, 'date', mode)).slice(0, 5);

  const invested = byCat['חיסכון והשקעות'] || 0;
  const investedPct = totalIncome > 0 ? invested / totalIncome : 0;
  const goal = state.savingsGoal / 100;
  const targetInvestment = totalIncome * goal;
  const recommendedExpenseBudget = Math.max(0, totalIncome - targetInvestment);
  const balanceLabel = mode === PERIOD_MODES.YEARLY ? 'יתרה שנתית' : 'יתרה חודשית';
  const periodNoun = mode === PERIOD_MODES.YEARLY ? 'שנתי' : 'חודשי';
  const periodPlural = mode === PERIOD_MODES.YEARLY ? 'שנתיות' : 'חודשיות';
  const periodIncomeAdj = mode === PERIOD_MODES.YEARLY ? 'שנתית' : 'חודשית';
  const balanceClass = cashflowBalance >= 0 ? 'positive' : 'negative';
  const investedColor = investedPct >= goal ? 'green' : investedPct > 0 ? 'gold' : 'orange';
  const investedW = goal > 0 ? Math.round(Math.min(100, Math.max(0, (investedPct / goal) * 100))) : 0;
  const greetingName = firstNameFor();

  const el = document.getElementById('view-dashboard');
  el.innerHTML = `
    <div style="padding-top:8px">
      ${periodControls('dashboard')}
      <div class="greeting">
        <h2>שלום <span data-no-i18n>${escapeHtml(greetingName)}</span> 👋</h2>
        <p class="greeting-date">${new Date().toLocaleDateString(localeCode(),{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
        <p style="font-size:12px;color:var(--gold);margin-top:4px">תקופה מוצגת: ${periodLabel(mode)}</p>
      </div>

      <div class="glass-card balance-card">
        <div class="balance-label">${balanceLabel}</div>
        <div class="balance-amount ${balanceClass}">${fmtFull(cashflowBalance)}</div>
        <div class="balance-row">
          <div class="balance-item">
            <span class="balance-item-label">הכנסות</span>
            <span class="balance-item-value income">${fmt(totalIncome)}</span>
          </div>
          <div class="balance-divider"></div>
          <div class="balance-item">
            <span class="balance-item-label">הוצאות</span>
            <span class="balance-item-value expense">${fmt(totalExpenses)}</span>
          </div>
          <div class="balance-divider"></div>
          <div class="balance-item">
            <span class="balance-item-label">% יתרה</span>
            <span class="balance-item-value">${(cashflowPct*100).toFixed(1)}%</span>
          </div>
        </div>
      </div>

      ${disappeared > 0 ? `
      <div class="glass-card warning-banner">
        <div class="warning-emoji">❓</div>
        <div>
          <div class="warning-title metric-label">כסף שנעלם ${infoButton('disappeared')}</div>
          <div class="warning-amount">${fmtFull(disappeared)}</div>
          <div class="warning-sub">הוצאות עולות על הכנסות</div>
        </div>
      </div>` : ''}

      <div class="glass-card savings-track-card">
        <div class="savings-track-header">
          <span class="savings-track-label">הפקדות ${periodPlural} לחיסכון והשקעות</span>
          <div style="display:flex;align-items:center;gap:10px">
            <span class="savings-track-pct">${fmtFull(invested)}</span>
            <button onclick="openSavingsGoal()" style="background:var(--gold-glow);border:1px solid var(--border);color:var(--gold);font-size:11px;padding:3px 10px;border-radius:99px;cursor:pointer;font-family:inherit">יעד: ${state.savingsGoal}% ✎</button>
          </div>
        </div>
        <div class="progress-track target-progress-track">
          <div class="progress-fill ${investedColor}" style="width:${investedW}%"></div>
        </div>
        <div class="progress-labels target-progress-labels"><span>0%</span><span>50%</span><span>100%</span></div>
        <div style="font-size:12px;color:var(--text-sec);margin-top:8px">
          ${(investedPct*100).toFixed(1)}% מההכנסה ה${periodIncomeAdj}, מבוסס על הוצאות שסווגו תחת <strong style="color:var(--green)">חיסכון והשקעות</strong>${totalIncome > 0 ? `, מתוך ${fmtFull(totalIncome)} הכנסות` : ''}
        </div>
        ${totalIncome > 0 ? `<div style="font-size:12px;color:var(--text-sec);margin-top:8px">תקציב מומלץ להוצאות ${periodPlural}: <strong style="color:var(--green)">${fmtFull(recommendedExpenseBudget)}</strong> (הכנסות פחות יעד הפקדה ${periodNoun} ${fmtFull(targetInvestment)})</div>` : ''}
      </div>

      <div class="kpi-row">
        <div class="kpi-card">
          <div class="kpi-icon">🧾</div>
          <div class="kpi-label">הוצ׳ לא הכרחיות</div>
          <div class="kpi-value orange">${fmt(nonEss)}</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-icon">💡</div>
          <div class="kpi-label metric-label">פוטנציאל חיסכון ${infoButton('savingPotential')}</div>
          <div class="kpi-value green">${fmt(nonEss * 0.3)}</div>
        </div>
      </div>

      <div class="glass-card chart-card">
        <div class="card-title">הוצאות לפי קטגוריה</div>
        <div class="chart-wrap"><canvas id="dashDonut"></canvas></div>
        <div class="cat-legend" id="cat-legend"></div>
      </div>

      <div class="section-header">
        <h3>עסקאות אחרונות</h3>
        <button class="section-header-btn" onclick="navigate('expenses')">הכל ›</button>
      </div>
      ${recent.length === 0 ? `<div class="empty-state"><div class="empty-icon">📋</div><div class="empty-title">אין עסקאות עדיין</div><div class="empty-sub">הוסף הוצאה ראשונה ›</div></div>` : ''}
      ${recent.map(e => txItem(e, 'expense')).join('')}
    </div>
  `;

  setTimeout(() => renderDonut('dashDonut', byCat), 60);
}

function txItem(item, type) {
  const isIncome = type === 'income';
  const icon = isIncome ? '💰' : (CAT_ICON[item.category] || '📦');
  const color = isIncome ? 'var(--green)' : (CAT_COLOR[item.category] || '#95A5A6');
  const label = isIncome ? displayIncomeType(item.type) : displayCategory(item.category);
  const hasUserDescription = Boolean((item.description || '').trim());
  const description = hasUserDescription ? item.description : label;
  const sign = isIncome ? '+' : '-';
  const amtClass = isIncome ? 'income' : 'expense';
  return `
    <div class="tx-item fade-in">
      <div class="tx-icon" style="background:${color}22">${icon}</div>
      <div class="tx-info">
        <div class="tx-desc"${hasUserDescription ? ' data-no-i18n' : ''}>${escapeHtml(description)}</div>
        <div class="tx-meta">${escapeHtml(label)} · ${fmtDate(item.date)}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="tx-amount ${amtClass}">${sign}${fmtFull(item.amount)}</div>
        <div class="tx-actions">
          <button class="tx-edit-btn" onclick="openEditEntry('${item.id}','${type}')" aria-label="עריכה">✎</button>
          <button class="tx-del-btn" onclick="deleteEntry('${item.id}','${type}')" aria-label="מחיקה">✕</button>
        </div>
      </div>
    </div>`;
}

function deleteEntry(id, type) {
  if (type === 'income') state.incomes = state.incomes.filter(x => x.id !== id);
  else state.expenses = state.expenses.filter(x => x.id !== id);
  state = Store.setData(state);
  renderView(currentView);
  showToast('נמחק בהצלחה');
}

// ─── DONUT CHART ───────────────────────────────────────────────────────────

function renderDonut(canvasId, byCat) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const data = CATS.map(c => byCat[c] || 0);
  const total = data.reduce((s, v) => s + v, 0);
  if (total === 0) {
    canvas.parentElement.innerHTML = '<div class="empty-state" style="padding:20px"><div class="empty-icon">📊</div><div class="empty-title">אין נתונים עדיין</div></div>';
    localizeElement(canvas.parentElement);
    return;
  }

  charts[canvasId] = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: CATS.map(displayCategory),
      datasets: [{
        data,
        backgroundColor: CATS.map(c => CAT_COLOR[c] + 'CC'),
        borderColor: CATS.map(c => CAT_COLOR[c]),
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true, cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${fmtFull(ctx.parsed)} (${((ctx.parsed/total)*100).toFixed(1)}%)`
          },
          bodyFont: { family: 'Arial' }, titleFont: { family: 'Arial' },
          rtl: !isEnglish(), textDirection: isEnglish() ? 'ltr' : 'rtl'
        }
      }
    }
  });

  // Legend
  const legend = document.getElementById('cat-legend');
  if (legend) {
    const sorted = CATS.map((c, i) => ({ c, v: data[i] })).filter(x => x.v > 0).sort((a, b) => b.v - a.v);
    legend.innerHTML = sorted.map(({ c, v }) => `
      <div class="cat-legend-item">
        <div class="cat-dot" style="background:${CAT_COLOR[c]}"></div>
        <span class="cat-legend-name">${CAT_ICON[c]} ${displayCategory(c)}</span>
        <span class="cat-legend-pct">${((v/total)*100).toFixed(0)}%</span>
        <span class="cat-legend-val">${fmtFull(v)}</span>
      </div>`).join('');
    localizeElement(legend);
  }
}

// ─── INCOME ────────────────────────────────────────────────────────────────

function renderIncome() {
  const mode = periodModeFor('income');
  const inc = sortByExecutionDateDesc(filtered(state.incomes, 'date', mode));
  const total = inc.reduce((s, i) => s + i.amount, 0);
  const el = document.getElementById('view-income');
  el.innerHTML = `
    <div style="padding-top:8px">
      ${periodControls('income')}
      <div class="view-header-card">
        <div>
          <div class="view-header-label">סה"כ הכנסות ${mode === PERIOD_MODES.YEARLY ? 'בשנה' : 'בחודש'}</div>
          <div class="view-header-total income">${fmtFull(total)}</div>
          <div class="view-header-count">${inc.length} רשומות</div>
        </div>
        <button class="add-fab" onclick="openAddIncome()">+</button>
      </div>
      ${inc.length === 0
        ? `<div class="empty-state"><div class="empty-icon">💰</div><div class="empty-title">אין הכנסות בתקופה הזו</div><div class="empty-sub">לחץ + להוספת הכנסה ראשונה</div></div>`
        : inc.map(i => txItem(i, 'income')).join('')}
    </div>`;
}

// ─── EXPENSES ──────────────────────────────────────────────────────────────

function renderExpenses() {
  const mode = periodModeFor('expenses');
  const exp = sortByExecutionDateDesc(filtered(state.expenses, 'date', mode));
  const total = exp.reduce((s, e) => s + e.amount, 0);
  const el = document.getElementById('view-expenses');
  el.innerHTML = `
    <div style="padding-top:8px">
      ${periodControls('expenses')}
      <div class="view-header-card">
        <div>
          <div class="view-header-label">סה"כ הוצאות ${mode === PERIOD_MODES.YEARLY ? 'בשנה' : 'בחודש'}</div>
          <div class="view-header-total expense">${fmtFull(total)}</div>
          <div class="view-header-count">${exp.length} רשומות</div>
        </div>
        <button class="add-fab" onclick="openAddExpense()">+</button>
      </div>
      ${exp.length === 0
        ? `<div class="empty-state"><div class="empty-icon">💸</div><div class="empty-title">אין הוצאות בתקופה הזו</div><div class="empty-sub">לחץ + להוספת הוצאה ראשונה</div></div>`
        : exp.map(e => txItem(e, 'expense')).join('')}
    </div>`;
}

// ─── BUDGET ────────────────────────────────────────────────────────────────

function renderBudget() {
  const mode = periodModeFor('budget');
  const byCat = byCategory(mode);
  const budgets = getPeriodBudgets(mode);
  const totalBudget = CATS.reduce((s, cat) => s + (budgets[cat] || 0), 0);
  const totalSpent = Object.values(byCat).reduce((s, v) => s + v, 0);
  const over = CATS.filter(c => byCat[c] > budgets[c]).length;
  const el = document.getElementById('view-budget');

  const items = CATS.map(cat => {
    const budget = budgets[cat] || 0;
    const spent = byCat[cat] || 0;
    const pct = budget > 0 ? spent / budget : (spent > 0 ? 1 : 0);
    const status = pct >= 1 ? 'over' : pct >= 0.8 ? 'warn' : 'ok';
    const statusLabel = pct >= 1 ? 'חריגה! ⚠' : pct >= 0.8 ? 'קרוב לגבול 🟡' : '';
    const barColor = pct >= 1 ? 'red' : pct >= 0.8 ? 'orange' : 'green';
    const w = Math.min(100, pct * 100);
    return `
      <div class="budget-item">
        <div class="budget-item-header">
          <div class="budget-item-left">
            <span class="budget-item-icon">${CAT_ICON[cat]}</span>
            <span class="budget-item-name">${displayCategory(cat)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            ${statusLabel ? `<span class="budget-item-status status-${status}">${statusLabel}</span>` : ''}
            ${mode === PERIOD_MODES.MONTHLY
              ? `<button class="budget-edit-btn" onclick="openEditBudget('${cat}')">עריכה</button>`
              : `<button class="budget-edit-btn" onclick="setPeriodMode('budget', '${PERIOD_MODES.MONTHLY}')">חודש</button>`}
          </div>
        </div>
        <div class="progress-track">
          <div class="progress-fill ${barColor}" style="width:${w}%"></div>
        </div>
        <div class="budget-item-amounts">
          <span>${fmtFull(spent)} הוצאו</span>
          <span class="budget-item-pct">${(pct*100).toFixed(0)}%</span>
          <span>מתוך ${fmtFull(budget)}</span>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div style="padding-top:8px">
      ${periodControls('budget')}
      <div class="budget-summary">
        <div class="budget-summary-item">
          <div class="budget-summary-val" style="color:var(--gold)">${fmtFull(totalBudget)}</div>
          <div class="budget-summary-lbl">תקציב ${mode === PERIOD_MODES.YEARLY ? 'שנתי' : 'חודשי'}</div>
        </div>
        <div class="budget-summary-item">
          <div class="budget-summary-val" style="color:var(--red)">${fmtFull(totalSpent)}</div>
          <div class="budget-summary-lbl">הוצאה בפועל</div>
        </div>
        <div class="budget-summary-item">
          <div class="budget-summary-val" style="color:${over > 0 ? 'var(--red)' : 'var(--green)'}">${over}</div>
          <div class="budget-summary-lbl">קטגוריות בחריגה</div>
        </div>
      </div>
      ${items}
    </div>`;
}

// ─── ANALYSIS ──────────────────────────────────────────────────────────────

function renderAnalysis() {
  const { totalIncome, totalExpenses, savings, savingsPct, disappeared } = totals();
  const byCat = byCategory();
  const nonEss = nonEssentialTotal();
  const potential = nonEss * 0.3;
  const sorted = CATS.map(c => ({ c, v: byCat[c] || 0 })).filter(x => x.v > 0).sort((a, b) => b.v - a.v);
  const maxVal = sorted[0]?.v || 1;

  const el = document.getElementById('view-analysis');
  el.innerHTML = `
    <div style="padding-top:8px">
      <div class="glass-card" style="text-align:center;padding:22px 20px">
        <div style="font-size:32px;margin-bottom:8px">🔍</div>
        <div style="font-size:18px;font-weight:700;margin-bottom:4px">תכל׳ס, לאן הכסף שלי</div>
        <div style="font-size:13px;color:var(--text-sec)">ניתוח מלא של ההוצאות שלך</div>
      </div>

      <div class="insight-grid">
        <div class="insight-card">
          <div class="insight-icon">💸</div>
          <div class="insight-label">סה"כ הוצאות</div>
          <div class="insight-value" style="color:var(--red)">${fmtFull(totalExpenses)}</div>
        </div>
        <div class="insight-card">
          <div class="insight-icon">🧾</div>
          <div class="insight-label">לא הכרחי</div>
          <div class="insight-value" style="color:var(--orange)">${fmtFull(nonEss)}</div>
        </div>
        <div class="insight-card">
          <div class="insight-icon">💡</div>
          <div class="insight-label metric-label">פוטנציאל חיסכון ${infoButton('savingPotential')}</div>
          <div class="insight-value" style="color:var(--green)">${fmtFull(potential)}</div>
        </div>
        <div class="insight-card">
          <div class="insight-icon">❓</div>
          <div class="insight-label metric-label">כסף שנעלם ${infoButton('disappeared')}</div>
          <div class="insight-value" style="color:${disappeared > 0 ? 'var(--red)' : 'var(--green)'}">${fmtFull(disappeared)}</div>
        </div>
      </div>

      <div class="glass-card chart-card">
        <div class="card-title">התפלגות הוצאות</div>
        <div class="chart-wrap"><canvas id="analysisDonut"></canvas></div>
      </div>

      <div class="section-header"><h3>TOP קטגוריות</h3></div>
      ${sorted.slice(0, 8).map((item, i) => `
        <div class="top-cat-item fade-in">
          <div class="top-cat-rank">${i + 1}</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;justify-content:space-between">
              <div class="top-cat-name">${CAT_ICON[item.c]} ${displayCategory(item.c)}</div>
              <div class="top-cat-amount">${fmtFull(item.v)}</div>
            </div>
            <div class="top-cat-bar-wrap">
              <div class="top-cat-bar" style="width:${(item.v/maxVal*100).toFixed(0)}%;background:${CAT_COLOR[item.c]}"></div>
            </div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${totalExpenses > 0 ? ((item.v/totalExpenses)*100).toFixed(1) : 0}% מסך הכל</div>
          </div>
        </div>`).join('')}

      <div class="section-header"><h3>סיכום שנתי</h3></div>
      <div class="glass-card chart-card">
        <div class="card-title">הכנסות מול הוצאות — ${state.selectedYear}</div>
        <div class="bar-chart-wrap"><canvas id="annualBar"></canvas></div>
      </div>
    </div>`;

  setTimeout(() => {
    renderDonut('analysisDonut', byCat);
    renderBar('annualBar');
  }, 60);
}

function renderBar(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const data = monthlyData();
  charts[canvasId] = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: monthNames().map(m => m.slice(0, 3)),
      datasets: [
        { label: localizeText('הכנסות'), data: data.map(d => d.inc), backgroundColor: '#2ECC7188', borderColor: '#2ECC71', borderWidth: 1.5, borderRadius: 6 },
        { label: localizeText('הוצאות'), data: data.map(d => d.exp), backgroundColor: '#FF4D6D88', borderColor: '#FF4D6D', borderWidth: 1.5, borderRadius: 6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'bottom', labels: { color: '#8CA0C8', font: { size: 12 }, boxWidth: 14, padding: 16 } },
        tooltip: {
          callbacks: { label: ctx => ` ${fmtFull(ctx.parsed.y)}` },
          bodyFont: { family: 'Arial' },
          rtl: !isEnglish(),
          textDirection: isEnglish() ? 'ltr' : 'rtl'
        }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#8CA0C8', font: { size: 11 } } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8CA0C8', font: { size: 11 }, callback: v => '₪' + (v/1000).toFixed(0) + 'K' } }
      }
    }
  });
}

// ─── MODALS ────────────────────────────────────────────────────────────────

function openModal(html) {
  const content = document.getElementById('modal-content');
  content.innerHTML = html;
  localizeElement(content);
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function openAddIncome() {
  openModal(`
    <div class="modal-title">הוספת הכנסה</div>
    <div class="form-group">
      <label class="form-label">תאריך</label>
      <input id="f-date" type="date" class="form-input" value="${today()}">
    </div>
    <div class="form-group">
      <label class="form-label">סוג הכנסה</label>
      <select id="f-type" class="form-input">
        ${optionTags(INCOME_TYPES)}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">תיאור (אופציונלי)</label>
      <input id="f-desc" type="text" class="form-input" placeholder="למשל: משכורת ינואר">
    </div>
    <div class="form-group">
      <label class="form-label">סכום (₪)</label>
      <input id="f-amount" type="number" class="form-input" placeholder="0" inputmode="numeric">
    </div>
    <button class="btn-primary" onclick="saveIncome()">הוסף הכנסה ✓</button>
    <button class="btn-secondary" onclick="closeModal()">ביטול</button>
  `);
}

function saveIncome() {
  const amount = parseFloat(document.getElementById('f-amount').value);
  if (!amount || amount <= 0) { showToast('הזן סכום תקין'); return; }
  const date = document.getElementById('f-date').value || today();
  state.incomes.push({
    id: uid(),
    date,
    monthKey: monthKeyFromDate(date),
    type: document.getElementById('f-type').value,
    description: document.getElementById('f-desc').value.trim(),
    amount
  });
  state = Store.setData(state);
  closeModal();
  renderView(currentView);
  showToast('הכנסה נוספה ✓');
}

function openEditEntry(id, type) {
  if (type === 'income') openEditIncome(id);
  else openEditExpense(id);
}

function openEditIncome(id) {
  const entry = state.incomes.find(x => x.id === id);
  if (!entry) { showToast('הרשומה לא נמצאה'); return; }
  openModal(`
    <div class="modal-title">עריכת הכנסה</div>
    <div class="form-group">
      <label class="form-label">תאריך</label>
      <input id="f-date" type="date" class="form-input" value="${escapeHtml(entry.date || today())}">
    </div>
    <div class="form-group">
      <label class="form-label">סוג הכנסה</label>
      <select id="f-type" class="form-input">
        ${optionTags(INCOME_TYPES, entry.type || OTHER_OPTION)}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">תיאור (אופציונלי)</label>
      <input id="f-desc" type="text" class="form-input" value="${escapeHtml(entry.description || '')}" placeholder="למשל: משכורת ינואר">
    </div>
    <div class="form-group">
      <label class="form-label">סכום (₪)</label>
      <input id="f-amount" type="number" class="form-input" value="${escapeHtml(entry.amount || '')}" inputmode="numeric">
    </div>
    <button class="btn-primary" onclick="updateIncome('${id}')">שמור שינויים ✓</button>
    <button class="btn-secondary" onclick="closeModal()">ביטול</button>
  `);
}

function updateIncome(id) {
  const amount = parseFloat(document.getElementById('f-amount').value);
  if (!amount || amount <= 0) { showToast('הזן סכום תקין'); return; }
  const date = document.getElementById('f-date').value || today();
  state.incomes = state.incomes.map(entry => entry.id === id ? {
    ...entry,
    date,
    monthKey: monthKeyFromDate(date),
    type: document.getElementById('f-type').value,
    description: document.getElementById('f-desc').value.trim(),
    amount
  } : entry);
  state = Store.setData(state);
  closeModal();
  renderView(currentView);
  showToast('הכנסה עודכנה ✓');
}

function openAddExpense() {
  openModal(`
    <div class="modal-title">הוספת הוצאה</div>
    <div class="form-group">
      <label class="form-label">תאריך</label>
      <input id="f-date" type="date" class="form-input" value="${today()}">
    </div>
    <div class="form-group">
      <label class="form-label">קטגוריה</label>
      <select id="f-cat" class="form-input" onchange="updateSubcats()">
        ${optionTags(CATS, '', c => `${CAT_ICON[c] || ''} ${displayCategory(c)}`)}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">תת-קטגוריה</label>
      <select id="f-subcat" class="form-input">
        ${optionTags(SUBCATS[CATS[0]] || [])}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">תיאור (אופציונלי)</label>
      <input id="f-desc" type="text" class="form-input" placeholder="למשל: שופרסל יום ג׳">
    </div>
    <div class="form-group">
      <label class="form-label">אמצעי תשלום</label>
      <select id="f-pay" class="form-input">
        ${optionTags(PAYMENT_METHODS)}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">סכום (₪)</label>
      <input id="f-amount" type="number" class="form-input" placeholder="0" inputmode="numeric">
    </div>
    <div class="form-group">
      <label class="form-label">סוג הוצאה</label>
      <div class="form-toggle">
        <button class="toggle-btn active" id="tb-essential" onclick="setEssential(true)">✅ הכרחי</button>
        <button class="toggle-btn" id="tb-nonessential" onclick="setEssential(false)">💸 לא הכרחי</button>
      </div>
    </div>
    <button class="btn-primary" onclick="saveExpense()">הוסף הוצאה ✓</button>
    <button class="btn-secondary" onclick="closeModal()">ביטול</button>
  `);
  _essential = true;
}

let _essential = true;
function setEssential(val) {
  _essential = val;
  document.getElementById('tb-essential').classList.toggle('active', val);
  document.getElementById('tb-nonessential').classList.toggle('active', !val);
}

function updateSubcats(selected = '') {
  const cat = document.getElementById('f-cat').value;
  const sel = document.getElementById('f-subcat');
  sel.innerHTML = optionTags(SUBCATS[cat] || ['כללי'], selected);
  localizeElement(sel);
}

function saveExpense() {
  const amount = parseFloat(document.getElementById('f-amount').value);
  if (!amount || amount <= 0) { showToast('הזן סכום תקין'); return; }
  const date = document.getElementById('f-date').value || today();
  state.expenses.push({
    id: uid(),
    date,
    monthKey: monthKeyFromDate(date),
    category: document.getElementById('f-cat').value,
    subCategory: document.getElementById('f-subcat').value,
    description: document.getElementById('f-desc').value.trim(),
    paymentMethod: document.getElementById('f-pay').value,
    amount,
    essential: _essential
  });
  state = Store.setData(state);
  closeModal();
  renderView(currentView);
  showToast('הוצאה נוספה ✓');
}

function openEditExpense(id) {
  const entry = state.expenses.find(x => x.id === id);
  if (!entry) { showToast('הרשומה לא נמצאה'); return; }
  const category = entry.category || CATS[0];
  const isEssential = entry.essential !== false;
  _essential = isEssential;
  openModal(`
    <div class="modal-title">עריכת הוצאה</div>
    <div class="form-group">
      <label class="form-label">תאריך</label>
      <input id="f-date" type="date" class="form-input" value="${escapeHtml(entry.date || today())}">
    </div>
    <div class="form-group">
      <label class="form-label">קטגוריה</label>
      <select id="f-cat" class="form-input" onchange="updateSubcats()">
        ${optionTags(CATS, category, c => `${CAT_ICON[c] || ''} ${displayCategory(c)}`)}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">תת-קטגוריה</label>
      <select id="f-subcat" class="form-input">
        ${optionTags(SUBCATS[category] || ['כללי'], entry.subCategory || OTHER_OPTION)}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">תיאור (אופציונלי)</label>
      <input id="f-desc" type="text" class="form-input" value="${escapeHtml(entry.description || '')}" placeholder="למשל: שופרסל יום ג׳">
    </div>
    <div class="form-group">
      <label class="form-label">אמצעי תשלום</label>
      <select id="f-pay" class="form-input">
        ${optionTags(PAYMENT_METHODS, entry.paymentMethod || PAYMENT_METHODS[0])}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">סכום (₪)</label>
      <input id="f-amount" type="number" class="form-input" value="${escapeHtml(entry.amount || '')}" inputmode="numeric">
    </div>
    <div class="form-group">
      <label class="form-label">סוג הוצאה</label>
      <div class="form-toggle">
        <button class="toggle-btn ${isEssential ? 'active' : ''}" id="tb-essential" onclick="setEssential(true)">✅ הכרחי</button>
        <button class="toggle-btn ${!isEssential ? 'active' : ''}" id="tb-nonessential" onclick="setEssential(false)">💸 לא הכרחי</button>
      </div>
    </div>
    <button class="btn-primary" onclick="updateExpense('${id}')">שמור שינויים ✓</button>
    <button class="btn-secondary" onclick="closeModal()">ביטול</button>
  `);
}

function updateExpense(id) {
  const amount = parseFloat(document.getElementById('f-amount').value);
  if (!amount || amount <= 0) { showToast('הזן סכום תקין'); return; }
  const date = document.getElementById('f-date').value || today();
  state.expenses = state.expenses.map(entry => entry.id === id ? {
    ...entry,
    date,
    monthKey: monthKeyFromDate(date),
    category: document.getElementById('f-cat').value,
    subCategory: document.getElementById('f-subcat').value,
    description: document.getElementById('f-desc').value.trim(),
    paymentMethod: document.getElementById('f-pay').value,
    amount,
    essential: _essential
  } : entry);
  state = Store.setData(state);
  closeModal();
  renderView(currentView);
  showToast('הוצאה עודכנה ✓');
}

function openEditBudget(cat) {
  const current = getMonthBudgets()[cat] || 0;
  const budgetLabel = isEnglish()
    ? `Monthly budget for ${selectedMonthLabel()} (₪)`
    : `תקציב חודשי ל-${selectedMonthLabel()} (₪)`;
  openModal(`
    <div class="modal-title">${CAT_ICON[cat]} ${displayCategory(cat)}</div>
    <div class="form-group">
      <label class="form-label">${budgetLabel}</label>
      <input id="f-budget" type="number" class="form-input" value="${current}" inputmode="numeric">
    </div>
    <button class="btn-primary" onclick="saveBudget('${cat}')">שמור ✓</button>
    <button class="btn-secondary" onclick="closeModal()">ביטול</button>
  `);
}

function saveBudget(cat) {
  const val = parseFloat(document.getElementById('f-budget').value);
  if (isNaN(val) || val < 0) { showToast('הזן סכום תקין'); return; }
  ensureStateMonth().budgets[cat] = val;
  state = Store.setData(state);
  closeModal();
  renderView(currentView);
  showToast('תקציב עודכן ✓');
}

// ─── PROFILE ──────────────────────────────────────────────────────────────

function openEditFirstName() {
  openModal(`
    <div class="modal-title">עריכת שם פרטי</div>
    <div class="form-group">
      <label class="form-label">שם פרטי</label>
      <input id="f-first-name" type="text" class="form-input" value="${escapeHtml(firstNameFor())}" autocomplete="given-name">
    </div>
    <button class="btn-primary" onclick="saveFirstName()">שמור שינויים ✓</button>
    <button class="btn-secondary" onclick="closeModal()">ביטול</button>
  `);
}

async function saveFirstName() {
  const firstName = document.getElementById('f-first-name').value.trim();
  if (!firstName) { showToast('שם פרטי לא יכול להיות ריק'); return; }

  if (currentAuth?.uid) {
    currentAuth = await Auth.updateProfile({ firstName, displayName: firstName });
    syncUserFromAuth(currentAuth);
  } else {
    state.user = { ...DEFAULT_USER, ...(state.user || {}), firstName };
    state = Store.setData(state);
  }

  closeModal();
  renderView(currentView);
  showToast('שם פרטי עודכן');
}

function renderProfile() {
  const user = currentAuth
    ? {
        firstName: currentAuth.firstName || currentAuth.displayName || currentAuth.username,
        username: currentAuth.username || currentAuth.displayName,
        email: currentAuth.email
      }
    : { ...DEFAULT_USER, ...(state.user || {}) };
  const languageValue = isEnglish() ? 'English' : 'עברית';
  const languageHint = isEnglish() ? 'Switch to Hebrew' : 'החלפה לאנגלית';
  const el = document.getElementById('view-profile');
  el.innerHTML = `
    <div style="padding-top:8px">
      <div class="glass-card profile-card">
        <div class="profile-avatar">👤</div>
        <div class="profile-heading">
          <div class="profile-title">פרטי משתמש</div>
          <div class="profile-subtitle">פרטי התחברות</div>
        </div>

        <div class="profile-fields">
          <div class="profile-field">
            <span>שם פרטי</span>
            <div style="display:flex;align-items:center;gap:8px;min-width:0">
              <strong data-no-i18n>${escapeHtml(firstNameFor(user))}</strong>
              <button class="budget-edit-btn" onclick="openEditFirstName()" type="button">עריכה</button>
            </div>
          </div>
          <div class="profile-field">
            <span>שם משתמש</span>
            <strong data-no-i18n>${escapeHtml(user.username)}</strong>
          </div>
          <div class="profile-field">
            <span>מייל</span>
            <strong data-no-i18n>${escapeHtml(user.email)}</strong>
          </div>
        </div>

        <div class="profile-section-title">העדפות</div>
        <button class="profile-option" onclick="toggleLanguage()" type="button" aria-label="שינוי שפה">
          <span class="profile-option-icon">🌐</span>
          <span class="profile-option-copy">
            <strong>שפה</strong>
            <small>${languageHint}</small>
          </span>
          <span class="profile-option-value" data-no-i18n>${languageValue}</span>
        </button>

        <button class="btn-primary profile-logout-btn" onclick="logoutUser()">התנתק</button>
      </div>
    </div>`;
}

async function logoutUser() {
  await Auth.signOut();
  currentAuth = null;
  showToast('התנתקת בהצלחה');
  showAuth(AUTH_MODES.LOGIN);
}

// ─── SAMPLE DATA ───────────────────────────────────────────────────────────

function loadSampleData() {
  state.incomes = [
    { id: uid(), date: '2025-01-01', type: 'משכורת', description: 'משכורת ינואר', amount: 12500 },
    { id: uid(), date: '2025-01-15', type: 'עבודה עצמאית/פרילנס', description: 'פרויקט עיצוב', amount: 2800 },
    { id: uid(), date: '2025-02-01', type: 'משכורת', description: 'משכורת פברואר', amount: 12500 },
    { id: uid(), date: '2025-02-20', type: 'בונוס', description: 'בונוס רבעוני', amount: 3000 },
    { id: uid(), date: '2025-03-01', type: 'משכורת', description: 'משכורת מרץ', amount: 12500 },
    { id: uid(), date: '2025-04-01', type: 'משכורת', description: 'משכורת אפריל', amount: 12500 },
    { id: uid(), date: '2025-04-22', type: 'עבודה עצמאית/פרילנס', description: 'ייעוץ', amount: 1800 },
  ];
  state.expenses = [
    { id: uid(), date: '2025-01-03', category: 'דיור', subCategory: 'שכירות', description: 'שכירות ינואר', paymentMethod: 'העברה בנקאית', amount: 3500, essential: true },
    { id: uid(), date: '2025-01-04', category: 'דיור', subCategory: 'חשמל', description: 'חשמל', paymentMethod: 'העברה בנקאית', amount: 280, essential: true },
    { id: uid(), date: '2025-01-05', category: 'מזון', subCategory: 'סופרמרקט', description: 'שופרסל', paymentMethod: 'כרטיס אשראי', amount: 780, essential: true },
    { id: uid(), date: '2025-01-08', category: 'מנויים', subCategory: 'נטפליקס', description: 'נטפליקס', paymentMethod: 'כרטיס אשראי', amount: 55, essential: false },
    { id: uid(), date: '2025-01-10', category: 'תחבורה', subCategory: 'דלק', description: 'פז', paymentMethod: 'כרטיס אשראי', amount: 310, essential: true },
    { id: uid(), date: '2025-01-12', category: 'מזון', subCategory: 'מסעדות', description: 'ארוחת ערב', paymentMethod: 'כרטיס אשראי', amount: 240, essential: false },
    { id: uid(), date: '2025-01-15', category: 'בריאות', subCategory: 'ביטוח בריאות', description: 'מכבי', paymentMethod: 'העברה בנקאית', amount: 350, essential: true },
    { id: uid(), date: '2025-01-18', category: 'קניות', subCategory: 'בגדים', description: 'זארה', paymentMethod: 'כרטיס אשראי', amount: 450, essential: false },
    { id: uid(), date: '2025-01-20', category: 'מזון', subCategory: 'קפה', description: "קפה גרג'", paymentMethod: 'מזומן', amount: 85, essential: false },
    { id: uid(), date: '2025-02-03', category: 'דיור', subCategory: 'שכירות', description: 'שכירות פברואר', paymentMethod: 'העברה בנקאית', amount: 3500, essential: true },
    { id: uid(), date: '2025-02-05', category: 'מזון', subCategory: 'סופרמרקט', description: 'רמי לוי', paymentMethod: 'כרטיס אשראי', amount: 650, essential: true },
    { id: uid(), date: '2025-02-10', category: 'תחבורה', subCategory: 'דלק', description: 'סונול', paymentMethod: 'כרטיס אשראי', amount: 290, essential: true },
    { id: uid(), date: '2025-02-14', category: 'מתנות ותרומות', subCategory: 'מתנה', description: 'מתנת יום הולדת', paymentMethod: 'מזומן', amount: 200, essential: false },
    { id: uid(), date: '2025-02-18', category: 'בריאות', subCategory: 'רופא', description: 'ביקור רופא', paymentMethod: 'מזומן', amount: 50, essential: true },
    { id: uid(), date: '2025-02-20', category: 'קניות', subCategory: 'אלקטרוניקה', description: 'אוזניות', paymentMethod: 'כרטיס אשראי', amount: 490, essential: false },
    { id: uid(), date: '2025-03-03', category: 'דיור', subCategory: 'שכירות', description: 'שכירות מרץ', paymentMethod: 'העברה בנקאית', amount: 3500, essential: true },
    { id: uid(), date: '2025-03-05', category: 'מזון', subCategory: 'סופרמרקט', description: 'שופרסל', paymentMethod: 'כרטיס אשראי', amount: 720, essential: true },
    { id: uid(), date: '2025-03-12', category: 'תחבורה', subCategory: 'דלק', description: 'פז', paymentMethod: 'כרטיס אשראי', amount: 340, essential: true },
    { id: uid(), date: '2025-03-15', category: 'פנאי ובידור', subCategory: 'חגים וטיולים', description: 'סוף שבוע בצפון', paymentMethod: 'כרטיס אשראי', amount: 850, essential: false },
    { id: uid(), date: '2025-04-03', category: 'דיור', subCategory: 'שכירות', description: 'שכירות אפריל', paymentMethod: 'העברה בנקאית', amount: 3500, essential: true },
    { id: uid(), date: '2025-04-06', category: 'מזון', subCategory: 'סופרמרקט', description: 'רמי לוי', paymentMethod: 'כרטיס אשראי', amount: 690, essential: true },
    { id: uid(), date: '2025-04-10', category: 'תחבורה', subCategory: 'אחזקת רכב', description: 'טיפול', paymentMethod: 'מזומן', amount: 580, essential: true },
    { id: uid(), date: '2025-04-12', category: 'קניות', subCategory: 'בגדים', description: 'H&M', paymentMethod: 'כרטיס אשראי', amount: 380, essential: false },
    { id: uid(), date: '2025-04-20', category: 'חיסכון והשקעות', subCategory: 'חיסכון', description: 'העברה לחיסכון', paymentMethod: 'העברה בנקאית', amount: 1000, essential: true },
    { id: uid(), date: '2025-04-21', category: 'פנאי ובידור', subCategory: 'הופעות', description: 'הופעה', paymentMethod: 'מזומן', amount: 250, essential: false },
  ];
  state.selectedYear = 2025;
  state.selectedMonth = 4;
  state = Store.setData(state);
}

// ─── SAVINGS GOAL ──────────────────────────────────────────────────────────

function openSavingsGoal() {
  openModal(`
    <div class="modal-title">⚙️ הגדרות</div>
    <p style="font-size:13px;color:var(--text-sec);margin-bottom:18px">קבע יעד להפקדות לחיסכון והשקעות, ואת יום תחילת המחזור החודשי שלך.</p>
    <div class="form-group">
      <label class="form-label">יעד הפקדה מתוך ההכנסה (%)</label>
      <input id="f-goal" type="number" class="form-input" value="${state.savingsGoal}" min="1" max="90" inputmode="numeric">
    </div>
    <div style="display:flex;gap:10px;margin-bottom:14px">
      ${[10,15,20,25,30].map(p => `<button onclick="document.getElementById('f-goal').value=${p}" style="flex:1;padding:8px;background:var(--glass);border:1px solid var(--border);color:var(--text-sec);border-radius:10px;cursor:pointer;font-size:13px">${p}%</button>`).join('')}
    </div>
    <div class="form-group">
      <label class="form-label">יום תחילת מחזור חודשי (1–28)</label>
      <input id="f-cycle" type="number" class="form-input" value="${state.cycleStartDay}" min="1" max="28" inputmode="numeric">
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px">מחזור נוכחי: ${cyclePeriodLabel()}</div>
    </div>
    <button class="btn-primary" onclick="saveSavingsGoal()">שמור הגדרות ✓</button>
    <button class="btn-secondary" onclick="closeModal()">ביטול</button>
  `);
}

function saveSavingsGoal() {
  const val = parseInt(document.getElementById('f-goal').value);
  if (!val || val < 1 || val > 90) { showToast('הזן אחוז בין 1 ל-90'); return; }
  const cycleDay = parseInt(document.getElementById('f-cycle').value);
  if (cycleDay >= 1 && cycleDay <= 28) state.cycleStartDay = cycleDay;
  state.savingsGoal = val;
  state = Store.setData(state);
  closeModal();
  renderView(currentView);
  showToast(`הגדרות נשמרו ✓`);
}

// ─── INIT ──────────────────────────────────────────────────────────────────

function init() {
  // Service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  window.addEventListener('message', handleGumroadSaleMessage, false);

  applyLanguage();

  // Year badge
  const yb = document.getElementById('year-badge');
  if (yb) yb.textContent = new Date().getFullYear();

  // Nav buttons (bottom nav + sidebar)
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // Modal close on backdrop
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });

  // Splash → app
  setTimeout(() => {
    document.getElementById('splash').classList.add('hide');
    setTimeout(async () => {
      document.getElementById('splash').style.display = 'none';
      const params = new URLSearchParams(window.location.search);
      const returnedFromPayment = params.get('paid') === 'true';
      if (returnedFromPayment) {
        history.replaceState(null, '', window.location.pathname);
      }
      await fetchClientConfig();
      await Auth.ready();
      currentAuth = Auth.getSession();
      if (currentAuth) await enterApp(currentAuth);
      else {
        showAuth(Auth.getPendingUser() ? AUTH_MODES.PAYMENT : AUTH_MODES.LOGIN);
        if (Auth.getPendingUser()) verifyGumroadCheckout();
      }
    }, 500);
  }, 1800);
}

document.addEventListener('DOMContentLoaded', init);
