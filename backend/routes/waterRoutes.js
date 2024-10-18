const express = require('express');
const router = express.Router();
const Water = require('../models/Water');

// Route to get the latest water data
router.get('/', async (req, res) => {
    try {
        const latestWater = await Water.findOne().sort({ time: -1 });
        res.json(latestWater);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve water data', error: err });
    }
});

module.exports = router;
