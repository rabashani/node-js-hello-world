// index.js

console.log('-- app index.js --');
require('./app/index')  


console.log('-- loadash module --');
const _ = require('lodash')
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });  
// → { 'a': 1, 'b': 2, 'c': 3 }

console.log('-- app file-reader.js --');
require('./app/file-reader.js');