var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomNumber () {
    return Math.floor(Math.random() * upper );
} 

for (let i = 1; i <= 10; i += 1) {
    red = randomNumber();
    green = randomNumber();
    blue = randomNumber();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}


document.write(html);

//didnt work as i dont have the css file