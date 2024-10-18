const express = require('express');
const router = express.Router();
const PH = require('../models/PH');

// Route to get the latest pH data
router.get('/', async (req, res) => {
    try {
        const latestPH = await PH.findOne().sort({ time: -1 });
        res.json(latestPH);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve pH data', error: err });
    }
});

module.exports = router;
