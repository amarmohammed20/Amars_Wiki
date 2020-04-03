/**
 * Build an array called students that holds objects holding two properties name, track, achievements (number value) and points (number)
 * Create 5 student objects
 * 
 * 
 */

var students = [
  { 
    name : "sam",
    track : "Web Design",
    achievements : 3,
    points : 100
  },
  { 
    name : "andy",
    track : "App Design",
    achievements : 4,
    points : 150
  },
  { 
    name : "ibby",
    track : "Halo Design",
    achievements : 6,
    points : 200
  },
  { 
    name : "aki",
    track : "Graphic Design",
    achievements : 1,
    points : 50
  },
  { 
    name : "issy",
    track : "Car Design",
    achievements : 2,
    points : 20
  }
];

var message = "";
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

// The report variable can only be seen in the below function
function getStudentReport( student ) {
  var report += "<h2>Student: " + student.name + "</h2>";
  report += "<p>Track: " + student.track + "</p>";
  report += "<p>Achievements: " + student.achievements + "</p>";
  report += "<p>Points: " + student.points + "</p>";
  return report;
}

// Need a endless running loop so using a while loop
while (true) {
  search = prompt("Pick a name of a student to see thier detials, or quit to end");
  if(search.toLowerCase() === "quit" || search === null) {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if(student.name === search) {
      message = getStudentReport(student)
      print(message);
    }
    
  }
}

print(message);