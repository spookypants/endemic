var user = {
  userName: "",
  password: ""
};

$(document).ready(function() {
  $("#gameMusic").get(0).play();
});

$("#sign-up").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/signup";
});
  
$("#sign-in").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/login";
});

$("#login").on("click"), function(event){
  event.preventDefault();
  user.userName= $("#inputUserName").val(),
  user.password= $("#inputPassword").val();
};
$.post("/api/login", user).then(function(){
  console.log(user);
});




//     } else {
//       $("#account-info").modal("close");
//       alert("There was an error, please try again.");
//     }
//   });

// $("#play").on("click", function(event){
//   event.preventDefault();
//   window.location.href = "/characters";
// });
