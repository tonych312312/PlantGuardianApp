const express = require('express');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const controlRoutes = require('./routes/controlRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use Data Routes
app.use('/api/data', dataRoutes);

// Use Control Routes
app.use('/api/control', controlRoutes); 

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

