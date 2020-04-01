
// Collect input from a user
const userLowNumber = prompt("Pick your lowest number");
const userHighNumber = prompt("Pick your highest number");

// Convert the input to a number
const numberConvertLow = +userLowNumber;
const numberConvertHigh = +userHighNumber;

if ( numberConvertLow && numberConvertHigh ) {
  // Use Math.random() and the user's number to generate a random Number
const randomNumber = Math.floor( Math.random() * (numberConvertHigh - numberConvertLow + 1) ) + numberConvertLow;


// Create a message displaying the random number
const message = `${randomNumber} is a random number generated between your lowest number ${numberConvertLow} and your highest number ${numberConvertHigh}`;

//Showing message on screen
document.querySelector('main').innerHTML = message;      
} else {
    const failedMessage = `Insert two valid number as you inserted ${userLowNumber} and ${userHighNumber}`;

//Showing message on screen
document.querySelector('main').innerHTML = failedMessage;
}
