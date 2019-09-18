'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    designation: {
      allowNull: false,
      type: DataTypes.STRING
    },
    department: DataTypes.STRING,
    joiningDate: {
      allowNull: false,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATEONLY
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