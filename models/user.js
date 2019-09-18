'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    lastName: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Employee, {
      onDelete: 'CASCADE',
    });
  };
  return User;
};