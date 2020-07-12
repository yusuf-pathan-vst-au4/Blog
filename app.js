const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const users = require("./Controllers/users");
const blog_comments = require("./Controllers/blog_comments");
const blogs = require("./Controllers/blogs");
const followers = require("./Controllers/followers");
const following = require("./Controllers/following");

app.use("/user", users);
app.use("/blog_comments", blog_comments);
app.use("/blogs", blogs);
app.use("/followers", followers);
app.use("/following", following);

module.exports = app;
