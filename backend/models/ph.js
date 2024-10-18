const mongoose = require('mongoose');

const phSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true,
        default: Date.now,
        index: true
    },
    ph: {
        type: Number,
        required: true
    }
});

const PH = mongoose.model('PH', phSchema);
module.exports = PH;
