<<<<<<< HEAD
module.exports = function(req, res, next){
  if(req.user){
    return next();
  }
  
  return res.redirect("/");
};
=======
//middleware for the isAuthenticated function
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }
  
  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
  
>>>>>>> e49dd9bea042ebc87a766f5ec24a744d64099df6
