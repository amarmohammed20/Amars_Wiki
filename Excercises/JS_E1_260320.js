// prompt() meathod captures users input into the browser#
//console.log() logs info into the console area of the browser

//Variables for the message
const name = prompt('What is your name?');
console.log(name);
const job = prompt('What is your dream job?');
console.log(job);
const aim = prompt('What is your aim in life?');
console.log(aim);

//combine two strings
// string concatenation use + example - "Hello what is your age" +name
//The better way to concatenate the string would be to break down the long message in different variables. so the first part of the message would be variable message and than you would do message = message + "" that would add more to your string. You can also do message += ""
//Template literals `` makes it easier to use variables in a message for the above variables see the example -  `Hello, ${name}. It's ${2*3} o'clock.`; - This lets you write freely while inserting.
// In template literals you can add new lines by just moving to the next line and it is also shouwn with the new lines on the browser

//Message
const message = `<h1>So your name is ${name}. I see you want the job ${job}. Thats a cool aim in life - '${aim}'.</h1>`;
console.log(message);

//Display the message on the screen. First select the html element were you want the message to appear, than provide what content you want in that element.
// use the document.querySelector() meathod. in the () you put the tag ID or element as a string '' were you want the message
//You can test the above by copying the code and pasting in the browser in the console log
//Need to use innerHTML to replace the current html with the new message

//Showing message on screen
document.querySelector('main').innerHTML = message;




