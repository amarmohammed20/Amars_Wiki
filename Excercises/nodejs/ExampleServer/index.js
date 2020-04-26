// Importing core Node JS modules 
const http = require('http');
const path = require('path');
const fs = require('fs');

// Creating a server using a varaible which has a request and response
const server = http.createServer((req, res) => {

    //Build file path - If req.url is / than load index.html in Public folder else load what file req.url is
    let filePath = path.join(__dirname, 'Public', req.url === '/' ? 'index.html' : req.url);

    // Get Extention of the file
    let = extname = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html';

    //check ext in variable extname and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content) => {
        //First  check for a error
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'Public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Some Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8')
        }
    });
});



// Holding the port in a variable , either it wll find the environment variable or use port 5000
const PORT = process.env.PORT || 5000;

// calling server variable and than the method listen
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// When a change is palced in the varaible server you have to reload the server to see the change
// You can use the Third party module nodemon module but ensure to install this globally
// 1:09