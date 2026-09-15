const http = require('http');

let items = ['apple', 'banana'];

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.setHeader('Content-Type', 'application/json');


    if (req.method === 'GET') {
        res.end(JSON.stringify(items));
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            items.push(body);
            res.end('item added:' + body);
        });
    } else if (req.method === 'put') {
        items[0] = 'updated item';
        res.end('item updated');
    } else if (req.method === 'delete') {
        items.pop();
        res.end('item deleted');
    }
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});