const { DataTypes, Sequelize } = require("sequelize");

const sequalize = require("../util/database");

const OrderItem = sequalize.define(
    "orderItem",
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
        quantity: {
            type: DataTypes.INTEGER
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
        indexes: [
            // Create a unique index on email
            {
              unique: true,
              fields: ['orderId', 'productId', 'deletedAt']
            },
        ]
    }
);

module.exports = OrderItem;