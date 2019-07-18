function addPlayer(playerData) {
  $.post("/api/signup", playerData).then(function () {
    // res.render("characterCreation");
    window.location.href = "/characters";
  });
}
$("#add-account").on("click", function (event) {
  event.preventDefault();
  console.log("Add player button clicked.");
  console.log($(".medicinalPreference").val());
  // if(!newPlayer.userName.length > 0 && !newPlayer.password.length > 0){
  //   return;} 
  addPlayer ({
    id: $("#id").val(),
    userName: $("#userName").val(),
    password: $("#inputPassword").val(),
    gender: $("#inputGender").val(),
    age: $("#inputAge").val(),
    medicinalPreference: $(".medicinalPreference").val(),
    lastAvatarId: $("#lastAvatarId").val(),
    lastGameLog: $("#lastGameLog").val(),
  });
});
// if (newPlayer.userName.length > 0 && newPlayer.password.length > 0) {
//   $.ajax({
//     type: "post",
//     url: "/api/signup",
//     data: newPlayer
//   }).then(function () {
//     window.location.href = "/character";
//   });
// } else {
//   console.log("**Please complete the entire form.**");
//   $("#create-err-msg").empty("").text("**Please complete the entire form.**");
// }

