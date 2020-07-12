const User = require("../Models/User");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let users = await User.findAll();
    return res.status(200).json({
      message: "success",
      users: users,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

module.exports = router
