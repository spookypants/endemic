var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Get all players
  app.get("/api/players", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // Create a new player
  app.post("/api/players", function(req, res) {
    db.Players.create(req.body).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // Delete an example by id
  app.delete("/api/mychar", isAuthenticated, function(req, res) {
    db.Players.destroy({ where: { userName: res.body.userName } }).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });
  //register 
  app.post("/api/signup", function(req, res){
    db.Players.create({
      userName: req.body.userName,
      password: req.body.password
    }).then(function(dbPlayers){
      res.json(dbPlayers);
    });
  });

  app.post("api/login", passport.authenticate("local"), function(req, res){
    res.json(req.user);
  });

};
