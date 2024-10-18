const mongoose = require('mongoose');

const moistureSchema = new mongoose.Schema({
    time: { type: Date, default: Date.now, index: true },
    moisture: { type: Number }
});

const Moisture = mongoose.model('Moisture', moistureSchema);
module.exports = Moisture;

