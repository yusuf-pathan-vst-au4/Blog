const Follower = require('../Models/Followers');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let followers = await Follower.findAll();
    return res.status(200).json({
      status: "200",
      message: 'success',
      users: followers,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});


router.post('/followers', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const data = {
    userid: req.body.userid,
    followers: req.body.followers,
  };

  try {
    Follower.findOne({
      where: {
        userid: data.userid,
      },
    }).then((data) => {
      Follower.create({
          userid:data.username,
          followers: data.followers

        }).then((data) => {
          console.log('follower added');
          return res.send({
            message:"follower added",
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
