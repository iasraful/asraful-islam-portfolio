const fs = require('fs');
const buffer = fs.readFileSync('Asraful-Islam.pdf');
let strings = '';
for (let i = 0; i < buffer.length; i++) {
  if (buffer[i] >= 32 && buffer[i] <= 126) {
    strings += String.fromCharCode(buffer[i]);
  } else if (buffer[i] === 10 || buffer[i] === 13) {
    strings += '\n';
  } else {
    strings += ' ';
  }
}
fs.writeFileSync('pdf_strings.txt', strings);
