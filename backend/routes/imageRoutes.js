const express = require('express');
const router = express.Router();
const Image = require('../models/images'); // Import the image model

// Endpoint to upload images
router.post('/uploadImage', async (req, res) => {
    try {
        const newImage = new Image({
            data: req.body // Binary data sent from ESP32
        });

        await newImage.save();
        res.sendStatus(200); // Respond with success
    } catch (err) {
        console.error("Error saving image:", err);
        res.sendStatus(500); // Respond with an error status
    }
});

// Endpoint to get the latest image in Base64 format
router.get('/latestImage', async (req, res) => {
    try {
        const latestImage = await Image.findOne().sort({ _id: -1 }); // Get the most recent image
        if (!latestImage || !latestImage.buffer) {
            return res.status(404).send("No image found");
        }

        // Convert binary data to Base64 and send as JSON
        const base64Image = latestImage.buffer.toString('base64');
        res.json({ image: `data:image/jpeg;base64,${base64Image}` }); // Embed MIME type
    } catch (err) {
        console.error("Error retrieving image:", err);
        res.sendStatus(500); // Respond with an error status
    }
});


module.exports = router;
