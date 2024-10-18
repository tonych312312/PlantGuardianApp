const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
    time: { type: Date, default: Date.now, index: true },
    temperature: { type: Number }
});

const Temperature = mongoose.model('Temperature', temperatureSchema);
module.exports = Temperature;
