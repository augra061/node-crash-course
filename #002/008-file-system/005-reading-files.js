const fs = require('fs');

fs.readFile('./filetxt.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})