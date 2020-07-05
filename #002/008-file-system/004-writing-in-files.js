const fs = require('fs');

fs.writeFile('./filetxt.txt', 'hello world', () => {
    console.log('file was written');
})


