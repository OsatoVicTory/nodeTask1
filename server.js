const http = require("node:http");
const fs = require("fs");
const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/home') {
        const htmlFile = "home.html";
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');       
        fs.createReadStream(htmlFile).pipe(res);
    } else if(req.url === '/contact') {
        const htmlFile = "contact.html";
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(htmlFile).pipe(res);
    } else if(req.url === '/about') {
        const htmlFile = "about.html";
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(htmlFile).pipe(res);
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Error, Page Not Found\n');
        
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});