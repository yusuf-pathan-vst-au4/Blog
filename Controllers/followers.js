const Follower = require('../Models/Followers');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let followers = await Follower.findAll();
    return res.status(200).json({
      message: 'success',
      users: followers,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

module.exports = router
