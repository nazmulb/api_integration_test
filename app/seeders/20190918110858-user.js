
module.exports = {
	up: (queryInterface) => queryInterface.bulkInsert(
		"Users",
		[
			{
				firstName: "Nazmul",
				lastName: "Basher",
				email: "nazmul.basher@gmail.com",
				password: "123",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		{},
	),

	down: (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
