const CookingPost = require('../../../../models/CookingPost');


module.exports = (req, res) => {
    CookingPost.findOne({ _id: ObjectId(req.params.id) }, function (err, doc) {
        if (doc) {
            res.send(doc)
        }
        else {
            res.send("Not found")
        }
    })
}