// Import packages
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRoutes);
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is running!'
    });
});
app.listen(PORT, () => {
    console.log('Server started on http://localhost:3000');
}); 