var Profile = require("./profile.js");
var renderer = require("./renderer");

// Handle HTTP route GET / and post / i.e. Home
function home(request, response) {
    //if url === "/" && GET
    if(request.url === '/') {

    //Show serach field
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view("footer", {}, response);
    }
}

    //if URL == "/" && POST 
        //redirect to username


// Handle the HTTP route for GET / :username i.e. /amarmohammed
function user(request, response) {
//if url == "/..."
var username = request.url.replace("/", "");
if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, response);
    
    //get json from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON) {
        //show profile

        //Store the values which we need
        var values = {
            avartarURL: profileJSON.gravatar_url,
            username: profileJSON.profile_name,
            badges: profileJSON.badges.length,
            javascriptPoints: profileJSON.points.JavaScript
        }
        //Simple reponse
        renderer.view("profile", values, response);
        renderer.view("footer", {}, response);   

    });
    //on error
    studentProfile.on("error", function(error) {
        //Show error
        response.write(error.message + "\n"); 
        response.end('Footer\n');
    });

  }
}

module.exports.home = home;
module.exports.user = user;
