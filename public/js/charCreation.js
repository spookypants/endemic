//global variables
var genderSelected;
var specialistSelected;


//disable the specialist selection divs until the gender is selected
function disableMaleChars(){
  $("#male-chars").css("opacity", "0.1");
  $(".male-doctor").off("click");
  $(".male-bioChemist").off("click");
  $(".male-shaman").off("click");
}
function disableFemaleChars(){
  $("#female-chars").css("opacity", "0.1");
  $(".female-doctor").off("click");
  $(".female-bioChemist").off("click");
  $(".female-shaman").off("click");
}
disableMaleChars();
disableFemaleChars();


//if the male icon is NOT selected yet, fade in and out ELSE stay at opacity 1
$("#maleIcon").hover(function(){
  $(this).css("opacity", "1");
},function(){
  if(genderSelected !== "male"){
    $(this).css("opacity", "0.5");
  }
});

//if the male gender is selected enable the male character selectors
$("#maleIcon").click(function(){
  $(this).css("opacity", "1");
  genderSelected = "male";
  $("#femaleIcon").css("opacity", "0.5");
  enableMaleChars();
  disableFemaleChars();
});

//if the female icon is NOT selected yet, fade in and out ELSE stay at opacity 1
$("#femaleIcon").hover(function(){
  $(this).css("opacity", "1");
},function(){
  if(genderSelected !== "female"){
    $(this).css("opacity", "0.5");
  }
});

//if the male gender is selected enable the male character selectors
$("#femaleIcon").click(function(){
  $(this).css("opacity", "1");
  genderSelected = "female";
  $("#maleIcon").css("opacity", "0.5");
  enableFemaleChars();
  disableMaleChars();
});


function enableMaleChars(){
  $("#male-chars").css("opacity", "0.5");
  $(".male-char").on("click", function(){
    specialistSelected = $(this).data("specialist");
    console.log(specialistSelected);
  });
}

function enableFemaleChars(){
  $("#female-chars").css("opacity", "0.5");
  $(".female-char").on("click", function(){
    specialistSelected = $(this).data("specialist");
    console.log(specialistSelected);
  });
}

$("#startGameButt").click(function(){
  console.log("I've been clicked");
});