module.exports = function(sequelize, DataTypes) {
  var Treatment = sequelize.define("Treatment", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },

    treatmentName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    treatmentCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },

    doctorEffect: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    shamanEffect: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    biochemistEffect: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
  });
  return Treatment;
};