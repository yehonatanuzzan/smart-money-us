const http = require('http');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = __dirname;
const appDir = path.join(root, 'app');
const functionsDir = path.join(root, 'netlify', 'functions');
const port = Number(process.env.PORT || 8888);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png'
};

function readBody(req) {
  return new Promise(resolve => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => resolve(body));
  });
}

async function handleFunction(req, res, functionName) {
  const functionPath = path.join(functionsDir, `${functionName}.js`);
  if (!fs.existsSync(functionPath)) {
    res.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: false, error: 'Function not found' }));
    return;
  }

  delete require.cache[require.resolve(functionPath)];
  const mod = require(functionPath);
  const body = await readBody(req);
  const result = await mod.handler({
    httpMethod: req.method,
    headers: req.headers,
    body,
    rawUrl: `http://127.0.0.1:${port}${req.url}`
  });

  res.writeHead(result.statusCode || 200, result.headers || {});
  res.end(result.body || '');
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://127.0.0.1:${port}`);
  let filePath = path.join(appDir, decodeURIComponent(url.pathname));
  if (url.pathname === '/' || !path.extname(filePath)) {
    filePath = path.join(appDir, 'index.html');
  }
  if (!filePath.startsWith(appDir) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(appDir, 'index.html');
  }
  const ext = path.extname(filePath);
  res.writeHead(200, {
    'content-type': mimeTypes[ext] || 'application/octet-stream',
    'cache-control': 'no-store'
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    const match = req.url.match(/^\/\.netlify\/functions\/([^/?#]+)/);
    if (match) {
      await handleFunction(req, res, match[1]);
      return;
    }
    serveStatic(req, res);
  } catch (err) {
    res.writeHead(500, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: false, error: err.message }));
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Local Netlify dev server: http://127.0.0.1:${port}`);
});
