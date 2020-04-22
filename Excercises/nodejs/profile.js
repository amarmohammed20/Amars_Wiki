//Require https module
const https = require('https');
//HTTP status code module
const http = require('http');
// let username = 'amarmohammed';

//Print error messages
function printError(error) {
    console.error(error.message);
}

//Function to print message to console
function printMessage(username, badgeCount, points) {

    const message = `${username} has ${badgeCount} total badges and ${points} points in JavaScript`;
    console.log(message);
    }

function get(username) {
    try {
//Connect to the API URL
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    if (response.statusCode === 200) {
        let body = '';
        //Read the data
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {

        try {
            //parse the data
            const profile = JSON.parse(body);

            //Print the information from the API - Running the function we created above with the template literal
            printMessage(username, profile.badges.length, profile.points.JavaScript);
            } catch (error) {
                printError(error);
            }
        });
    } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message); 
        printError(statusCodeError);
    }

});
    //handling errors
    request.on('error', printError);

    } catch (error) {
        printError(error);
    }
}

//http://nodejs.org/api/modules.html#modules_module_exports
module.exports.get = get;