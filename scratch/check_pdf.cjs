const fs = require('fs');
const path = require('path');

const pdfPath = path.resolve(__dirname, '../public/DEC - MMUP Grade A Certificate.pdf');
console.log('File exists:', fs.existsSync(pdfPath), 'size:', fs.statSync(pdfPath).size);

// Read first 1000 bytes to check orientation / MediaBox
const buffer = fs.readFileSync(pdfPath);
const str = buffer.toString('binary', 0, 4000);
const mediaBoxMatches = str.match(/\/MediaBox\s*\[\s*([\d\.\s]+)\s*\]/g);
console.log('MediaBox matches in first 4000 bytes:', mediaBoxMatches);

// Search whole file for MediaBox or Rotate
const fullStr = buffer.toString('binary');
const allMediaBoxes = fullStr.match(/\/MediaBox\s*\[[^\]]+\]/g);
const allRotates = fullStr.match(/\/Rotate\s*\d+/g);
console.log('All MediaBoxes:', allMediaBoxes);
console.log('All Rotates:', allRotates);
