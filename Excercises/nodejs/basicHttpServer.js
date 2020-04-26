//This is a example of running a http server locally

// Importing core Node JS modules 
const http = require('http');
const path = require('path');
const fs = require('fs');
console.log(__dirname);

// Creating a server using a varaible
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        // Below find the HTML file
        fs.readFile(path.join(__dirname, 'Public', 'index.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html' })
            res.end(content);
            }
        );
    }
})

// Holding the port in a variable , either it wll find the environment variable or use port 5000
const PORT = process.env.PORT || 5000;

// calling server variable and than the method listen
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// When a change is palced in the varaible server you have to reload the server to see the change
// You can use the Third party module nodemon module but ensure to install this globally
// 1:09