module.exports = function(sequelize, DataTypes) {
  var Effect = sequelize.define("Effect", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },

    effectName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    effectDescription: {
      type: DataTypes.STRING,
    },

    positiveEffect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }

  });
  return Effect;
};