const mongoose = require('mongoose');

const moistureSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true,
        default: Date.now,
        index: true // Ensures MongoDB knows this is the time field for the time series
    },
    moisture: {
        type: Number,
        required: true
    }
});

const Moisture = mongoose.model('Moisture', moistureSchema);
module.exports = Moisture;
