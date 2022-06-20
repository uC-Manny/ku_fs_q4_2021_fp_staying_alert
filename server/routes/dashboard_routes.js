const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const sendEmail = require("../utils/sendEmail");

router.get("/api/dashboard/:id", async (req, res) => {
  const user = User.findById(req.params.id);

  try {
    await sendEmail({
      to: user.email_addr,
      subject: "Emergency Alert!!",
      text: message,
    });
  } catch (error) {}
});

module.exports = router;
