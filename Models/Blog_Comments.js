const db = require("../db");
const Sequelize = require("sequelize");

const Blog_Comments = db.define(
  "blog_comments",
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
    blogid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then(() => console.log("Blog_Comments db has been created"));

module.exports = Blog_Comments;
