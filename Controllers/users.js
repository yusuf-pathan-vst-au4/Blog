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

router.post("/", async (req, res) => {
  const { username, password, name, email } = req.body;
  if (!username || !password || !name || !email) {
    return res.status(400);
  }
  try {
    let user = await User.create({
      username,
      password,
      name,
      email,
    });
    console.log(user);
    res.status(201).json({
      message: "success",
      user,
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
    let user = await User.update(
      {
        username,
        password,
        email,
        name,
      },
      {
        where: { id: id },
      }
    );
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("Body >> ", body);
    const user = await User.destroy({
      where: {
        id: id,
      },
    });
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
