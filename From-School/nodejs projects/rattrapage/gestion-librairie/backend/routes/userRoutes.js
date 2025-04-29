const express = require('express');
const router = express.Router();

// Example: a GET endpoint for users
router.get('/', (req, res) => {
    res.send('User route is working!');
});

module.exports = router;