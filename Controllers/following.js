const Following = require('../Models/Following');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let following = await Following.findAll();
    return res.status(200).json({
      message: 'success',
      users: following,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

module.exports = router
