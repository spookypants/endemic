$("#sign-up").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/signup";
});

$("#home").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/";
});

// $("#play").on("click", function(event) {
//   event.preventDefault();
//   window.location.href = "/game";
// });