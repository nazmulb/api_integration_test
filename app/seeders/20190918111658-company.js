
module.exports = {
	up: (queryInterface) => queryInterface.bulkInsert(
		"Companies",
		[
			{
				name: "Field Nation",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		{},
	),

	down: (queryInterface) => queryInterface.bulkDelete("Companies", null, {}),
};
