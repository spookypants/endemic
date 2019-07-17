var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // Create a new example
  app.post("/api/players", function(req, res) {
    db.Players.create(req.body).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
  app.get("/api/mychar", isAuthenticated, function(req, res){
    db.Players.findOne({
      where: {PlayerId: req.user.id}
    }).then(function(dbPlayers){
      if(!dbPlayers){
        res.status(404).json(false);
      }
      else if(dbPlayers.UserId === req.user.id){
        res.json(dbPlayers);
        res.status(200).json(true);
      }
      else {
        res.status(401).json(false);
      }
    });
  });

  app.post("api/signup", function(req, res){
    db.Player.create({
      userName: req.body.userName,
      password: req.body.password,
      gender: req.body.gender,
      age: req.body.age,
      medicinalPreference: req.body.medicinalPreference
    }).then(function(dbPlayers){
      res.json(dbPlayers);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res){
    res.json(req.user);
  });
};