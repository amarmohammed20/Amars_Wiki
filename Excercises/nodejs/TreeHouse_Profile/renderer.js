var fs = require("fs");

function view(templateName, values, reponse) {
    //Read from template files
    var fileContents = fs.readFileSync('./views/' + templateName + '.html');
        reponse.write(fileContents);
}

module.exports.view = view;