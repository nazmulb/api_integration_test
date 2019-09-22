
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		firstName: {
			allowNull: false,
			type: DataTypes.STRING,
			validate: {
				notNull: {
					msg: "Please enter your first name",
				},
			},
		},
		lastName: DataTypes.STRING,
		email: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING,
			validate: {
				isEmail: {
					msg: "Please enter a valid email address",
				},
			},
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING,
			validate: {
				notNull: {
					msg: "Please enter your password",
				},
			},
		},
	}, {});
	User.associate = function (models) {
		// associations can be defined here
		User.hasOne(models.Employee, {
			onDelete: "CASCADE",
		});
	};
	return User;
};
