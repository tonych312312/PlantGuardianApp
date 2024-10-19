const express = require('express');
const router = express.Router();
const Data = require('../models/data');

// Route to get the latest data entry
router.get('/', async (req, res) => {
    try {
        console.log("Fetching latest data entry...");
        const latestData = await Data.findOne().sort({ _id: -1 });
        console.log("Result:", latestData);

        if (!latestData) {
            return res.status(404).json({ message: "No data found." });
        }

        res.json(latestData);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ message: 'Failed to retrieve data', error: err });
    }
});

module.exports = router;
