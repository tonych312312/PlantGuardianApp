const mongoose = require('mongoose');

const waterSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true,
        default: Date.now,
        index: true
    },
    waterLevel: {
        type: Number,
        required: true
    }
});

const Water = mongoose.model('Water', waterSchema);
module.exports = Water;
