const mongoose = require('mongoose');

const waterSchema = new mongoose.Schema({
    time: { type: Date, default: Date.now, index: true },
    water: { type: Number }
});

const Water = mongoose.model('Water', waterSchema);
module.exports = Water;
