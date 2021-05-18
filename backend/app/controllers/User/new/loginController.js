const bcrypt = require('bcryptjs');
const User = require('../../../../models/User');
const jwt = require('jsonwebtoken');
const { registerValidator } = require('./validations/auth');
const { response } = require('express');


module.exports = async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(422).send('Email or Password is not correct');

    const checkPassword = await bcrypt.compare(req.body.password, user.password);

    if(!checkPassword) return res.status(422).send('Email or Password is not correct');

    // const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: 60*60*24 })
    // res.header('auth-token', token).send(token);

    return res.send(`User ${user.name} has logged in`);
}