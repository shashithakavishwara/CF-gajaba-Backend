const Event = require('../model/Event.model');
const Winner = require('../model/Winner.model');

//Create new Event 
const createWinner = async (req, res) => {
    //catching data from front end to these attributes
    const { epfNumber, eventName, eventType, marks, houseName } = req.body;

    //create a object to store saved data to save in the mongo db database
    const winner = new Winner({
        epfNumber,
        eventName,
        eventType,
        marks,
        houseName
    });

    //sending created ticket object to the database 
    await winner.save()
        .then(() => res.json('Event Registered'))
        .catch(err => res.status(400).json('Error : ' + err));
};

// epfNumber
// eventName
// eventType
// marks
// houseName

//get Event info by id
// const getEventById = async (req, res) => {
//     try {
//         const event = await Event.findById(req.params.id);
//         if (event)
//             res.json(event)
//         else {
//             res.json("No Event record in the database!");
//         }
//     } catch (error) {
//         res.status(500).send("Server Error" + error);
//     }
// };

// //get all Event records
// const getEvent = async (req, res) => {
//     try {
//         const event = await Event.find();
//         res.json(event)
//     } catch (error) {
//         res.status(500).send("Server Error : " + error);
//     }
// }

// //Update Exsisting Event record
// const updateEvent = async (req, res) => {
//     Event.findByIdAndUpdate(req.params.id).
//         then((exsistingEvent) => {
//             exsistingEvent.eventId = req.body.eventId;
//             exsistingEvent.eventName = req.body.eventName;
//             exsistingEvent.scoreFor1 = req.body.scoreFor1;
//             exsistingEvent.scoreFor2 = req.body.scoreFor2;
//             exsistingEvent.scoreFor3 = req.body.scoreFor3;
//             exsistingEvent.save()
//                 .then((updatedEvent) => res.json(updatedEvent))
//                 .catch((error) => res.status(400).json("Error: " + error));
//         })
//         .catch((error) => res.status(400).json("Error: 1" + error));
// };

//export created functions 
module.exports = {
    createWinner,
    // deleteTicket,
    // getEventById,
    // getEvent,
    // updateEvent
};