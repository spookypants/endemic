module.exports = function(sequelize, DataTypes) {
  var Effect = sequelize.define("Effect", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    effectName: DataTypes.STRING,
    effectDescription: DataTypes.STRING,
    positiveEffect: DataTypes.BOOLEAN
  });
  return Effect;
};