const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://testuser:testpass@cluster0.3eoo6.mongodb.net/staying_alert?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err));

app.post("/api/register", async (req, res) => {
  let bpassword = "";
  let rpassword = "";
  console.log(req.body);
  bpassword = req.body.password;
  rpassword = req.body.rpassword;
  if (bpassword !== rpassword) {
      err = "!!!Passwords do not match!!!"
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
      });
        user.save();
        res.json({ status: "ok" });
    } catch (err) {
      console.log("error is: ", err);
      res.json({ status: "error", error: err });
    }
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    user_name: req.body.uname,
    password_hash: req.body.password,
  });

  console.log("BkEnd:user = ", user);

  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(1337, () => {
  console.log("Server running on port:1337");
});
