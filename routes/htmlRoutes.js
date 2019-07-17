// eslint-disable-next-line no-unused-vars
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("landing");
  });

  app.get("/signup", function(req, res){
    res.render("newAccount");
  });

  app.get("/welcome-back", isAuthenticated, function(req, res){
    res.send("welcomeBack");
  });

  app.get("/viewAccount", isAuthenticated, function(req, res){
    res.send("viewAccount");
  });
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
  app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
