$(document).ready(function(){
  $("#characterMusic").get(0).play();
//global variables
  var genderSelected;
  var specialistSelected;
  var avatarName;
  var avatarId;
  var avatarObj = {
    avatarName: "",
    gender: "",
    specialistType: "",
    avatarId: ""
  };

  //disable the specialist selection divs until the gender is selected
  function disableMaleChars() {
    $("#male-chars").css("opacity", "0.1");
    $(".male-doctor").off("click");
    $(".male-bioChemist").off("click");
    $(".male-shaman").off("click");
  }
  function disableFemaleChars() {
    $("#female-chars").css("opacity", "0.1");
    $(".female-doctor").off("click");
    $(".female-bioChemist").off("click");
    $(".female-shaman").off("click");
  }
  disableMaleChars();
  disableFemaleChars();


  //if the male icon is NOT selected yet, fade in and out ELSE stay at opacity 1
  $("#maleIcon").hover(function () {
    const hoverSound = new Audio("../sfx/onHover.mp3");
    hoverSound.play();
    $(this).css("opacity", "1");
  }, function () {
    if (genderSelected !== "male") {
      $(this).css("opacity", "0.5");
    }
  });

  //if the male gender is selected enable the male character selectors
  $("#maleIcon").click(function (event) {
    event.preventDefault();
    const buttonSound = new Audio("../sfx/onButtonClick.mp3");
    buttonSound.play();
    $(this).css("opacity", "1");
    genderSelected = "male";
    $("#femaleIcon").css("opacity", "0.5");
    enableMaleChars();
    disableFemaleChars();
  });

  //if the female icon is NOT selected yet, fade in and out ELSE stay at opacity 1
  $("#femaleIcon").hover(function () {
    const hoverSound = new Audio("../sfx/onHover.mp3");
    hoverSound.play();
    $(this).css("opacity", "1");
  }, function () {
    if (genderSelected !== "female") {
      $(this).css("opacity", "0.5");
    }
  });

  //if the female gender is selected enable the female character selectors
  $("#femaleIcon").click(function (event) {
    event.preventDefault();
    const buttonSound = new Audio("../sfx/onButtonClick.mp3");
    buttonSound.play();
    $(this).css("opacity", "1");
    genderSelected = "female";
    $("#maleIcon").css("opacity", "0.5");
    enableFemaleChars();
    disableMaleChars();
  });

  //enable male avatars to display and handle clicks for male avatars
  function enableMaleChars() {
    $("#male-chars").css("opacity", "0.5");
    
  }
  $(".male-chars").click(function (event) {
    event.preventDefault();
    const buttonSound = new Audio("../sfx/onButtonClick.mp3");
    buttonSound.play();
    specialistSelected = $(this).data("specialist");
    avatarName = $(this).data("avatarname");
    avatarId = $(this).data("id");
    console.log("male " + specialistSelected, avatarName, avatarId);
    $(".male-chars").css("opacity", "0.5");
    $(this).css("opacity", "1");
  });

  //enable female avatars to display and handle clicks for female avatars
  function enableFemaleChars() {
    $("#female-chars").css("opacity", "0.5");
  }

  $(".female-chars").on("click", function (event) {
    event.preventDefault();
    const buttonSound = new Audio("../sfx/onButtonClick.mp3");
    buttonSound.play();
    specialistSelected = $(this).data("specialist");
    avatarName = $(this).data("avatarname");
    avatarId = $(this).data("id");
    console.log("female " + specialistSelected, avatarName, avatarId);
    $(".female-chars").css("opacity", "0.5");
    $(this).css("opacity", "1");
  });

  // function createAvatar(avatarData){
  //   $.post("/createavatar", avatarData).then(function (){
  //     console.log(avatarData);
  //     window.location.href = "/game";
  //   });
  // }

  $("#gameStartButt").on("click", function(event){
    event.preventDefault();
    const successSound = new Audio("../sfx/onSuccess.mp3");
    successSound.play();
    // debugger;
    console.log("The player chose: " + avatarName, specialistSelected);
    avatarObj.avatarName = avatarName;
    avatarObj.gender = genderSelected;
    avatarObj.specialistType = specialistSelected;
    avatarObj.avatarId = avatarId;
    console.log(avatarObj);
    $.ajax({method: "PUT", url: "/api/players/pick_character", data: avatarObj}).then(function(response){
      console.log("response: " + response);
      debugger;
      window.location.href = "/game";
    });
  });
});