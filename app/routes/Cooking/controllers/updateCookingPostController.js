let sharp = require('sharp')
let fs = require('fs')
let jwt = require('jsonwebtoken')
const CookingPost = require('../../../../models/CookingPost');


module.exports = (req, res) => {
    CookingPost.findByIdAndUpdate(
        { _id: req.params._id },
        {
            ...req.body,
            
        },
        { new: true })

        .then(doc => res.send(doc))
        .catch(err => res.send(err))
}
