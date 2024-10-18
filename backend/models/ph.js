const mongoose = require('mongoose');

const phSchema = new mongoose.Schema({
    time: { type: Date, default: Date.now, index: true },
    ph: { type: Number }
});

const PH = mongoose.model('pH', phSchema);
module.exports = PH;
