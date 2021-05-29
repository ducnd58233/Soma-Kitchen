const RecipePost = require('../../../../models/RecipePost');

module.exports = (req, res) => {
    RecipePost.findOne({ _id: req.params._id }, function (err, doc) {
        if (doc) {
            res.send(doc)
        }
        else {
            res.send("Not found")
        }
    })
}