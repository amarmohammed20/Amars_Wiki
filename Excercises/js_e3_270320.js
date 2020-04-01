const SecsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = SecsPerMin * minsPerHour * hoursPerDay;
//const message = `There are ${secondsPerDay} seconds in a day.`;

const yearsAlive = secondsPerDay * 365 * 30;
const message = `I have been alive for more than ${yearsAlive} seconds.`;

//Showing message on screen
document.querySelector('main').innerHTML = message;

