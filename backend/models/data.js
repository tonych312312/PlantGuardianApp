const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: String,
    moistureSens: String,
    phsens: String,
    waterlevelSens: String,
    temperatureF: String,
    temperatureC: String,
}, { collection: 'data' }); 

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
