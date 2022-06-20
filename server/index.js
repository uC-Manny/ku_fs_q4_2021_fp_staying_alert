const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userRoutes = require("./routes/user_routes");
// const registerRoutes = require("./routes/register_routes");
// const loginRoutes = require("./routes/login_routes");
const personRoutes = require("./routes/person_routes");
const groupsRoutes = require("./routes/groups_routes");
const assistanceRoutes = require("./routes/assistance_routes");
const checkInRoutes = require("./routes/check_in_routes");
const dashboardRoutes = require("./routes/dashboard_routes");
const transactionRoutes = require("./routes/transactions_routes");
const Assistance = require("./models/assistance.model");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
// app.use("/api/register", registerRoutes);
// app.use("/api/login", loginRoutes);
app.use("/api/person", personRoutes);
app.use("/api/groups", groupsRoutes);
app.use("/api/assistance", assistanceRoutes);
app.use("/api/checkIn", checkInRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/transaction", transactionRoutes);

mongoose
  .connect(
    "mongodb+srv://testuser:testpass@cluster0.3eoo6.mongodb.net/staying_alert?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err));

  app.post("/api/assistance", async (req, res) => {
    const assistances = await Assistance.find({}); // Get all the assitances
    let new_assistance_num = 1;
    const num_assistances = assistances.length;
    if(num_assistances !== 0) {
      new_assistance_num = assistances[num_assistances-1].id_num + 1; // Look at the last record for the next number
    }
    try {
        const assitance = await Assistance.create({
        user_id: req.body.user_id,
        person_2_assist_id: req.body.person_id_num,
        critial_info_msg: req.body.criticalInfo,
        removed: req.body.removed,
        id_num: new_assistance_num,
      });
      assitance.save();
      res.json({ status: "ok" });
    } catch (err) {
      console.log("error is: ", err);
      res.json({ status: "error", error: err });
    }
  });
    
app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(1337, () => {
  console.log("Server running on port:1337");
});
