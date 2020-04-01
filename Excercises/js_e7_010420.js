/**
 * Ask a series of questions and evaluate each answer. 
 * Do this by using a two dimensional array - The array will hold the question and answer
 * Use a for loop to keep going through the question
 * Get the answers through a propmt
 * Keep track of the number of questions answered correctly
 * after all three questions are answers it should show the correct answers and wrong answers
 * 
 * 
 */
var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many legs does an insect have?', 6]
  ];
  var correctAnswers = 0;
  var question;
  var answer;
  var response;
  var correct = [];
  var wrong = [];
  
  function print(message) {
    document.write(message);
  }
  
function buildList(arr) {
    var listHTML = "<ol>";
    for (var i = 0; i < arr.length; i += 1) {
        listHTML += "<li>" + arr[i] + "</li>";
    }
    listHTML += "</ol>";
    return listHTML;
}

  for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question);
    response = parseInt(response);
    if (response === answer) {
      correctAnswers += 1;
      correct.push(question); 
    } else {
        wrong.push(question);
    } 
  }
  
  html = "You got " + correctAnswers + " question(s) right."
  print(html);
  