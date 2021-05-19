let sharp = require('sharp')
let jwt = require('jsonwebtoken')
const CookingPost = require('../../../../models/CookingPost');


module.exports = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (!err) {
            if (req.file) {
                if (req.body._id) {
                    let path = "/" + req.file.path.split("\\").join("/");
                    console.log(path);
                    CookingPost.create({
                        ...req.body,
                        video: path.replace(req.file.filename, 'video-' + req.file.filename)
                    })
                        .populate('postedBy')
                        .then(doc => res.send(doc))
                        .catch(err => res.send(err))
                }
            }
        } else {
            res.send(err.message);
        }
    })
}