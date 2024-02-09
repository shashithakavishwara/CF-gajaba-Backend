const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventId: { type: String, required: false },
    eventName: { type: String, required: false },
    type: { type: String, required: false }, //grp or indevidual

    firstPlaceScore: { type: String, required: false },  // score
    firstPlaceHouse: { type: String, required: false }, // house name 
    firstPlaceEpf: { type: String, required: false },  // if its indevidual , epf
    noteForPlace1: { type: String, required: false },  //if its group they can add list of epf in this text field

    secondPlaceScore: { type: String, required: false },
    secondPlaceHouse: { type: String, required: false },
    secondPlaceEpf: { type: String, required: false },
    noteForPlace2: { type: String, required: false },

    thirdPlaceScore: { type: String, required: false },
    thirdPlaceHouse: { type: String, required: false },
    thirdPlaceEpf: { type: String, required: false },
    noteForPlace3: { type: String, required: false },
}, {
    timestamps: true,
})

module.exports = Event = mongoose.model("Event", eventSchema);