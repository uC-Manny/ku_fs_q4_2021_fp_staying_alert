const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  const users = await User.find({}); // Get all the users
  const num_users = users.length;
  const new_user_num = users[num_users - 1].id_num
    ? users[num_users - 1].id_num + 1
    : 1; // Look at the last record for the next number
  console.log("Number of users = " + users.length);
  console.log("New User # = " + new_user_num);

  const { uname, fname, lname, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }

  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    user_name: uname,
    first_name: fname,
    last_name: lname,
    email_addr: email,
    password: hashedPassword,
    id_num: new_user_num,
  });

  try {
    await user.save();
    console.log("User saved to DB");
  } catch (error) {
    console.log(error);
  }

  return res.status(201).json({ message: user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return new Error(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: "User not found. Register Please" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid email/password" });
  }
  return res.status(200).json({ message: "Successfully logged in " });
};

exports.register = register;
exports.login = login;
