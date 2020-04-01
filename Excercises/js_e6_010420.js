/* Important note 
The behavior of most browsers has changed since this video was shot, so you won't see the same thing as I demonstrate in the video. In the video, you'll see that my script is able to print out to the browser using document.write( ) while inside a loop.

Most browsers no longer do that: they wait until the loop finishes and then they print to the window. So, you'll see a blank page until you type quit in the prompt window — then you'll see all the output printed to the screen.

Sorry for the confusion, and we'll update the video soon. */

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
    search = prompt("Search for a product in our store. Type list to show all products of the produce and quit to exit");
    if ( search.toLowerCase() === "quit") {
        break;
    } else if (search.toLowerCase() === "list") {
       print(inStock.join(", ")) 
    } else {
        if (inStock.includes(search) === true) {
            print(`Yes, we have ${search} in the store.`)
        } else {
            print(`${search} is not in stock.`)
        }
    }
}