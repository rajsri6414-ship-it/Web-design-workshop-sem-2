import fs from 'node:fs';
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');

    fs.readFile('output.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});

