const express = require('express')();
const { readFile } = require('fs');

const app = express;

const http = require("http");
const ip = '0.0.0.0';
const port = 3000;

app.get('/', (request, response) => {

    readFile('./home.html', 'utf8', (err, html) => {
        
        if(err) {
            response.status(500).send('sorry, out of order');
        }
        
        response.send(html);

    })
    
});

app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});