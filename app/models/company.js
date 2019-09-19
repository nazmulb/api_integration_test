
module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define("Company", {
		name: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
		},
	}, {});
	Company.associate = function (models) {
		// associations can be defined here
		Company.hasMany(models.Employee, {
			onDelete: "CASCADE",
		});
	};
	return Company;
};
