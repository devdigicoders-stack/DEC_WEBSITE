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
<body>
  <script>
    async function run() {
      const img = new Image();
      img.src = '/img/mmup-grade-a.original.png';
      await new Promise(r => img.onload = r);

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Find the exact outer border of the certificate.
      // In Arabic certificate, there is an outer decorative line or border.
      // Let's find exactly which rectangle contains the border.
      const data = ctx.getImageData(0, 0, img.width, img.height).data;
      
      // Let's find rows where there is a continuous horizontal line or colored border
      // Check from top:
      let topBorderY = -1;
      for (let y = 0; y < img.height; y++) {
        let coloredPixels = 0;
        for (let x = 200; x < img.width - 200; x++) {
          const idx = (y * img.width + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          // Check for grey or gold border line (not pure white)
          if (r < 230 || g < 230 || b < 230) coloredPixels++;
        }
        if (coloredPixels > (img.width - 400) * 0.5) {
          topBorderY = y;
          break;
        }
      }

      let bottomBorderY = -1;
      for (let y = img.height - 1; y >= 0; y--) {
        let coloredPixels = 0;
        for (let x = 200; x < img.width - 200; x++) {
          const idx = (y * img.width + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          if (r < 230 || g < 230 || b < 230) coloredPixels++;
        }
        if (coloredPixels > (img.width - 400) * 0.5) {
          bottomBorderY = y;
          break;
        }
      }

      let leftBorderX = -1;
      for (let x = 0; x < img.width; x++) {
        let coloredPixels = 0;
        for (let y = 200; y < img.height - 200; y++) {
          const idx = (y * img.width + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          if (r < 230 || g < 230 || b < 230) coloredPixels++;
        }
        if (coloredPixels > (img.height - 400) * 0.5) {
          leftBorderX = x;
          break;
        }
      }

      let rightBorderX = -1;
      for (let x = img.width - 1; x >= 0; x--) {
        let coloredPixels = 0;
        for (let y = 200; y < img.height - 200; y++) {
          const idx = (y * img.width + x) * 4;
          const r = data[idx], g = data[idx+1], b = data[idx+2];
          if (r < 230 || g < 230 || b < 230) coloredPixels++;
        }
        if (coloredPixels > (img.height - 400) * 0.5) {
          rightBorderX = x;
          break;
        }
      }

      await fetch('/report', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ topBorderY, bottomBorderY, leftBorderX, rightBorderX })
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
      console.log('EXACT BORDER RECT:', body);
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

const PORT = 4695;
server.listen(PORT, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  spawn(fs.existsSync(chromePath) ? chromePath : edgePath, [
    '--headless=new',
    '--disable-gpu',
    'http://localhost:' + PORT
  ]);
});
