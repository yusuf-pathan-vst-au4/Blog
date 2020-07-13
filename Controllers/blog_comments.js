const Blog_Comments = require("../Models/Blog_Comments");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let blog_comments = await Blog_Comments.findAll();
    return res.status(200).json({
      status: "200",
      message: "success",
      users: blog_comments,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});


router.post('/comments', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const data = {
    userid: req.body.userid,
    blogid: req.body.blogid,
    comment: req.body.comment,
  };

  try {
    Blog.findOne({
      where: {
        userid: data.userid,
      },
    }).then((data) => {
      Blog.create({
        userid:data.userid,
        blogid: data.blogid,
        comment: data.comment

        }).then((data) => {
          console.log('comment added');
          return res.send({
            message:"comment added",
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