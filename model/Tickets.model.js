const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    name: { type: String, required: true },
    id: { type: String, required: true,},
    description: { type: String, required: true },
    subject: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
})

module.exports = Ticket = mongoose.model("Tickets", ticketSchema);