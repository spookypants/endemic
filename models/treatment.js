module.exports = function(sequelize, DataTypes) {
    var Treatment = sequelize.define("Treatment", {
      id: DataTypes.INTEGER,
      treatmentName: DataTypes.STRING,
      treatmentCategory: DataTypes.STRING,
      doctorEffect: DataTypes.INTEGER,
      shamanEffect: DataTypes.INTEGER,
      biochemistEffect: DataTypes.INTEGER
    });
    return Treatment;
};