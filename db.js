const Sequelize = require("sequelize");

const db = new Sequelize("blog", "postgres", "root", {
    host: "localhost",
    dialect: "postgres"
});

db.authenticate()
.then(() => {
    console.log("Connection is established");
});

module.exports = db;