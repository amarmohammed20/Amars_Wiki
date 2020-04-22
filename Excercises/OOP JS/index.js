//Stopped the video at 30 Mins -  https://www.youtube.com/watch?v=PFmuCDHHpwk

// properties are used to hold values
// methods are used to hold logic
// When a object has behaviour which is a method to simply duplicate that object is not best practice
// Use a factory or constrcutor function to resolve duplicating a object  


console.log("hello world");

// Below is a object literal
const circle = {
    // property
    radius: 1,
    // object
    location: {
        // property
        x: 1,
        // property
        y: 1
    }, 
    // draw is a method here
    draw: function() {
        console.log("draw");
    }
};

// Below is a factory function
// In the function we have removed the hard coded values and used parameters allowing the values to be dynamic
function createCircle(radius) {
    // Below we dont have to return a const as above we can simply use a return. This returns a object
    return {
        // property is now the parameter
        // In ES6 we can remove the noise in the code which means if radius is equal to radius paramter we can display as - radius
        radius: radius,
        // draw is a method here
        draw: function() {
            console.log("draw");
        }
    };
}

//Set the function above with a parameter in a variable below
const circle2 = createCircle(1);
// Called out the method in the in the object in the function below:
circle2.draw();

// Constructor Function
//this. below references the global object which in this case is (Circle3)
function Circle3(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

//new below is creating a new empty object, we are passing the property values in for the object
const another = new Circle3(1);

//They are two ways to create a object a factory function or a constructor

//Every object in JS has a property called constructor and that referrences the function that was used to create that object

//Below is a example were JS uses a function when you create a object using the object literal syntax
// let x = new object();
let x = {};

//Something confusing in JS is that functions are objects