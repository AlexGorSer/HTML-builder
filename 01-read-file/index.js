const fs = require('fs');
const path = require('path');
const textPath = path.join(__dirname, 'text.txt');
const read = fs.createReadStream( textPath, 'utf-8'); // Первый вариант.
// const read = fs.createReadStream( '01-read-file/text.txt', 'utf-8'); Второй вариант.
read.on('data', chunk => console.log(chunk));





