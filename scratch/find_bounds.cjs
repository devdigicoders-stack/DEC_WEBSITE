const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const certDir = path.resolve(__dirname, '../public/certificates');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html>
<body style="background:#222;color:#fff;">
  <pre id="log"></pre>
  <script>
    const log = (msg) => document.getElementById('log').innerText += msg + '\\n';

    async function run() {
      const img = new Image();
      img.src = '/img/mmup-grade-a.original.png';
      await new Promise(r => img.onload = r);

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const data = ctx.getImageData(0, 0, img.width, img.height).data;
      log('Original size: ' + img.width + 'x' + img.height);

      // Check row-by-row non-white count
      let firstRowWithContent = -1;
      let lastRowWithContent = -1;
      for (let y = 0; y < img.height; y++) {
        let nonWhiteCount = 0;
        for (let x = 0; x < img.width; x++) {
          const idx = (y * img.width + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          if (r < 240 || g < 240 || b < 240) nonWhiteCount++;
        }
        if (nonWhiteCount > 20) {
          if (firstRowWithContent === -1) firstRowWithContent = y;
          lastRowWithContent = y;
        }
      }

      // Check col-by-col non-white count
      let firstColWithContent = -1;
      let lastColWithContent = -1;
      for (let x = 0; x < img.width; x++) {
        let nonWhiteCount = 0;
        for (let y = 0; y < img.height; y++) {
          const idx = (y * img.width + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          if (r < 240 || g < 240 || b < 240) nonWhiteCount++;
        }
        if (nonWhiteCount > 20) {
          if (firstColWithContent === -1) firstColWithContent = x;
          lastColWithContent = x;
        }
      }

      log('Rows with content (>20 nonwhite px): ' + firstRowWithContent + ' to ' + lastRowWithContent);
      log('Cols with content (>20 nonwhite px): ' + firstColWithContent + ' to ' + lastColWithContent);

      await fetch('/report', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          width: img.width,
          height: img.height,
          firstRow: firstRowWithContent,
          lastRow: lastRowWithContent,
          firstCol: firstColWithContent,
          lastCol: lastColWithContent
        })
      });
    }
    run();
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
      console.log('SCAN REPORT:', body);
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

const PORT = 4692;
server.listen(PORT, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  spawn(fs.existsSync(chromePath) ? chromePath : edgePath, [
    '--headless=new',
    '--disable-gpu',
    'http://localhost:' + PORT
  ]);
});
