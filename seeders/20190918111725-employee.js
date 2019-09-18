'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Employees', 
    [
      {
        userId: 1,
        companyId: 1,
        designation: 'Engineering Manager',
        department: 'Engineering',
        joiningDate: new Date('2011-01-01'),
        salary: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Employees', null, {}),
};
