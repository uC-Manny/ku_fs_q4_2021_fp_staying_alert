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

// app.post("/api/login", async (req, res) => {
//   const user = await User.findOne({
//     user_name: req.body.uname,
//   });

//   console.log("BkEnd:user = ", user);

//   if (!user) {
//     console.log("*** Invalid User Name ***");
//     return res.json({
//       status: "error",
//       user: false,
//       error: "Invalid User Name",
//     });
//   }
//   if (!bcrypt.compareSync(req.body.password, user.password_hash)) {
//     console.log("*** Invalid Password Entered ***");
//     return res.json({
//       status: "error",
//       user: false,
//       error: "Invalid Password Entered",
//     });
//   } else {
//     console.log("!!! Successfully Logged In !!!");
//     return res.json({
//       status: "ok",
//       user: true,
//       message: "Successfully Logged In",
//       fname: user.first_name,
//       lname: user.last_name,
//       uname: user.user_name,
//     }); // Sending back the names on record! ;-)
//   }
// });

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(1337, () => {
  console.log("Server running on port:1337");
});
