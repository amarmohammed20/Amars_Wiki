// The for loop cycles over list items and applies a color to each item using the values stored in the colors array. 
// For example, the first color in the array ( #C2272D) is applied to the first list item, the second color (#F8931F) to the second list item, and so on. 
// Complete the code by setting the variable listItems to refer to a collection. The collection should contain all list items in the <ul> element with the ID of rainbow.


// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Rainbow!</title>
//   </head>
//   <body>
//     <ul id="rainbow">
//       <li>This should be red</li>
//       <li>This should be orange</li>
//       <li>This should be yellow</li>
//       <li>This should be green</li>
//       <li>This should be blue</li>
//       <li>This should be indigo</li>
//       <li>This should be violet</li>
//     </ul>
//     <script src="js/app.js"></script>
//   </body>
// </html>

//The variable listItems gets the element by ID (which is a list) and uses .children to get the bullet points 
var listItems = document.getElementById('rainbow').children;
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}