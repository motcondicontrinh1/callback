const readTextFile = (filename) => {

    return new Promise((resolve, reject) => {

        let fs = require("fs");

        fs.readFile(filename, "utf8", (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });

    });

};

readTextFile('./atxt').then(res => console.log(`Text: ${res}`), e => console.log(`Loi ${e}`));