const express = require("express");
const router = express.Router();

const {
    createPlayer, getPlayerById, getPlayers, updatePlayer
} = require("../controller/Player.controller");

//@route  POST api/ticket
//@desc   add ticket record
router.post("/add", createPlayer);

// //@route  GET api/ticket
// //@desc   get ticket by Id
router.get("/:id", getPlayerById);

// //@route  DELETE api/ticket
// //@desc   delete ticket
// router.delete("/:id", deleteTicket);

// //@route  GET api/ticket/all
// //@desc   get all ticket
router.get("/", getPlayers);

// //@route  PUT api/ticket
// //@desc   update ticket record
router.put("/:id", updatePlayer);

module.exports = router;