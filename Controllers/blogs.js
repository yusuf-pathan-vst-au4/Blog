const Blog = require('../Models/Blogs');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let blogs = await Blog.findAll();
    return res.status(200).json({
      message: 'success',
      users: blogs,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

module.exports = router
