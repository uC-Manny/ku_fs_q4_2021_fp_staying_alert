const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerRouter = require("./routes/register_route");
const loginRouter = require("./routes/login_route");

app.use(cors());
app.use(express.json());

app.use("/", registerRouter);
app.use("/", loginRouter);

mongoose
  .connect(
    "mongodb+srv://testuser:testpass@cluster0.3eoo6.mongodb.net/staying_alert?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err));

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(1337, () => {
  console.log("Server running on port:1337");
});
