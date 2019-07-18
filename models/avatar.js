module.exports = function(sequelize, DataTypes) {
  var Avatar = sequelize.define("Avatar", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avatarName: {
      type: DataTypes.STRING
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },

    speciatistType: {
      type: DataTypes.STRING,
      allowNull: false
    },

    baseImage: {
      type: DataTypes.STRING
    },

    sadImage: {
      type: DataTypes.STRING
    },

    happyImage: {
      type: DataTypes.STRING
    },

    sadVoiceEmote: {
      type: DataTypes.STRING
    },

    happyVoiceEmote: {
      type: DataTypes.STRING
    },

    createdAt: {
      type: DataTypes.DATETIME
    },

    updatedAt: {
      type: DataTypes.DATETIME
    }
    
  });
  return Avatar;
};