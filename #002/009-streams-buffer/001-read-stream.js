const fs = require('fs');

const readStream = fs.createReadStream('./file-to-read.txt', { encoding: 'utf-8' });

readStream.on('data', (chunk) => {
    console.log('------ NEW CHUNK ------')
    console.log(chunk);
});
