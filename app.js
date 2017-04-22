var express = require("express");
var app = express();

// Verbose server start logic
var utilizedRoutes = {};

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
utilizedRoutes.mainRoute = "/";

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});
utilizedRoutes.byeRoute = "/bye";

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("MEOW!");
});
utilizedRoutes.dogRoute = "/dog";

// Custom route
app.get("/r/:routeName", function(req, res) {
    var _name = req.params.routeName.toUpperCase();
    res.send("WELCOME TO THE " + _name + " ROUTE!");
});
utilizedRoutes.customRoute = "/r/:routeName";

// Custom route with multiple variables
app.get("/r/:routeName/comments/:id/:title/", function(req, res) {
    var _name = req.params.routeName;
    var _id = req.params.id;
    var _title = req.params.title;
    res.send("WELCOME TO THE " + _name.toUpperCase() + " ROUTE!<br><br>Route: " + _name + "<br>ID: " + _id + "<br>Title: " + _title);
});
utilizedRoutes.customRoute = "/r/:routeName/comments/:id/:title";

// Catch-all Route (Splat route)
app.get("*", function(req, res) {
    res.send("You are a star!!!");
});
utilizedRoutes.splatRoute = true;

// Server config settings
var config = {};
config.port = 3000;
config.host = "localhost";

// Key-Value Helper Function
var keyVal = function(o) {
    var key = Object.keys(o)[0];
    return {"key": key, "value":o[key]};
};

// Start the server
app.listen(config.port, config.host, function() {
    console.log("===============");
    console.log("Server started!");
    console.log("===============");
    console.log("HOST: " + config.host);
    console.log("PORT: " + config.port);
    for (key in utilizedRoutes) {
      console.log("ROUTE: `" + key + "` => " + utilizedRoutes[key]);
    }
});
