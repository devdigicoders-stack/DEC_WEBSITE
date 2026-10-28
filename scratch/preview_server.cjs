const http = require('http');
const fs = require('fs');
const path = require('path');

const certDir = path.resolve(__dirname, '../public/certificates');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#121212] p-8 text-white">
  <h2 class="text-xl mb-4 font-bold">Testing Certificate Card Options</h2>
  
  <div class="grid grid-cols-3 gap-6 max-w-5xl">
    <!-- Option A: Current with bg-white removed, tightly cropped cert image -->
    <div class="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden p-4">
      <h3 class="text-xs font-bold text-[#B08D57] mb-2">Option A: object-contain, no bg-white</h3>
      <div class="relative rounded-xl overflow-hidden bg-[#0c0c0c] aspect-[1/1.32] flex items-center justify-center p-3">
        <img src="/img/mmup-grade-a.cropped.png" class="w-full h-full object-contain rounded-lg drop-shadow-md" />
        <span class="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg bg-[#151515] border border-[#B08D57] text-[#B08D57]">
          GRADE A CERTIFIED
        </span>
      </div>
      <div class="mt-3 text-sm font-bold">MMUP / UPDA Grade A License</div>
    </div>

    <!-- Option B: Card image aspect matches landscape for MMUP -->
    <div class="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden p-4">
      <h3 class="text-xs font-bold text-[#B08D57] mb-2">Option B: aspect-auto / landscape fit</h3>
      <div class="relative rounded-xl overflow-hidden bg-[#0c0c0c] aspect-[1/1.32] flex items-center justify-center p-2">
        <img src="/img/mmup-grade-a.cropped.png" class="w-full h-full object-contain rounded-lg drop-shadow-md bg-[#0c0c0c]" />
        <span class="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xl bg-[#B08D57] text-[#151515]">
          GRADE A CERTIFIED
        </span>
      </div>
      <div class="mt-3 text-sm font-bold">MMUP / UPDA Grade A License</div>
    </div>

    <!-- Option C: ISO 9001 for comparison -->
    <div class="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden p-4">
      <h3 class="text-xs font-bold text-[#3B82F6] mb-2">ISO 9001 (Portrait Reference)</h3>
      <div class="relative rounded-xl overflow-hidden bg-[#0c0c0c] aspect-[1/1.32] flex items-center justify-center p-3">
        <img src="/img/iso-9001.png" class="w-full h-full object-contain rounded-lg drop-shadow-md" />
        <span class="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg bg-[#151515] border border-[#3B82F6] text-[#3B82F6]">
          ISO 9001:2015
        </span>
      </div>
      <div class="mt-3 text-sm font-bold">ISO 9001:2015 Quality Management</div>
    </div>
  </div>
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

  res.writeHead(404);
  res.end();
});

const PORT = 4697;
server.listen(PORT, () => {
  console.log('Preview server on http://localhost:' + PORT);
});
