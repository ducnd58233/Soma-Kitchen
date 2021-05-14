let sharp = require('sharp')
let fs = require('fs')
let jwt = require('jsonwebtoken')
const RecipePost = require('../../../../models/RecipePost');

module.exports = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (!err) {
            RecipePost.findOne({ _id: ObjectId(req.params.id) }, (err, recipe) => {
                if (err) {
                    handleError(err);
                } else if (recipe.image) {
                    if (typeof recipe.image !== 'undefined' && recipe.image !== '') {
                        fs.unlinkSync('.' + recipe.image);
                    }
                }
            })

            RecipePost.deleteOne({ _id: ObjectId(req.params.id) })
                // .populate('postedBy')
                .exec((err, docs) => {
                    if (err !== null) {
                        console.log(`Error in delete 1 recipe: ${err}`);
                    } else {
                        res.send(docs);
                    }
                })
        }
    })
}
