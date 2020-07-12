const Following = require("../Models/Following");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let following = await Following.findAll();
    return res.status(200).json({
      message: "success",
      users: following,
    });
  } catch (error) {
    console.lof(error);
    res.status(400);
  }
});

router.post("/", async (req, res) => {
  const { userid, following } = req.body;
  if (!userid || !following) {
    return res.status(400);
  }
  try {
    let following = await Following.create({
      userid,
      following,
    });
    console.log(following);
    res.status(201).json({
      message: "success",
      following,
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
    let following = await Following.update(
      {
        userid,
        following,
      },
      {
        where: { id: id },
      }
    );
    console.log(following);
    res.send(following);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("Body >> ", body);
    const following = await Following.destroy({
      where: {
        id: id,
      },
    });
    res.json({ following });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
