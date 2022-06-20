const express = require("express");
const router = express.Router();
const Person = require("../models/person.model");

router.get("/");
router.post("/");
router.put("/");
router.delete("/");
  
  //GET Person create page
  router.get("/create", (req, res) => {
    res.json({ mssg: "GET Person create page" });
  });
  
  // POST a new person/create route
  router.post("/create", async (req, res) => {
    console.log("BE: POST /api/person/create")
    const people = await Person.find({}); // Get all the assitances
    let new_person_num = 1;
    const num_people = people.length;
    if(num_people !== 0) {
        new_person_num = people[num_people-1].id_num + 1; // Look at the last record for the next number
    }
    try {
        const person = await Person.create({
        user_id: req.body.user_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        pref_name: req.body.pref_name,
        phone: req.body.phone,
        email_addr: req.body.email_addr,
        check_in_id_arr: req.body.checkInContacts,
        assist_confirm_arr: req.body.assistAlertContacts,
        assist_id: req.body.assist_id,
        person_is_self: req.body.person_is_self,
        removed: req.body.removed,
        id_num: new_person_num
      });
      person.save();
      res.json({ status: "ok" });
    } catch (err) {
      console.log("error is: ", err);
      res.json({ status: "error", error: err });
    }
  });

  // POST a new person/list route
  router.post("/list", async (req, res) => {
    res.data = await Person.find({}); // Get all the people
  });

module.exports = router;
