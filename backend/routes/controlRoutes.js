const express = require('express');
const router = express.Router();
const Control = require('../models/control');

// Route to get the current state of control settings
router.get('/', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "No control data found." });
        }
        res.json(controlData);
    } catch (error) {
        console.error("Error fetching control data:", error);
        res.status(500).json({ message: 'Failed to retrieve control data', error });
    }
});

// Route to toggle pump_on
router.post('/togglePump', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "Control data not found." });
        }

        // Toggle pump_on
        controlData.pump_on = controlData.pump_on === "1" ? "0" : "1";
        await controlData.save();

        // Log to backend terminal
        console.log(`Pump toggled ${controlData.pump_on === "1" ? "ON" : "OFF"}`);

        res.json({ message: "Pump toggled successfully", pump_on: controlData.pump_on });

    } catch (err) {
        console.error("Error toggling pump:", err);
        res.status(500).json({ message: "Failed to toggle pump", error: err });
    }
});

// Route to toggle light state
router.post('/toggleLight', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "No control data found." });
        }

        // Toggle the light state
        controlData.light_on = controlData.light_on === "1" ? "0" : "1";
        await controlData.save();

        res.json({ message: "Light state toggled", light_on: controlData.light_on });
    } catch (error) {
        console.error("Error toggling light state:", error);
        res.status(500).json({ message: 'Failed to toggle light state', error });
    }
});

module.exports = router;
