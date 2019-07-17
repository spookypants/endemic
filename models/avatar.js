module.exports = function(sequelize, DataTypes) {
  var Avatar = sequelize.define("Avatar", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avatarName: DataTypes.STRING,
    gender: DataTypes.STRING,
    speciatistType: DataTypes.STRING,
    specialistType: DataTypes.STRING,
    baseImage: DataTypes.STRING,
    sadImage: DataTypes.STRING,
    happyImage: DataTypes.STRING,
    sadVoiceEmote: DataTypes.STRING,
    happyVoiceEmote: DataTypes.STRING,
  });
  return Avatar;
};