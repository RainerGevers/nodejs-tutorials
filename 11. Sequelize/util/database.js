const Sequelize = require("sequelize");

const sequalize = new Sequelize("node-complete", "root", "root", {
    dialect: "mysql",
    host: "127.0.0.1",
    pool: {
        max: 5,
        min: 0,
    },
});

module.exports = sequalize