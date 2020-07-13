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

router.post('/signup', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const data = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  try {
    User.findOne({
      where: {
        username: data.username,
      },
    }).then((user) => {
      if (user != null) {
        console.log('username already taken');
        return res.send({
          message: 'username already taken',
        });
      }
      bcrypt.hash(data.password, 10).then((hashedPassword) => {
        User.create({
          username:data.username,
          password: hashedPassword,
          email: data.email,
          name:data.name

        }).then((user) => {
          console.log('user created');
          return res.send({
            message:"user created",
            user:user
          })
        });
      });
    });
    return res.status(200).json({
      message: "success",
      users: users,
    });
  }  catch (error) {
    console.log(error);
    res.status(400);
  }
});



module.exports = router
