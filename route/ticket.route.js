const express = require("express");
const router = express.Router();

const {
    createTicket,
    deleteTicket,
    getTicketById,
    getTicket,
    updateTicket,
} = require("../controller/Ticket.controller");

//@route  POST api/ticket
//@desc   add ticket record
router.post("/add", createTicket);

//@route  GET api/ticket
//@desc   get ticket by Id
router.get("/:id", getTicketById);

//@route  DELETE api/ticket
//@desc   delete ticket
router.delete("/:id", deleteTicket);

//@route  GET api/ticket/all
//@desc   get all ticket
router.get("/", getTicket);

//@route  PUT api/ticket
//@desc   update ticket record
router.put("/:id", updateTicket);

module.exports = router;