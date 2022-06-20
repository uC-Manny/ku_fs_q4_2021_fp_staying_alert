const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  return res.status(200).json({ message: "GET login or register route/page" });
});

router.post("/", async (req, res) => {
  const user = await User.findOne({
    user_name: req.body.uname,
  });

  console.log("BkEnd:user = ", user);

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

module.exports = router;
