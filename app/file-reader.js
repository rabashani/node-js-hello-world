//file-reader.js
const fs = require('fs');

console.log('start reading a file...');

fs.readFile('static-files/file.md', 'utf-8', function (err, content) {  
  if (err) {
    console.log('error happened during reading the file');
    return console.log(err.stack);
  }
  
  console.log(content);
});

console.log('end of the file');