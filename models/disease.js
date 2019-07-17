module.exports = function(sequelize, DataTypes) {
  var Disease = sequelize.define("Disease", {
    id: DataTypes.INTEGER,
    diseaseName: DataTypes.STRING,
    symptom1: DataTypes.STRING,
    symptom2: DataTypes.STRING,
    symptom3: DataTypes.STRING,
    agressiveness: DataTypes.INTEGER
  });
  return Disease;
};