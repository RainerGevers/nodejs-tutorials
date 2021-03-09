const { DataTypes, Sequelize } = require("sequelize");

const sequalize = require("../util/database");

const Order = sequalize.define(
    "order",
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
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
    { 
        paranoid: true,
        // indexes: [
        //     // Create a unique index on email
        //     {
        //       unique: true,
        //       fields: ['cartId', 'productId', 'deletedAt']
        //     },
        // ]
    }
);

module.exports = Order;