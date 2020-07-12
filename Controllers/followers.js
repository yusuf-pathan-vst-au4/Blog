const Follower = require("../Models/Followers");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let followers = await Follower.findAll();
    return res.status(200).json({
      message: "success",
      users: followers,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

router.post("/", async (req, res) => {
  const { userid, followers } = req.body;
  if (!userid || !followers) {
    return res.status(400);
  }
  try {
    let follower = await Follower.create({
      userid,
      followers,
    });
    console.log(follower);
    res.status(201).json({
      message: "success",
      follower,
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
    let follower = await Follower.update(
      {
        userid,
        followers,
      },
      {
        where: { id: id },
      }
    );
    console.log(follower);
    res.send(follower);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("Body >> ", body);
    const follower = await Follower.destroy({
      where: {
        id: id,
      },
    });
    res.json({ follower });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
