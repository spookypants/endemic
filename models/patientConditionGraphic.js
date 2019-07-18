module.exports = function(sequelize, DataTypes) {
  var patientConditionGraphic = sequelize.define("patientConditionGraphic", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
  
    conditionName: {
      type: DataTypes.STRING
    },
  
    minHealth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  
    maxHealth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  
    displayImage: {
      type: DataTypes.STRING
    }
      
  });
  return patientConditionGraphic;
};