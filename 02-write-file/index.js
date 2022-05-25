// РРаботает только в powershell

const fs = require('fs');
const path = require('path');
const textPath = path.resolve(__dirname, 'text.txt');



// const appendText = async (dataText) => {
//   return new Promise((resolve, reject) => fs.appendFile(textPath, dataText, (err) => {
//     if (err) {
//       return reject(err.message);
//     }
//     resolve();
//   }));
// };


const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
fs.appendFile(textPath, '', (err) => {
  if (err) throw err;
});

console.log('Привет, введите данные. При использовании gitbash терминала не выдается прерывающий сигнал, воспользуйтесь powershell или встроеным терминалом');

rl.on('line', (input) => {
  if (input === 'exit') {
    // console.log('Поток прерван, пока.');
    process.exit(0);
  } 
  fs.appendFile(textPath, input + '\n', (err) => {
    if (err) throw err;
  });
//   appendText(input + '\n');
});
process.on('exit', () => 
  console.log('Поток прерван.'));
process.on('SIGINT', () => 
  rl.close());