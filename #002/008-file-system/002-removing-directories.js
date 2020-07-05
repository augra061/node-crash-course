const fs = require('fs');

if (fs.existsSync('./assets')) {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}
