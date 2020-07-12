const Blog_Comments = require("../Models/Blog_Comments");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let blog_comments = await Blog_Comments.findAll();
    return res.status(200).json({
      message: "success",
      users: blog_comments,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

module.exports = router