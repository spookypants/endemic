$("#sign-up").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/signup";
});
  
$("#sign-in").on("click", function(event) {
  event.preventDefault();
  var user = {
    userName: $("#userName").val(),
    password: $("#account_password").val()
  };
  $.post("/api/login", user, function(results) {
    if (results) {
      $(location).attr("href", "/welcomeBack");
    } else {
      $(location).attr("href", "/characters");
    }});
  //     } else {
  //       $("#account-info").modal("close");
  //       alert("There was an error, please try again.");
  //     }
  //   });
});
// $("#play").on("click", function(event){
//   event.preventDefault();
//   window.location.href = "/characters";
// });