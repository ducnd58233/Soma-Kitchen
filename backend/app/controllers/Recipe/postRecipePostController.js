const RecipePost = require('../../../models/RecipePost');
const path = require('path');

module.exports = (req, res) => {
    // let image = req.files.image;
    // image.mv(path.resolve(__dirname, '../../../../', 'frontend/public/upload/images/', image.name),
    // (err) => {
    //     RecipePost.create({
    //         ...req.body,
    //         // image: '/upload/images/' + image.name
    //     }, (err) => {
    //         res.send(err);
    //     })
    //     // .populate('postedBy')
    // })
    RecipePost.create({
        ...req.body,
        // image: '/upload/images/' + image.name
    }, (err) => {
        res.send(err);
    })
}
