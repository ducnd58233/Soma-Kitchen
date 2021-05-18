const bcrypt = require('bcryptjs');
const User = require('../../../../models/User');
const jwt = require('jsonwebtoken');
const { registerValidator } = require('./validations/auth');

module.exports = async (req, res) => {
    const { error } = registerValidator(req.body);

    // if(error) return res.status(422).send(error.details[0].message);
    if(error) return res.send(error.details[0].message);

    const checkEmailExist = await User.findOne({ email: req.body.email });

    // if (checkEmailExist) return res.status(422).send('Email is exist');
    if (checkEmailExist) return res.send('Email is exist');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });

    try {
        const newUser = await user.save();
        await res.send(newUser);
    } catch (err) {
        res.send(err);
    }

    return res.send(registerValidator(req.body))
}