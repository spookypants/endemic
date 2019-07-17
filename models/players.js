// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

//creating our player model
module.exports = function (sequelize, Sequelize) {
  var Player = sequelize.define("Players", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: true
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    medicinalPreference: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastAvatarId: {
      type: Sequelize.INTEGER
    },
    lastLogin: {
      type: Sequelize.DATE
    },
    //would we want last login?
    lastGameLog: {
      type: Sequelize.TEXT
    }
  });
  return Player;
};