const db = require("../db");
const Sequelize = require("sequelize");

const Follower = db.define(
  "followers",
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
    followers: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log("followers db has been created"));

module.exports = Follower;
