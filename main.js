var template = require("./content.ejs"),
    styles = require('./css/styles.css'),
    result = {
        length: "hi there my friend"
    };
require('./css/normalize.css');




if (module.hot) {
    module.hot.accept();
}

$( "body" ).empty();
$(document).ready(function() {
    $("body").append(template(styles));
});
