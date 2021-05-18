const express = require('express');
const User = require('../../../../models/User');

module.exports = (req, res) => {
    User.find({}).exec((err, users) => {
        res.send(users);
    })
}