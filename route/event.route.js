const express = require("express");
const router = express.Router();

const {
createEvent, getEventById, getEvent, updateEvent
} = require("../controller/Event.controller");

//@route  POST api/ticket
//@desc   add ticket record
router.post("/add", createEvent);

// //@route  GET api/ticket
// //@desc   get ticket by Id
router.get("/:id", getEventById);

// //@route  DELETE api/ticket
// //@desc   delete ticket
// router.delete("/:id", deleteTicket);

// //@route  GET api/ticket/all
// //@desc   get all ticket
router.get("/", getEvent);

// //@route  PUT api/ticket
// //@desc   update ticket record
router.put("/:id", updateEvent);

module.exports = router;