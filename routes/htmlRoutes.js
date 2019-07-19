var db = require("../models");
var path = require("path");
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

  // "viewaccount" signin
  app.get("/login", function(req, res){
    res.render("login");
  });
  // app.get("/viewAccount", isAuthenticated, function(req, res){
  //   res.send("viewAccount");
  // });
 
  // "welcome-back"
  //if a user is not logged in and tries to access this page they will be redirected to the signin page
  app.get("/welcomeback", function(req, res){
    res.redirect("/");
  });

  app.get("/welcomeback", isAuthenticated, function(req, res){
    db.Players.findOne({ where: { userName: res.body.userName}});
    res.render("/welcomeBack");
  });
  // ------------ testing -------------------------------
  // character creation
  app.get("/characterCreation", function(req, res){
    res.render("characterCreation");
  });

  // game page
<<<<<<< HEAD
  app.get("/game-page", function(req, res){
    res.render("gamePage");
=======
  app.get("/gamepage", function(req, res){
    res.render("gamepage");
>>>>>>> master
  });
  // ------------- testing ------------------------------
  //logout
   
  app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });
  
  app.get("/characters", function(req, res){
    res.render("characterCreation");
  });

  app.get("/game", function(req, res){
    res.sendFile(path.join(__dirname, "../views/game-page.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
