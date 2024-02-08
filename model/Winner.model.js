const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const winnerSchema = new Schema({
    epfNumber: { type: String, required: true },
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    marks: { type: String, required: true },
    houseName: { type: String, required: true },

}, {
    timestamps: true,
})

module.exports = Winner = mongoose.model("Winner", winnerSchema);

// epfNumber
// eventName
// eventType
// marks
// houseName
