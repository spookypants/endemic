module.exports = function (sequelize, Sequelize) {
  var Player = sequelize.define("players", {
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