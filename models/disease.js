module.exports = function(sequelize, DataTypes) {
  var Disease = sequelize.define("Disease", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    diseaseName: DataTypes.STRING,
    symptom1: DataTypes.STRING,
    symptom2: DataTypes.STRING,
    symptom3: DataTypes.STRING,
    agressiveness: DataTypes.INTEGER
  });
  return Disease;
};