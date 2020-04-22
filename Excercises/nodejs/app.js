// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
// My team tree house profile - https://teamtreehouse.com/amarmohammed.json
//Status codes for HTTPs requests - https://www.restapitutorial.com/httpstatuscodes.html 

// ./ is necessary and the extention of the file .js is not
const profile = require('./profile');
const users = process.argv.slice(2);
users.forEach(profile.get);

profile.get;