const fs = require('fs');

if (fs.existsSync('./filetxt.txt')) {
    fs.unlink('./filetxt.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}