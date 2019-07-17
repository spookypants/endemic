module.exports = function(sequelize, DataTypes) {
  var Effect = sequelize.define("Effect", {
    id: DataTypes.INTEGER,
    effectName: DataTypes.STRING,
    effectDescription: DataTypes.STRING,
    positiveEffect: DataTypes.BOOLEAN
  });
  return Effect;
};