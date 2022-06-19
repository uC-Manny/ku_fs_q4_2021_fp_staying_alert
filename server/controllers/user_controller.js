const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
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
};

const login = async (req, res) => {
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
};

exports.register = register;
exports.login = login;
