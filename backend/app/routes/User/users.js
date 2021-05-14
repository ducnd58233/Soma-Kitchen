const express = require('express');
const User = require('../../../models/User');
const router = express.Router();

router.get('/users', (req, res) => {
    User.find({}).exec((err, users) => {
        if(err) return res.send(err.message);
        res.send(users);
    })
})

module.exports = router;