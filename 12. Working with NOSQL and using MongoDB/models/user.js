const { DataTypes, Sequelize } = require("sequelize");

const sequalize = require("../util/database");

const User = sequalize.define(
    "user",
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE(6),
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE(6),
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
    },
    { paranoid: true }
);

module.exports = User;