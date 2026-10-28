const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

const outPath = path.resolve(__dirname, 'preview_test.png');

console.log('Capturing screenshot of http://localhost:4697...');
const child = spawn(browserPath, [
  '--headless=new',
  '--disable-gpu',
  '--window-size=1200,800',
  '--screenshot=' + outPath,
  'http://localhost:4697'
]);

child.on('close', (code) => {
  console.log('Screenshot saved to:', outPath, 'exists:', fs.existsSync(outPath));
  process.exit(0);
});
