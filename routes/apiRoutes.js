var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Get all players
  app.get("/api/players", function (req, res) {
    db.Players.findAll({}).then(function (dbPlayers) {
      res.json(dbPlayers);
    });
  });


  // Create a new player
  app.post("/api/players", function (req, res) {
    db.Players.create(req.body).then(function (dbPlayers) {
      res.json(dbPlayers);
    });
  });

  // app.post("/api/mychar/", passport.authenticate("local", { successRedirect: "/welcomeback",
  //   failureRedirect: "/login" })), function(req, res){
  //   db.Players.findOne({
  //     where: {userName: req.user.userName}
  //   }).then(function(dbPlayers){
  //     if(!dbPlayers){
  //       res.status(404).json(false);
  //     }
  //     else if(dbPlayers.UserId === req.user.id){
  //       res.json(dbPlayers);
  //       res.status(200).json(true);
  //     }
  //     else {
  //       res.status(401).json(false);
  //     }
  //   });
  // };

  //login
  app.post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.put("/api/players/pick_character", isAuthenticated, function (req, res) {
    console.log(req.body);
    console.log(req.user);
    db.Players.update(
      { lastAvatarId: req.body.avatarId },
      {
        where: {
          id: req.user.id
        }
      }
    ).then(function(dbPlayers){
      res.json(dbPlayers);
    });
    // db.Players.put(req.body).then(function(dbPlayer){
    //   res.json(dbPlayer)
    // });
  });

  app.post("/api/signup", function (req, res) {
    db.Players.create({
      userName: req.body.userName,
      password: req.body.password,
      gender: req.body.gender,
      age: req.body.age,
    }).then(function () {
      res.redirect("/characters");
    });
  });
};
