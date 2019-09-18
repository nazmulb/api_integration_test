'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: DataTypes.STRING,
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Employee, {
      onDelete: 'CASCADE'
    });
  };
  return User;
};