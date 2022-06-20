const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/api/dashboard/:id", async (req, res) => {
  const user = User.findById(req.params.id);
});

module.exports = router;
