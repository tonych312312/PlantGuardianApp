const express = require('express');
const router = express.Router();
const Temperature = require('../models/Temperature');

// Route to get the latest temperature data
router.get('/', async (req, res) => {
    try {
        const latestTemperature = await Temperature.findOne().sort({ time: -1 });
        res.json(latestTemperature);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve temperature data', error: err });
    }
});

module.exports = router;
