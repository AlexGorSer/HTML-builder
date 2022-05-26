const fs = require('fs');
const path = require('path');

const style = path.resolve(__dirname, 'styles');
const projectDist = path.resolve(__dirname, 'project-dist');
const bundle = fs.createWriteStream(path.resolve(projectDist, 'bundle.css'));

fs.readdir(style, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if(path.extname(file) === '.css') {
      const read = fs.createReadStream(path.resolve(style, file));
      read.on('data', (data) => {
        bundle.write(data + '\n');
      });
    }
  });
});

