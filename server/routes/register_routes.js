const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/api/register", async (req, res) => {
  const users = await User.find({}); // Get all the users
  const num_users = users.length;
  const new_user_num = users[num_users - 1].id_num
    ? users[num_users - 1].id_num + 1
    : 1; // Look at the last record for the next number
  console.log("Number of users = " + users.length);
  console.log("New User # = " + new_user_num);
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
