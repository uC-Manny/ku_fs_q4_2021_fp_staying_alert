const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// GET login or register page
router.get("/login", (req, res) => {
  res.json({ mssg: "GET login or create user page" });
});

// POST login route
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    user_name: req.body.uname,
  });

  if (!user) {
    console.log("*** Invalid User Name ***");
    return res.json({
      status: "error",
      user: false,
      error: "Invalid User Name",
    });
  }
  if (!bcrypt.compareSync(req.body.password, user.password_hash)) {
    console.log("*** Invalid Password Entered ***");
    return res.json({
      status: "error",
      user: false,
      error: "Invalid Password Entered",
    });
  } else {
    console.log("!!! Successfully Logged In !!!");
    return res.json({
      status: "ok",
      user: true,
      message: "Successfully Logged In",
      fname: user.first_name,
      lname: user.last_name,
      uname: user.user_name,
    }); // Sending back the names on record! ;-)
  }
});

//GET register page
router.get("/register", (req, res) => {
  res.json({ mssg: "GET register page" });
});

// POST a new user/register route
router.post("/register", async (req, res) => {
  const users = await User.find({}); // Get all the users
  const num_users = users.length;
  let new_user_num = 1;
  if(num_users !== 0) new_user_num = users[num_users - 1].id_num + 1
  let bpassword = "";
  let rpassword = "";
  bpassword = req.body.password;
  rpassword = req.body.rpassword;
  if (bpassword !== rpassword) {
    err = "!!!Passwords do not match!!!";
    res.json({ status: "error", error: err });
  } else {
    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(bpassword, salt);
      const user = await User.create({
        user_name: req.body.uname,
        first_name: req.body.fname,
        last_name: req.body.lname,
        email_addr: req.body.email,
        password_hash: hash,
        id_num: new_user_num,
      });
      user.save();
      res.json({ status: "ok" });
    } catch (err) {
      console.log("error is: ", err);
      res.json({ status: "error", error: err });
    }
  }
});

module.exports = router;
