var db = require("../models");

module.exports = function(app) {
  app.get("/api/disease/:id", function(req, res) {
    db.Disease.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(disease) {
      res.json(disease);
    });
  });


  app.get("/api/treatment/:id", function(req, res) {
    db.Treatment.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(treatment) {
      res.json(treatment);
    });
  });

  // app.get("/api/treatment/:id", function(req, res){
  //   console.log("Treatment Ids: " + req.data.ids);
  //     db.Treatment.findOne({
  //       where: {
  //           id: req.params.id
  //         },
  //     }).then(function(treatment){
  //       console.log(treatment);
  //       res.json(treatment);
  //   });
  // })
  app.get("/api/effect/:id", function(req, res) {
    db.Effect.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(effect) {
      res.json(effect);
    });
  });
};

// var diseaseId = getRandomId(10);
// var effectId = getRandomId(37);
// var treatmentIds = [];


// function getRandomId(maxId){
//   var randomId = Math.floor(Math.random() * maxId) +1;
//   return randomId;
// }

// function getTreatmentIds(){
//   while (treatmentIds.length < 3){
//     randomId = getRandomId(9);
//     if(treatmentIds.indexOf(randomId) === -1){
//       treatmentIds.push(randomId);
//     }
//   }
// }