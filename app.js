var express = require("express");
var path = require("path");
var app = express();

// Directs app to views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "images")));
app.set("images", "./images");
app.use(express.static(path.join(__dirname, "files")));
app.set("files", "./files");
app.use(express.static(path.join(__dirname, "stylesheets")));
app.set("stylesheets", "./stylesheets");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/prevWork", (req, res) => {
  res.render("prevWork");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(8080, () => {
  console.log("http://localhost:8080/");
});

module.exports = app;
