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

/* // Route to toggle pump_on
router.post('/togglePump', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "Control data not found." });
        }

        // Toggle pump_on between 1 (on) and 2 (off)
        controlData.pump_on = controlData.pump_on === "1" ? "2" : "1";
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

        // Toggle the light state between 3 (on) and 4 (off)
        controlData.light_on = controlData.light_on === "3" ? "4" : "3";
        await controlData.save();

        // Log to backend terminal
        console.log(`Light toggled ${controlData.light_on === "3" ? "ON" : "OFF"}`);

        res.json({ message: "Light state toggled", light_on: controlData.light_on });
    } catch (error) {
        console.error("Error toggling light state:", error);
        res.status(500).json({ message: 'Failed to toggle light state', error });
    }
});

 */

// Route to handle pump_on logic, For Midterm Demo
router.post('/togglePump', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "Control data not found." });
        }

        // Set pump_on to 1 if it's not already 1, otherwise set it to 2
        controlData.pump_on = controlData.pump_on === "2" ? "1" : "2";
        await controlData.save();

        // Log to backend terminal
        console.log(`Pump status: ${controlData.pump_on === "2" ? "ON" : "OFF"}`);

        res.json({ message: "Pump state changed", pump_on: controlData.pump_on });

    } catch (err) {
        console.error("Error changing pump state:", err);
        res.status(500).json({ message: "Failed to change pump state", error: err });
    }
});

// Route to handle light logic
router.post('/toggleLight', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "No control data found." });
        }

        // Set pump_on to 3 if it's not already 3, otherwise set it to 4
        controlData.pump_on = controlData.pump_on === "3" ? "4" : "3";
        await controlData.save();

        // Log to backend terminal
        console.log(`Light status: ${controlData.pump_on === "3" ? "ON" : "OFF"}`);

        res.json({ message: "Light state changed", pump_on: controlData.pump_on });
    } catch (error) {
        console.error("Error changing light state:", error);
        res.status(500).json({ message: 'Failed to change light state', error });
    }
});

// Route to set camera_on to 1 when entering Camera page
router.post('/enterCamera', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "Control data not found." });
        }

        controlData.camera_on = "1";
        await controlData.save();

        console.log("Camera status: ON");
        res.json({ message: "Camera turned ON", camera_on: controlData.camera_on });
    } catch (err) {
        console.error("Error turning camera ON:", err);
        res.status(500).json({ message: "Failed to turn camera ON", error: err });
    }
});

// Route to set camera_on to 0 when exiting Camera page
router.post('/exitCamera', async (req, res) => {
    try {
        const controlData = await Control.findOne();
        if (!controlData) {
            return res.status(404).json({ message: "Control data not found." });
        }

        controlData.camera_on = "0";
        await controlData.save();

        console.log("Camera status: OFF");
        res.json({ message: "Camera turned OFF", camera_on: controlData.camera_on });
    } catch (err) {
        console.error("Error turning camera OFF:", err);
        res.status(500).json({ message: "Failed to turn camera OFF", error: err });
    }
});

module.exports = router;