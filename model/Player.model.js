const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    EPF: { type: String, required: true },
    house: { type: String, required: true },
    branch: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    phoneNumber: { type: String, required: true}
}, {
    timestamps: true,
})

module.exports = Players = mongoose.model("Player", playerSchema);