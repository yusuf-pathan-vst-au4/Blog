const User = require("../Models/User");
const express = require("express");
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const jwtSecret = require('../config/jwtConfig');

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
        User.insert({
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

// router.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   try {
//     User.findOne({
//       where: {
//         username,
//       },
//     }).then((user) => {
//       if (user == null) {
//         console.log("USER: ",user)
//         return res.json({ message: 'Incorrect username' });
//       }
//       bcrypt.compare(password, user.password).then((response) => {
//         if (response !== true) {
//           console.log('passwords do not match');
//           return res.json({ message: 'passwords do not match' });
//         }

//         const token = jwt.sign({ id: user.username }, jwtSecret.secret, {
//           expiresIn: 60 * 60,
//         });
//         console.log("Token: ", token)
//         console.log('user found & authenticated');
//         return res.json({ user: user,
//         token: token,
//       message: 'user found & logged in' });
//       });
//     });
//   }  catch (error) {
//     console.log(error);
//     res.status(400).json({
//       status: "400",
//       message: "error",
//       data: data,
//     });
//   }
// });



module.exports = router
