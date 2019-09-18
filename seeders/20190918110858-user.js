'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users', 
    [
      {
        firstName: 'Nazmul',
        lastName: 'Basher',
        email: 'nazmul.basher@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
