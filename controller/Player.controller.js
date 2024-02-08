const Players = require('../model/Player.model');

//Create new Player 
const createPlayer = async (req, res) => {
    //catching data from front end to these attributes
    const { firstName, lastName, EPF, house, branch, phoneNumber, event } = req.body;

    //create a object to store saved data to save in the mongo db database
    const player = new Players({
        firstName,
        lastName,
        EPF,
        house,
        branch,
        phoneNumber,
        event
    });

    //sending created Player object to the database 
    await player.save()
        .then(() => res.json('Player Registered'))
        .catch(err => res.status(400).json('Error : ' + err));
};

//get player info by id
const getPlayerById = async (req, res) => {
    try {
        const player = await Players.findById(req.params.id);
        if (player)
            res.json(player)
        else {
            res.json("No Players record in the database!");
        }
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};


//get all Player records
const getPlayers = async (req, res) => {
    try {
        const players = await Players.find();
        res.json(players)
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
}

//Update Exsisting Player record
const updatePlayer = async (req, res) => {
    Players.findByIdAndUpdate(req.params.id).
        then((exsistingPlayer) => {
            exsistingPlayer.firstName = req.body.firstName;
            exsistingPlayer.lastName = req.body.lastName;
            exsistingPlayer.EPF = req.body.EPF;
            exsistingPlayer.house = req.body.house;
            exsistingPlayer.branch = req.body.branch;
            exsistingPlayer.phoneNumber = req.body.phoneNumber;
            exsistingPlayer.event = req.body.event;
            exsistingPlayer.save()
                .then((updatedPlayer) => res.json(updatedPlayer))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: 1" + error));
};

// firstName: { type: String, required: true },
// lastName: { type: String, required: true },
// EPF: { type: String, required: true },
// house: { type: String, required: true },
// branch: { type: String, required: false },
// phoneNumber: { type: String, required: false },
// event: { type: String, required: true }


//export created functions 
module.exports = {
    createPlayer,
    // deleteTicket,
    getPlayerById,
    getPlayers,
    updatePlayer
};