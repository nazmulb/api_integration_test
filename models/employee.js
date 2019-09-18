'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    designation: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    department: DataTypes.STRING,
    joiningDate: { 
      type: DataTypes.DATEONLY, 
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    salary: DataTypes.FLOAT
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });

    Employee.belongsTo(models.Company, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Employee;
};