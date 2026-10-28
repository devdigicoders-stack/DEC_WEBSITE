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

      const data = ctx.getImageData(0, 0, img.width, img.height).data;

      // Sample along 5 vertical lines (x = 100, 300, 840, 1200, 1500)
      const samples = [];
      for (let y = 0; y < img.height; y += 20) {
        const idx = (y * img.width + 840) * 4;
        samples.push({ y, r: data[idx], g: data[idx+1], b: data[idx+2] });
      }

      await fetch('/report', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ samples })
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
      const data = JSON.parse(body);
      console.log('SAMPLES ALONG X=840:');
      data.samples.forEach(s => {
        if (s.r < 250 || s.g < 250 || s.b < 250) {
          console.log(`y=${s.y}: rgb(${s.r},${s.g},${s.b})`);
        }
      });
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

const PORT = 4694;
server.listen(PORT, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  spawn(fs.existsSync(chromePath) ? chromePath : edgePath, [
    '--headless=new',
    '--disable-gpu',
    'http://localhost:' + PORT
  ]);
});
