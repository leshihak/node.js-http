import http from 'http';
import path from 'path';
import fs from 'fs';
import { url } from 'inspector';

const server = http.createServer((req, res) => {
    // fs.readFile(path.join('public/css', 'style.css'), (err, data) => {
    //     if (err) throw err;
    //     res.writeHead(200, { 'Content-Type': 'text/css' });
    //     res.end(data);
    // });

    if (req.url === '/') {
        fs.readFile(path.join('public/routes', 'home.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/about') {
        fs.readFile(path.join('public/routes', 'about.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/contact') {
        fs.readFile(path.join('public/routes', 'contact.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url.match('\.css$')) {
        let cssPath = path.join('public/css', 'style.css');
        let fileStream = fs.createReadStream(cssPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fileStream.pipe(res);
    } else {
        fs.readFile(path.join('public/routes', '404.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

server.listen(3000);
