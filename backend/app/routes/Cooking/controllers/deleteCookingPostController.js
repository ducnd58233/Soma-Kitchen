const CookingPost = require('../../../../models/CookingPost');

module.exports = (req, res) => {
    CookingPost.deleteOne({ _id: ObjectId(req.params.id) }, (err, docs) => {
        if (err !== null) {
            console.log(`Error in delete 1 cooking: ${err}`);
        } else {
            res.send(docs);
        }
    })
        // .populate('postedBy')
}