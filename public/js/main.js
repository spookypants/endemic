$("#sign-up").on("click", function(event) {
    event.preventDefault();
    window.location.href = "/signup";
});
  
  // $("#sign-in").on("click", function(event) {
  //   event.preventDefault();
  //   var user = {
  //     email: $("#email").val(),
  //     accountKey: $("#account_password").val()
  //   };
  //   $.post("/login", user, function(results) {
  //     if (results) {
  //       $.get("/api/users/key", user, function(results) {
  //         if (results) {
  //           $(location).attr("href", "/ludus-magnus");
  //         } else {
  //           $(location).attr("href", "/character");
  //         }
  //       });
  //     } else {
  //       $("#account-info").modal("close");
  //       alert("oops something went wrong, please try again!");
  //     }
  //   });
  // });
  