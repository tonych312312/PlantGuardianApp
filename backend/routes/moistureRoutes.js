const express = require('express');
const router = express.Router();
const Moisture = require('../models/Moisture');

// Route to get the latest moisture data
router.get('/', async (req, res) => {
    try {
        const latestMoisture = await Moisture.findOne().sort({ time: -1 });
        res.json(latestMoisture);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve moisture data', error: err });
    }
});

module.exports = router;
