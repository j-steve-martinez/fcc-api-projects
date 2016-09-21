var express = require("express");
var app = express();
var args = process.argv.slice(2);
var port = args[0];

app.all("*", function(req, res, next) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  next();
});
app.get("/hello/:who", function(req, res) {
  res.end("Hello, " + req.params.who + ".");
  // Fun fact: this has security issues
});
app.get("/", function(req, res) {
  res.end("Welcome to the homepage!");
});

app.get("/about", function(req, res) {
  res.end("Welcome to the about page!");
});

app.get("*", function(req, res) {
  res.end("404!");
});


app.listen(port);
