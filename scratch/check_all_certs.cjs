const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const certDir = path.resolve(__dirname, '../public/certificates');

const files = [
  'iso-9001.png',
  'iso-14001.png',
  'iso-45001.png',
  'gsas-provider.png',
  'icv-certified.png'
];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html>
<body>
  <script>
    async function checkAll() {
      const results = {};
      for (const f of ${JSON.stringify(files)}) {
        const img = new Image();
        img.src = '/img/' + f;
        await new Promise(r => img.onload = r);
        results[f] = { width: img.width, height: img.height, ratio: (img.width / img.height).toFixed(2) };
      }
      await fetch('/report', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(results)
      });
    }
    checkAll();
  </script>
</body>
</html>`);
    return;
  }

  if (req.method === 'GET' && req.url.startsWith('/img/')) {
    const fName = req.url.replace('/img/', '');
    const fPath = path.join(certDir, fName);
    if (fs.existsSync(fPath)) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      fs.createReadStream(fPath).pipe(res);
      return;
    }
  }

  if (req.method === 'POST' && req.url === '/report') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      console.log('ALL CERT RATIOS:', body);
      res.writeHead(200);
      res.end();
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 500);
    });
    return;
  }
});

const PORT = 4699;
server.listen(PORT, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  spawn(fs.existsSync(chromePath) ? chromePath : edgePath, [
    '--headless=new',
    '--disable-gpu',
    'http://localhost:' + PORT
  ]);
});
