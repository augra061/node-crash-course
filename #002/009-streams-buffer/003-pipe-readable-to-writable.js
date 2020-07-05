const fs = require('fs');

const readStream = fs.createReadStream('./file-to-read.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./file-to-create-2.txt');

readStream.pipe(writeStream);