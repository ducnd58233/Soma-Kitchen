const CookingPost = require('../../../../models/CookingPost');


module.exports = (req, res) => {
    CookingPost.findOne({ _id: req.params._id}, function (err, doc) {
        if (doc) {
            res.send(doc)
        }
        else {
            res.send("Not found")
        }
    })
}