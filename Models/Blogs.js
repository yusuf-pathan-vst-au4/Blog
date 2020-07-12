const db = require("../db");
const Sequelize = require("sequelize");

const Blog = db.define(
  "blogs",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    likes: {
      type: Sequelize.INTEGER,
    },
    post: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log("blogs db has been created"));

module.exports = Blog;
