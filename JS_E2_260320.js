/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0;
console.log("1");

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
   const name = prompt('What is your name?');
*/
const answer1 = prompt('What is the colour of a apple?');
if ( answer1.toLowerCase() === "red") {
    correct += 1;
}
const answer2 = prompt("What is the colour of a melon?");
if ( answer2.toLowerCase() === "yellow") {
    correct += 1;
}
const answer3 = prompt("What is the colour of a banana?");
if ( answer3.toLowerCase() === "yellow") {
    correct += 1;
}
const answer4 = prompt("What is the colour of a berry?");
if ( answer4.toLowerCase() === "black") {
    correct += 1;
}
const answer5 = prompt("What is the colour of a grape?");
if ( answer5.toLowerCase() === "green") {
    correct += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correct === 5) {
    rank = "Gold";
} else if (correct >= 3) {
    rank = "Silver";
} else if (correct >= 2) {
    rank = "Bronze";
} else {
    rank = "None";
} 

// 6. Output results to the <main> element

main.innerHTML = `
<h2> You got ${correct} out of 5 questions correct.</h2>
<p>Crown earned: <b>${rank}</b></p>`;



