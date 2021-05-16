const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../../../models/User');
const { registerValidator } = require('../validations/auth');


// module.exports = async (request, response) => {
//     const { error } = registerValidator(request.body);

//     if (error) return response.status(422).send(error.details[0].message);

//     const checkEmailExist = await User.findOne({ email: request.body.email });

//     if (checkEmailExist) return response.status(422).send('Email is exist');

//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(request.body.password, salt);

//     const user = new User({
//         name: request.body.name,
//         email: request.body.email,
//         password: hashPassword,
//         token: process.env.TOKEN_SECRET
//     });

//     try {
//         const newUser = await user.save();
//         await response.send(newUser);
//     } catch (err) {
//         response.status(400).send(err);
//     }
// }

// module.exports = (request, response) => {

//     User.create({
//         ...request.body,
        
//     })
//         .then(doc => response.send(doc))
//         .catch(err => response.send(err.message))
// }

module.exports = (request, response) => {

    User.create({
        ...request.body,
        
    })
        .then(doc => response.send(doc))
        .catch(err => response.send(err.message))
}

// module.exports = (req, res) => {
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if(!err){
//             User.find({}, function(err, Users){
//                 if(err) handleError(err)
//                 User.findOne({username: req.body.username}, function(err, user){
//                 if (!user){
//                     var user = {
//                         email: req.body.email
//                     }
//                     // set token and store it
//                     jwt.sign({user}, 'secretkey', function(err, token){
//                     User.create({
//                         // email: req.body.email,
//                         // password: req.body.password,
//                         ...req,body,
//                         token: token
//                     }, function (err, User) {
//                         if (err) handleError(err)
//                         res.send(User)
//                     })
//                     })
//                 }else{
//                     res.send({"result":"email taken"})
//                 }
//                 })
//             })
//         }else{
//             res.send({"result": "not allowed"})
//         }
//     })
// }