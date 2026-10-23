const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const certs = [
  { id: 'mmup-grade-a', file: 'DEC - MMUP Grade A Certificate.pdf' },
  { id: 'iso-9001', file: 'QA60197A  Desentral Engineeri._.pdf' },
  { id: 'iso-14001', file: 'QA60197B  Desentral Engineeri._.pdf' },
  { id: 'iso-45001', file: 'QA60197C-1  Desentral Enginee._.pdf' },
  { id: 'gsas-provider', file: 'DEC-GSAS.pdf' },
  { id: 'icv-certified', file: 'DEC-ICV .pdf' }
];

const outDir = path.resolve(__dirname, '../public/certificates');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let completed = 0;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
  <script>
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  </script>
</head>
<body style="background:#222;color:#fff;">
  <h2>Rendering Certificates...</h2>
  <div id="status">Starting...</div>
  <script>
    const certs = ${JSON.stringify(certs)};
    async function processAll() {
      for (const item of certs) {
        document.getElementById('status').innerText = 'Processing ' + item.id;
        try {
          const loadingTask = pdfjsLib.getDocument('/pdf/' + encodeURIComponent(item.file));
          const pdf = await loadingTask.promise;
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 2.0 }); // High resolution 2x
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: ctx, viewport: viewport }).promise;
          const dataUrl = canvas.toDataURL('image/png');
          
          await fetch('/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: item.id, data: dataUrl })
          });
          console.log('Saved:', item.id);
        } catch (err) {
          console.error('Error on ' + item.id, err);
          await fetch('/error', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: item.id, error: err.toString() })
          });
        }
      }
      document.getElementById('status').innerText = 'All Done!';
      await fetch('/done');
    }
    processAll();
  </script>
</body>
</html>`);
    return;
  }

  if (req.method === 'GET' && req.url.startsWith('/pdf/')) {
    const fileName = decodeURIComponent(req.url.replace('/pdf/', ''));
    const filePath = path.resolve(__dirname, '../public', fileName);
    if (fs.existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      fs.createReadStream(filePath).pipe(res);
      return;
    } else {
      res.writeHead(404);
      res.end('Not found: ' + filePath);
      return;
    }
  }

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { id, data } = JSON.parse(body);
        const base64Data = data.replace(/^data:image\/png;base64,/, '');
        const targetPath = path.join(outDir, id + '.png');
        fs.writeFileSync(targetPath, base64Data, 'base64');
        console.log('Successfully written:', targetPath, '(' + (fs.statSync(targetPath).size / 1024).toFixed(1) + ' KB)');
        completed++;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        console.error('Failed to parse save body:', e);
        res.writeHead(500);
        res.end(e.message);
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/error') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      console.error('Browser reported error:', body);
      res.writeHead(200);
      res.end();
    });
    return;
  }

  if (req.url === '/done') {
    console.log('Finished rendering all certificates! Total completed: ' + completed);
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

const PORT = 4589;
server.listen(PORT, () => {
  console.log('Conversion server listening on http://localhost:' + PORT);

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

  console.log('Launching headless browser at:', browserPath);
  const child = spawn(browserPath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-web-security',
    'http://localhost:' + PORT
  ]);

  child.on('error', (err) => {
    console.error('Failed to spawn browser:', err);
  });
});
