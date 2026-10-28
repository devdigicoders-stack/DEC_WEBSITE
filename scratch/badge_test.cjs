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
<body class="bg-[#121212] p-8 text-white font-sans">
  <h2 class="text-xl mb-6 font-bold">Comparing Badge Styles</h2>
  
  <div class="grid grid-cols-3 gap-6 max-w-6xl">
    <!-- Style 1: Solid Accent Background (High Contrast, vibrant) -->
    <div class="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden p-4">
      <h3 class="text-xs font-bold text-white/70 mb-2">Style 1: Solid Accent Badge</h3>
      <div class="relative rounded-xl overflow-hidden bg-[#0c0c0c] aspect-[1/1.32] flex items-center justify-center p-2">
        <img src="/img/mmup-grade-a.png" class="w-full h-full object-contain rounded-lg drop-shadow-md" />
        <span class="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-2xl bg-[#B08D57] text-[#121212]">
          GRADE A CERTIFIED
        </span>
      </div>
      <div class="mt-3 text-sm font-bold">MMUP / UPDA Grade A License</div>
    </div>

    <!-- Style 2: Solid Dark Pill with Accent Border & Accent Text -->
    <div class="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden p-4">
      <h3 class="text-xs font-bold text-white/70 mb-2">Style 2: Dark Pill + Gold Text & Border</h3>
      <div class="relative rounded-xl overflow-hidden bg-[#0c0c0c] aspect-[1/1.32] flex items-center justify-center p-2">
        <img src="/img/mmup-grade-a.png" class="w-full h-full object-contain rounded-lg drop-shadow-md" />
        <span class="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-2xl bg-[#141414] border border-[#B08D57] text-[#B08D57] flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-[#B08D57]"></span>
          <span>GRADE A CERTIFIED</span>
        </span>
      </div>
      <div class="mt-3 text-sm font-bold">MMUP / UPDA Grade A License</div>
    </div>

    <!-- Style 3: ISO 9001 with Solid Accent -->
    <div class="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden p-4">
      <h3 class="text-xs font-bold text-white/70 mb-2">Style 1 on ISO 9001 (Solid Blue)</h3>
      <div class="relative rounded-xl overflow-hidden bg-[#0c0c0c] aspect-[1/1.32] flex items-center justify-center p-2">
        <img src="/img/iso-9001.png" class="w-full h-full object-contain rounded-lg drop-shadow-md" />
        <span class="absolute top-3.5 right-3.5 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-2xl bg-[#2563EB] text-white">
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

const PORT = 4701;
server.listen(PORT, () => {
  console.log('Badge test server on http://localhost:' + PORT);
});
