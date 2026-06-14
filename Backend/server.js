// Import packages
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

// Create server
const app = express();
const PORT = 3000;

// Allow frontend to connect
app.use(cors());

// Allow server to read JSON data
app.use(express.json());

// Connect contact routes
app.use('/api/contact', contactRoutes);

// Health check - just to test server is working
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is running!'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log('Server started on http://localhost:3000');
}); 