$(document).ready(function() {
  console.log("in the gamefunctions");
  getDisease();
  getTreatments();
  getEffect();
  //set up dummy variables to use for functions
  var patientLifePoints = 50;
  var disease = {
    disease: "test disease",
    symptom1: "Symp1",
    symptom2: "Symp2",
    symptom3: "Symp3"
  };
  var avatar = "Susan";

  function getRandomId(maxId){
    var randomId = Math.floor(Math.random() * maxId) +1;
    return randomId;
  }

  //GET a random 1 DISEASE and 3 SYMPTOMS
  function getDisease(){
    var disease;
    var randomId = getRandomId(10);
    //Select * from diseases where id = randomId
    $.ajax({
      method: "GET",
      url: "/api/diseases/" + randomId
    }).then(function (res){
      console.log("res");
        res.render("game-page", {diseases: res})
      });
  }


  //GET 3 random TREATMENTS
  function getTreatments(){
    var treatments;
    var randomId;
    var ids = new Array()
    while (ids.length < 3){
      randomId = getRandomId(9);
      if(ids.indexOf(randomId) === -1){
        ids.push(randomId);
      }
    }
    //treatments = select * from diseases where id = ids[0] or id = ids[1] or id = ids[2]
   
    $.ajax({
      method: "GET",
      URL: "/api/treatments",
      data: ids 
    }).then(function(res){
      console.log(res);
    });
  }


  //GET 1 random EFFECT
  function getEffect(){
    var effect;
    var randomId = getRandomId(37)
    var ids = new Array()

    //effect = select * from effects where id = randomId
    $.ajax({
      method: "GET",
      url: "/api/effect/" + randomId
    }).then(function (res){
        res.render("game-page", {effects: res})
      });
  }
})
