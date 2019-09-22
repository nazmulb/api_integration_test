
module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define("Company", {
		name: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
			validate: {
				notNull: {
					msg: "Please enter your company name",
				},
			},
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
