const mongoose = require('mongoose');

const controlSchema = new mongoose.Schema({
    id: String,
    pump_on: String,
    light_on: String,
}, { collection: 'control' });

const Control = mongoose.model('Control', controlSchema);
module.exports = Control;
