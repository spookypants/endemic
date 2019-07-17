var db = require("../models");
var authController = require("../controllers/authcontroller");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome! You are now using Passport with Sequelize! Go team!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  //Load our landing page
  app.get("/", function(req, res) {
    res.render("landing");
  });

  //Load our sign-up page
  app.get("/signup", function(req, res){
    res.render("newAccount");
  });

  // "/signin"
  app.get("/viewAccount", function(req, res){
    res.render("viewAccount");
  });
 

  // "welcome-back"
  //if a user is not logged in and trieds to access this page they will be redirected to the signin page
  app.get("/welcome-back", isAuthenticated, function(req, res){
    res.redirect("/viewAccount");
  });

  // "viewaccount"

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
