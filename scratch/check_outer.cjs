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
      
      // Let's sample along horizontal center line (y = img.height / 2)
      // and vertical center line (x = img.width / 2)
      log('Image dimensions: ' + img.width + 'x' + img.height);
      
      // Look at top border: which row has dark pixels?
      // print first 50 rows summary:
      for (let y = 0; y < 100; y += 5) {
        const idx = (y * img.width + Math.floor(img.width/2)) * 4;
        log('Center px at y=' + y + ': rgb(' + data[idx] + ',' + data[idx+1] + ',' + data[idx+2] + ')');
      }

      // Check what is at (0, 0):
      log('(0,0): rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')');
      log('(10,10): rgb(' + data[(10*img.width+10)*4] + ',' + data[(10*img.width+10)*4+1] + ',' + data[(10*img.width+10)*4+2] + ')');

      // Count non-pure-white in outer 50px border
      let outerNonWhite = 0;
      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          if (x < 50 || x > img.width - 50 || y < 50 || y > img.height - 50) {
            const idx = (y * img.width + x) * 4;
            if (data[idx] < 240 || data[idx+1] < 240 || data[idx+2] < 240) {
              outerNonWhite++;
            }
          }
        }
      }
      log('Outer 50px non-white pixel count: ' + outerNonWhite);

      await fetch('/report', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ outerNonWhite })
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
      console.log('BORDER REPORT:', body);
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

const PORT = 4693;
server.listen(PORT, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  spawn(fs.existsSync(chromePath) ? chromePath : edgePath, [
    '--headless=new',
    '--disable-gpu',
    'http://localhost:' + PORT
  ]);
});
