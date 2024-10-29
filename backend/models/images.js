const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    buffer: Buffer  
});

module.exports = mongoose.model('images', imageSchema);
