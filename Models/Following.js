const db = require("../db");
const Sequelize = require("sequelize");

const Following = db.define(
  "following",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    following: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log("following db has been created"));

module.exports = Following;
