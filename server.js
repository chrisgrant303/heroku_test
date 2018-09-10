var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

require("./routing/htmlRouting")(app);
// require("./routing/apiRouting")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});