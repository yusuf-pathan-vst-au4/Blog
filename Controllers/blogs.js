const Blog = require("../Models/Blogs");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let blogs = await Blog.findAll();
    return res.status(200).json({
      message: "success",
      users: blogs,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

router.post("/", async (req, res) => {
  const { text, likes, post } = req.body;
  if (!text || !likes || !post) {
    return res.status(400);
  }
  try {
    let blogs = await Blog.create({
      text,
      likes,
      comment,
    });
    console.log(blogs);
    res.status(201).json({
      message: "success",
      blogs,
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
    let blogs = await Blog.update(
      {
        text,
        likes,
        comment,
      },
      {
        where: { id: id },
      }
    );
    console.log(blogs);
    res.send(blogs);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("Body >> ", body);
    const blogs = await Blog.destroy({
      where: {
        id: id,
      },
    });
    res.json({ blogs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
