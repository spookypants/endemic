//global variables
var genderSelected;
var specialistSelected;
var avatarName;
var avatarObj = {
  avatarName: "",
  gender: "",
  specialistType: ""
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
  $(this).css("opacity", "1");
}, function () {
  if (genderSelected !== "male") {
    $(this).css("opacity", "0.5");
  }
});

//if the male gender is selected enable the male character selectors
$("#maleIcon").click(function () {
  $(this).css("opacity", "1");
  genderSelected = "male";
  $("#femaleIcon").css("opacity", "0.5");
  enableMaleChars();
  disableFemaleChars();
});

//if the female icon is NOT selected yet, fade in and out ELSE stay at opacity 1
$("#femaleIcon").hover(function () {
  $(this).css("opacity", "1");
}, function () {
  if (genderSelected !== "female") {
    $(this).css("opacity", "0.5");
  }
});

//if the female gender is selected enable the female character selectors
$("#femaleIcon").click(function () {
  $(this).css("opacity", "1");
  genderSelected = "female";
  $("#maleIcon").css("opacity", "0.5");
  enableFemaleChars();
  disableMaleChars();
});


function enableMaleChars() {
  $("#male-chars").css("opacity", "0.5");
  $(".male-char").on("click", function () {
    $(this).css("opacity", "1");
    specialistSelected = $(this).data("specialist");
    avatarName = $(this).data("avatarname");
    console.log(specialistSelected, avatarName);
  });
}

function enableFemaleChars() {
  $("#female-chars").css("opacity", "0.5");
  $(".female-char").on("click", function () {
    specialistSelected = $(this).data("specialist");
    avatarName = $(this).data("avatarname");
    console.log(specialistSelected, avatarName);
  });
}

function createAvatar(avatarData){
  $.post("/createavatar", avatarData).then(function (){
    console.log(avatarData);
    window.location.href = "/game";
  });
}

$("#gameStartButt").on("click", function(event){
  event.preventDefault();
  console.log("The player chose: " + avatarName, specialistSelected);
  avatarObj.avatarName = avatarName;
  avatarObj.gender = genderSelected;
  avatarObj.specialistType = specialistSelected;

  console.log(avatarObj);

  createAvatar(avatarObj);
});