// Array example
let shoppingList = ["banana", "grapes", "apple", "orange"];

let arrayButton = document.querySelector("#buttonArray");
let arrayButtonEvent = arrayButton.addEventListener("click", 
    function consolePrintArray(e) {
        e.preventDefault();
        let arrayMessage = "";
        for (i=0; i < shoppingList.length; i++) {
            arrayMessage += `<p id="arrayMessage"> I would like to buy a ${shoppingList[i]} </p>`
        }
        document.querySelector("#printArray").innerHTML = `<p>See the Shopping List Array - ${shoppingList} <p> <br> ${arrayMessage}`
    });

// Object Literal example
let human = {
  color : "blue",
  feet : 2,
  hands : 3,
  education : "Degree",
  hobbies : ["cars", "games"]
};
console.log(human);

let objectButton = document.querySelector("#buttonObject");
let objectButtonEvent = objectButton.addEventListener("click", 
    function consolePrintObject(e) {
      let objectDiv = document.querySelector(".printObject");
      let objectMessage = '';
      objectDiv.innerHTML = `<p>This Human being has the following properties:<p> 
                              <p>The color ${human.color}</p>
                              <p>They have ${human.feet} feet</p>
                              <p>They have ${human.hands} hands</p>
                              <p>They are ${human.education} educated</p>
                              <p>They love ${human.hobbies[0]} and ${human.hobbies[1]}</p>`
    });
      