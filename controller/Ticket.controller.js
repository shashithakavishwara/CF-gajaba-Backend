const Ticket = require('../model/Tickets.model');

//Create new ticket 
const createTicket = async (req, res) => {
    //catching data from front end to these attributes
    const { name, id, description, subject, date} = req.body;

    //create a object to store saved data to save in the mongo db database
    const ticket = new Ticket({
        name,
        id,
        description,
        subject,
        date
    });

    //sending created ticket object to the database 
    await ticket.save()
        .then(() => res.json('Ticket has been Raised.'))
        .catch(err => res.status(400).json('Error : ' + err));
};

//Delete Ticket by id
const deleteTicket = async (req, res) => {
    console.log(req.params.id);
    Ticket.findByIdAndDelete(req.params.id)
        .then(() => res.json('Ticket has been Deleted'))
        .catch(err => res.status(400).json('Error : ' + err));
}

//get ticket info by id
const getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (ticket)
            res.json(ticket)
        else {
            res.json("No ticket record in the database!");
        }
    } catch (error) {
        res.status(500).send("Server Error" + error);
    }
};

//get all ticket records
const getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.find();
        res.json(ticket)
    } catch (error) {
        res.status(500).send("Server Error : " + error);
    }
}

//Update Exsisting Ticket record
const updateTicket = async (req, res) => {
    Ticket.findByIdAndUpdate(req.params.id).
        then((exsistingTicket) => {
            exsistingTicket.name = req.body.name;
            exsistingTicket.id = req.body.id;
            exsistingTicket.description = req.body.description;
            exsistingTicket.subject = req.body.subject;
            exsistingTicket.date = Date.parse(req.body.date);
            exsistingTicket.save()
                .then((updatedTicker) => res.json(updatedTicker))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: 1" + error));
};

//export created functions 
module.exports = {
    createTicket,
    deleteTicket,
    getTicketById,
    getTicket,
    updateTicket
};