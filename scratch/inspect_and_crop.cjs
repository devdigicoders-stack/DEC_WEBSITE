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
<head><meta charset="utf-8"></head>
<body style="background:#222;color:#fff;">
  <h2>Analyzing certificate images...</h2>
  <pre id="log"></pre>
  <script>
    const log = (msg) => {
      document.getElementById('log').innerText += msg + '\\n';
      console.log(msg);
    };

    const files = ['mmup-grade-a.png', 'gsas-provider.png', 'icv-certified.png', 'iso-9001.png'];

    async function analyzeAndCrop() {
      for (const file of files) {
        log('Analyzing ' + file);
        const img = new Image();
        img.src = '/img/' + file;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imgData.data;

        let minX = img.width, maxX = 0, minY = img.height, maxY = 0;

        for (let y = 0; y < img.height; y++) {
          for (let x = 0; x < img.width; x++) {
            const idx = (y * img.width + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const a = data[idx + 3];

            // Consider non-white if not nearly pure white (r < 248 || g < 248 || b < 248) and alpha > 50
            if (a > 50 && (r < 245 || g < 245 || b < 245)) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        log(file + ' size: ' + img.width + 'x' + img.height);
        log(file + ' content bbox: [' + minX + ', ' + minY + ', ' + maxX + ', ' + maxY + '] (' + (maxX - minX) + 'x' + (maxY - minY) + ')');

        if (file === 'mmup-grade-a.png') {
          // Crop with a small padding (e.g. 10px or tight to border)
          const pad = 8;
          const cropX = Math.max(0, minX - pad);
          const cropY = Math.max(0, minY - pad);
          const cropW = Math.min(img.width - cropX, (maxX - minX) + pad * 2);
          const cropH = Math.min(img.height - cropY, (maxY - minY) + pad * 2);

          const cropCanvas = document.createElement('canvas');
          cropCanvas.width = cropW;
          cropCanvas.height = cropH;
          const cropCtx = cropCanvas.getContext('2d');
          cropCtx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

          const croppedDataUrl = cropCanvas.toDataURL('image/png');
          await fetch('/save-cropped', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file, data: croppedDataUrl, bbox: { cropX, cropY, cropW, cropH } })
          });
          log('Saved cropped ' + file + ' (' + cropW + 'x' + cropH + ')');
        }
      }

      await fetch('/done');
    }

    analyzeAndCrop().catch(err => {
      log('Error: ' + err.toString());
    });
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

  if (req.method === 'POST' && req.url === '/save-cropped') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { file, data, bbox } = JSON.parse(body);
      const b64 = data.replace(/^data:image\/png;base64,/, '');
      const backupPath = path.join(certDir, file.replace('.png', '.original.png'));
      const targetPath = path.join(certDir, file);

      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(targetPath, backupPath);
        console.log('Backed up original to:', backupPath);
      }

      fs.writeFileSync(targetPath, b64, 'base64');
      console.log('Successfully wrote cropped image to:', targetPath, 'bbox:', bbox);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
    return;
  }

  if (req.url === '/done') {
    res.writeHead(200);
    res.end('Done');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 1000);
    return;
  }

  res.writeHead(404);
  res.end();
});

const PORT = 4691;
server.listen(PORT, () => {
  console.log('Crop server listening on http://localhost:' + PORT);

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const child = spawn(browserPath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    'http://localhost:' + PORT
  ]);

  child.on('error', (err) => {
    console.error('Failed to spawn browser:', err);
  });
});
