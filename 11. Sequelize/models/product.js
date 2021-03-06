const { DataTypes, Sequelize } = require("sequelize");

const sequalize = require("../util/database");

const Product = sequalize.define(
    "product",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE(6),
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: DataTypes.DATE(6),
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    },
    {
        paranoid: true
    }
);

module.exports = Product;
