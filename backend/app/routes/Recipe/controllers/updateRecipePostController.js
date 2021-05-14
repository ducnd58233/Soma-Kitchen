let sharp = require('sharp')
let fs = require('fs')
let jwt = require('jsonwebtoken')
const RecipePost = require('../../../../models/RecipePost');


module.exports = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (!err) {
            if (req.file) {
                if (req.body._id) {
                    let path = "/" + req.file.path.split("\\").join("/");
                    sharp(req.file.path).resize(256, 256).toFile('./uploads/recipes/' + '256x256-' + req.file.filename, (err) => {
                        if (err) {
                            console.log('Sharp Error: ', err)
                        }
                        console.log('Resize successfully');
                        fs.unlinkSync('.' + path)
                    });
                    console.log(path);
                    RecipePost.findByIdAndUpdate(
                        { _id: ObjectId(req.params.id) },
                        {
                            ...req.body,
                            image: path.replace(req.file.filename, '256x256-' + req.file.filename)
                        },
                        { new: true }
                    )
                        .then(doc => res.send(doc))
                        .catch(err => res.send(err))
                } else {
                    RecipePost.findByIdAndUpdate(
                        { _id: ObjectId(req.params.id) },
                        {
                            title: req.body.title,
                            body: req.body.body,
                            ingredients: req.body.ingredients,
                            guide: req.body.guide,
                        },
                        { new: true })
                        .then(doc => res.send(doc))
                        .catch(err => res.send(err))
                }
            }
        } else {
            res.send(err.message);
        }
    })
}
