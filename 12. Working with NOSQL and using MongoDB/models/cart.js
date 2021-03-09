const { DataTypes, Sequelize } = require("sequelize");

const sequalize = require("../util/database");

const Cart = sequalize.define(
    "cart",
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
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

module.exports = Cart;