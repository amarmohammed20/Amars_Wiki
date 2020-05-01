//Problem: We need a simple way to look at a users badge count and javascript points from a web browser

//Solution: Use node.js to perform the profile look ups and serve our template via HTTP
//When calling another file ensure to put ./ before as below
var router = require("./router.js");
// Create a webserver

    // Importing core Node JS modules 
    const http = require('http');

    http.createServer(function (request, response) {
        router.home(request, response);
        router.user(request, response);
    }).listen(3000, '127.0.0.1');
    console.log('Server running on 127.0.0.1:3000')


// Function that handles the reading of files and merge in values
    // read from file and get a string 
        //merge values into string