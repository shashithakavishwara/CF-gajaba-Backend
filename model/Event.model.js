const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventId: { type: String, required: true },
    eventName: { type: String, required: true },
    scoreFor1: { type: String, required: true },
    scoreFor2: { type: String, required: true },
    scoreFor3: { type: String, required: true },

}, {
    timestamps: true,
})

module.exports = Event = mongoose.model("Event", eventSchema);