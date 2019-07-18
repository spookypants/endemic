module.exports = function(sequelize, DataTypes) {
  var Disease = sequelize.define("Disease", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },

    diseaseName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    symptom1: {
      type: DataTypes.STRING,
      allowNull: false
    },

    symptom2: {
      type: DataTypes.STRING,
      allowNull: false
    },

    symptom3: {
      type: DataTypes.STRING,
      allowNull: false
    },

    agressiveness: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
  });
  return Disease;
};