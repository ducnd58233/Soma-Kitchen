let sharp = require('sharp')
let fs = require('fs')
let jwt = require('jsonwebtoken')
const RecipePost = require('../../../../models/RecipePost');

module.exports = (req, res) => {
    
            RecipePost.findOne({ _id: req.params._id }, (err, recipe) => {
                if (err) {
                    handleError(err);
                } else if (recipe.image) {
                    if (typeof recipe.image !== 'undefined' && recipe.image !== '') {
                        fs.unlinkSync('.' + recipe.image);
                    }
                }
            })

            RecipePost.deleteOne({ _id: req.params._id })
                // .populate('postedBy')
                .exec((err, docs) => {
                    if (err !== null) {
                        console.log(`Error in delete 1 recipe: ${err}`);
                    } else {
                        res.send(docs);
                    }
                })
     
}
