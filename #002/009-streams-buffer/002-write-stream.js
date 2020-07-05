const fs = require('fs');

const readStream = fs.createReadStream('./file-to-read.txt');
const writeStream = fs.createWriteStream('./file-to-create.txt');

readStream.on('data', (chunk) => {
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});
