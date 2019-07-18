var db = require("../models");

module.exports = function(app) {
  app.get("/api/diseases/:id", function(req, res) {
    db.Disease.findOne({
        where: {
            id: req.params.id
          },
    }).then(function(dbDisease) {
      res.json(dbDisease);
    });
  });

  app.get("/api/treatments", function(req, res){
      db.Treatments.findAll({
        where: {
            id:{
                $contains: req.body
              }
          },
      }).then(function(dbTreatment){
        res.render("game-page", {treatments: dbTreatment})
    });
  })
  app.get("/api/effect/:id", function(req, res) {
    db.Effects.findOne({
        where: {
            id: req.params.id
          },
    }).then(function(dbEffect) {
      res.json(dbEffect);
    });
  });
};

