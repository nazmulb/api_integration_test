
module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable("Employees", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		userId: {
			type: Sequelize.INTEGER,
			onDelete: "CASCADE",
			allowNull: false,
			references: {
				model: "Users",
				key: "id",
			},
		},
		companyId: {
			type: Sequelize.INTEGER,
			onDelete: "CASCADE",
			allowNull: false,
			references: {
				model: "Companies",
				key: "id",
			},
		},
		designation: {
			allowNull: false,
			type: Sequelize.STRING,
		},
		department: {
			type: Sequelize.STRING,
		},
		joiningDate: {
			allowNull: false,
			defaultValue: Sequelize.NOW,
			type: Sequelize.DATEONLY,
		},
		salary: {
			type: Sequelize.FLOAT,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	}),
	down: (queryInterface) => queryInterface.dropTable("Employees"),
};
