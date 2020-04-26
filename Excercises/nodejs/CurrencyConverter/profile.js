//Require https module
const https = require('https');
//HTTP status code module
const http = require('http');
const api = require('./api.json');

//Print error messages
function printError(error) {
    console.error(error.message);
}

//Function to print message to console
function printMessage(from, to, amount) {

    const message = `The total of ${amount} converted from ${from} to ${to} ${from} is ${amount}`;
    console.log(message);
    }

function get(from, to, amount) {
    try {
//Connect to the API URL
const request = https.get(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`, response => {
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
            printMessage(from, to, amount);
            } catch (error) {
                printError(error);
            }
        });
    } else {
        const message = `There was an error getting the currency for ${from} (${http.STATUS_CODES[response.statusCode]})`;
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