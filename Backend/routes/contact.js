const express = require('express');
const router = express.Router();
let messages = [];
let idCounter = 1;
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        count: messages.length,
        data: messages
    });
});

router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Validation - check if fields are empty
    if (!name || !email || !message) {
        return res.status(400).json({
            status: 'error',
            message: 'All fields are required'
        });
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
        return res.status(400).json({
            status: 'error',
            message: 'Please enter a valid email'
        });
    }
    const newMessage = {
        id: idCounter++,
        name: name,
        email: email,
        message: message,
        receivedAt: new Date().toISOString()
    };

    messages.push(newMessage);
    res.status(201).json({
        status: 'success',
        message: 'Message received successfully!',
        data: newMessage
    });
});

module.exports = router;