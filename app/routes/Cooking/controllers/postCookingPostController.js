let sharp = require('sharp')
let jwt = require('jsonwebtoken')
const CookingPost = require('../../../../models/CookingPost');


module.exports = (req, res) => {
    CookingPost.create({
        ...req.body,

    })
        // .populate('postedBy')
        .then(doc => res.send(doc))
        .catch(err => res.send(err))
            
       
}