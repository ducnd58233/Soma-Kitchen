let sharp = require('sharp')
let fs = require('fs')
let jwt = require('jsonwebtoken')
const CookingPost = require('../../../../models/CookingPost');


module.exports = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (!err) {
            if (req.file) {
                if (req.body._id) {
                    let path = "/" + req.file.path.split("\\").join("/");
                    console.log(path);
                    CookingPost.findByIdAndUpdate(
                        { _id: req.params._id },
                        {
                            ...req.body,
                            
                        },
                        { new: true })

                        .then(doc => res.send(doc))
                        .catch(err => res.send(err))
                } else {
                    CookingPost.findByIdAndUpdate(
                        { _id: req.params.id },
                        {
                    
                            notice: req.body.notice,
                        },
                        { new: true })
                        .then(doc => res.send(doc))
                        .catch(err => res.send(err))
                }
            }
        } else {
            res.send(err.message);
        }
    })
}
