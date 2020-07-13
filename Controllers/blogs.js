const Blog = require('../Models/Blogs');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let blogs = await Blog.findAll();
    return res.status(200).json({
      status: "200",
      message: 'success',
      users: blogs,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});


router.post('/blog', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const data = {
    text: req.body.text,
    likes: req.body.likes,
    post: req.body.post,
  };

  try {
    Blog.findOne({
      where: {
        userid: data.userid,
      },
    }).then((data) => {
      Blog.create({
          text:data.username,
          likes: data.followers,
          post: data.post

        }).then((data) => {
          console.log('post posted');
          return res.send({
            message:"post posted",
            data:data
          })
        });
    });
    return res.status(200).json({
      status: "200",
      message: "success",
      data: data,
    });
  }  catch (error) {
    console.log(error);
    res.status(400).json({
      status: "400",
      message: "error",
      data: data,
    });
  }
});

module.exports = router
