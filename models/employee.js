'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    designation: DataTypes.STRING,
    department: DataTypes.STRING,
    joiningDate: DataTypes.DATEONLY,
    salary: DataTypes.FLOAT
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};