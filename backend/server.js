const express = require('express');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const controlRoutes = require('./routes/controlRoutes'); 
const imageRoutes = require('./routes/imageRoutes'); 
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Enable CORS
app.use(cors({
  origin: '*' // Replace '*' accordingly
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Use Data Routes
app.use('/api/data', dataRoutes);

// Use Control Routes
app.use('/api/control', controlRoutes); 

// Use Image Routes
app.use('/api/images', imageRoutes);

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
