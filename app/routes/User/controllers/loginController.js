const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../../../../models/User');
const { registerValidator } = require('../validations/auth');
const verifyToken = require('../../../../middlewares/verifyToken');

// module.exports = async (request, response) => {
//     const user = await User.findOne({email: request.body.email});

//     if (!user) return response.status(422).send({message: 'Email or Password is not correct'});

//     const checkPassword = await bcrypt.compare(request.body.password, user.password);

//     if (!checkPassword) return response.status(422).send({message: 'Email or Password is not correct'});

//     const token = await jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });

//     return response.status(200).send({
//         token,
//         user: {
//             _id: user._id,
//             name: user.name,
//             email: user.email,
            
//         },
//         message: 'Login successfully'
//     });
// }

// module.exports = (req, res) => {
//     User.find({}, (err, doc) => {
//         res.send(doc)
//     })
// }
module.exports = (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if(user){
            if(req.body.password === user.password){
                res.json({
                    'result': 'authenticated',
                    // 'token': user.token
                })
            }else{
                res.json({'result': 'invalid password'})
            } 
        } else {
            res.json({'result': 'invalid email'})
        }
    })
}