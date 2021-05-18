const bcrypt = require('bcrypt');
const User = require('../../../models/User');


module.exports = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username  }, (err, user) => {
        if(user){
            bcrypt.compare(password, user.password, (err, same) => {
                if(same){
                    req.session.userId = user._id;
                    res.send("Login successful!");
                    // res.redirect('/');
                } else {
                    res.send(`Login unsuccessful! ${err}`);
                    // res.redirect('/login');
                }
                console.log(err);
            })   
        } else {
            res.redirect('/auth/login');
        }     
    })
}