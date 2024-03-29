const Event = require('../model/Event.model');

//Create new Event 
const createEvent = async (req, res) => {
    //catching data from front end to these attributes
    const {
        eventId, eventName, type,
        firstPlaceScore, firstPlaceHouse, firstPlaceEpf, noteForPlace1,
        secondPlaceScore, secondPlaceHouse, secondPlaceEpf, noteForPlace2,
        thirdPlaceScore, thirdPlaceHouse, thirdPlaceEpf, noteForPlace3
    } = req.body;

    //create a object to store saved data to save in the mongo db database
    const event = new Event({
        eventId,
        eventName,
        type,
        firstPlaceScore,
        firstPlaceHouse,
        firstPlaceEpf,
        noteForPlace1,
        secondPlaceScore,
        secondPlaceHouse,
        secondPlaceEpf,
        noteForPlace2,
        thirdPlaceScore,
        thirdPlaceHouse,
        thirdPlaceEpf,
        noteForPlace3
    });

    //sending created ticket object to the database 
    await event.save()
        .then(() => res.json('Event Registered'))
        .catch(err => res.status(400).json('Error : ' + err));
};

//get Event info by id
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (event)
            res.json(event)
        else {
            res.json("No Event record in the database!");
        }
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//get all Event records
const getEvent = async (req, res) => {
    try {
        const event = await Event.find();
        res.json(event)
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
}

//Update Exsisting Event record
const updateEvent = async (req, res) => {
    Event.findByIdAndUpdate(req.params.id).
        then((exsistingEvent) => {
            exsistingEvent.eventId = req.body.eventId;
            exsistingEvent.eventName = req.body.eventName;
            exsistingEvent.type = req.body.type;
            exsistingEvent.firstPlaceScore = req.body.firstPlaceScore;
            exsistingEvent.firstPlaceHouse = req.body.firstPlaceHouse;
            exsistingEvent.firstPlaceEpf = req.body.firstPlaceEpf;
            exsistingEvent.noteForPlace1 = req.body.noteForPlace1;
            exsistingEvent.secondPlaceScore = req.body.secondPlaceScore;
            exsistingEvent.secondPlaceHouse = req.body.secondPlaceHouse;
            exsistingEvent.secondPlaceEpf = req.body.secondPlaceEpf;
            exsistingEvent.noteForPlace2 = req.body.noteForPlace2;
            exsistingEvent.thirdPlaceScore = req.body.thirdPlaceScore;
            exsistingEvent.thirdPlaceHouse = req.body.thirdPlaceHouse;
            exsistingEvent.thirdPlaceEpf = req.body.thirdPlaceEpf;
            exsistingEvent.noteForPlace3 = req.body.noteForPlace3;

            exsistingEvent.save()
                .then((updatedEvent) => res.json(updatedEvent))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: 1" + error));
};

//Delete Ticket by id
const deleteEvent = async (req, res) => {
    console.log(req.params.id);
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event has been Deleted'))
        .catch(err => res.status(400).json('Error : ' + err));
}

//export created functions 
module.exports = {
    createEvent,
    deleteEvent,
    getEventById,
    getEvent,
    updateEvent
};