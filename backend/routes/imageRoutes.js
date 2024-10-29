const express = require('express');
const router = express.Router();
const Image = require('../models/image'); // Import the image model

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

// Endpoint to get the latest image
router.get('/latestImage', async (req, res) => {
    try {
        const latestImage = await Image.findOne().sort({ _id: -1 }); // Get the most recent image by _id
        if (!latestImage) {
            return res.status(404).send("No image found");
        }

        res.contentType('image/jpeg'); // Set response MIME type to JPEG
        res.send(latestImage.buffer); // Send the binary image data
    } catch (err) {
        console.error("Error retrieving image:", err);
        res.sendStatus(500); // Respond with an error status
    }
});

module.exports = router;
