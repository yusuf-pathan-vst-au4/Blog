const Following = require('../Models/Following');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let following = await Following.findAll();
    return res.status(200).json({
      status: "200",
      message: 'success',
      users: following,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});
router.post('/following', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const data = {
    userid: req.body.userid,
    following: req.body.following,
  };

  try {
    Following.findOne({
      where: {
        userid: data.userid,
      },
    }).then((data) => {
      Following.create({
          userid:data.username,
          following: data.following

        }).then((data) => {
          console.log('started following');
          return res.send({
            message:"started following",
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
