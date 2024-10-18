const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true,
        default: Date.now,
        index: true
    },
    temperature: {
        type: Number,
        required: true
    }
});

const Temperature = mongoose.model('Temperature', temperatureSchema);
module.exports = Temperature;
