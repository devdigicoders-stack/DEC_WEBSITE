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

      // Crop coordinates matching exact border rect:
      // left: 3, top: 33, width: 1636 - 3 = 1633, height: 1122 - 33 = 1089
      const cropX = 3;
      const cropY = 33;
      const cropW = 1633;
      const cropH = 1089;

      const canvas = document.createElement('canvas');
      canvas.width = cropW;
      canvas.height = cropH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

      const dataUrl = canvas.toDataURL('image/png');

      await fetch('/save', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ data: dataUrl })
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

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const { data } = JSON.parse(body);
      const b64 = data.replace(/^data:image\/png;base64,/, '');
      const targetPath = path.join(certDir, 'mmup-grade-a.png');
      const croppedPath = path.join(certDir, 'mmup-grade-a.cropped.png');
      fs.writeFileSync(targetPath, b64, 'base64');
      fs.writeFileSync(croppedPath, b64, 'base64');
      console.log('Saved tightly cropped certificate to:', targetPath);
      res.writeHead(200);
      res.end('OK');
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 500);
    });
    return;
  }
});

const PORT = 4698;
server.listen(PORT, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  spawn(fs.existsSync(chromePath) ? chromePath : edgePath, [
    '--headless=new',
    '--disable-gpu',
    'http://localhost:' + PORT
  ]);
});
