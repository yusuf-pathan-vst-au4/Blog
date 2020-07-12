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

router.post("/", async (req, res) => {
  const { userid, blogid, comment } = req.body;
  if (!userid || !blogid || !comment) {
    return res.status(400);
  }
  try {
    let blog_comments = await Blog_Comments.create({
      userid: userid,
      blogid: blogid,
      comment: comment,
    });
    console.log(blog_comments);
    res.status(201).json({
      message: "success",
      blog_comments,
    });
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

router.put("/", async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    let blog_comments = await Blog_Comments.update(
      {
        blogid: blogid,
        userid: userid,
        comment: comment,
      },
      {
        where: { id: id },
      }
    );
    console.log(blog_comments);
    res.send(blog_comments);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("Body >> ", body);
    const blog_comments = await Blog_Comments.destroy({
      where: {
        id: id,
      },
    });
    res.json({ blog_comments });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
