const express = require('express');
const connectDB = require('./config/db');
const moistureRoutes = require('./routes/moistureRoutes');
const temperatureRoutes = require('./routes/temperatureRoutes');
const waterRoutes = require('./routes/waterRoutes');
const phRoutes = require('./routes/phRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use Routes
app.use('/api/moisture', moistureRoutes);
app.use('/api/temperature', temperatureRoutes);
app.use('/api/water', waterRoutes);
app.use('/api/ph', phRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
