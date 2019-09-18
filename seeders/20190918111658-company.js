'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Companies', 
    [
      {
        name: 'Field Nation',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Companies', null, {}),
};
