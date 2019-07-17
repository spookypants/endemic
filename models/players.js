// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

//creating our player model
module.exports = function (sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    medicinalPreference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastAvatarId: {
      type: DataTypes.INTEGER
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    //would we want last login?
    lastGameLog: {
      type: DataTypes.TEXT
    }
  });

  //do we want to associate the Player with the avatar table here??
  // Players.associate = function(models){
 

  Players.prototype.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
  };

  Players.addHook("beforeCreate", function(user){
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return Players;
};