const express = require("express");
const router = express.Router();
const Assistance = require("../models/assistance.model");

router.get("/");
router.post("/");
router.put("/");
router.delete("/");
  
  //GET Assistance create page
  router.get("/create", (req, res) => {
    res.json({ mssg: "GET Assistance create page" });
  });
  
  // POST a new assitance/create route
  router.post("/create", async (req, res) => {
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

module.exports = router;
