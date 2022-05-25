// Работает и в bash и powershell.

const fs = require('fs');
const path = require('path');

const secretFolderPath = path.resolve(__dirname, 'secret-folder');

fs.readdir(secretFolderPath, (err, files) => {
  if (err) throw err;
  files.forEach(files => {
    const fileStat = path.resolve(secretFolderPath, files);

    fs.stat(fileStat, (err, sts) => {
      if (err) throw err;
      if(!sts.isDirectory()) {
        console.log(`File name: ${path.parse(files).name}; type: ${path.parse(files).ext}; size: ${sts.size}-bytes.`);
      }
    });
  });
});