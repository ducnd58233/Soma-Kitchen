let sharp = require('sharp')
let fs = require('fs')
let jwt = require('jsonwebtoken')
const RecipePost = require('../../../../models/RecipePost');


module.exports = (req, res) => {
    // jwt.verify(req.token, 'secretkey', (err, authData) => {
    //     if (!err) {
    //         if (req.file) {
    //             if (req.body._id) {
    //                 let path = "/" + req.file.path.split("\\").join("/");
    //                 sharp(req.file.path).resize(256, 256).toFile('./uploads/recipes/' + '256x256-' + req.file.filename, (err) => {
    //                     if (err) {
    //                         console.log('Sharp Error: ', err)
    //                     }
    //                     console.log('Resize successfully');
    //                     fs.unlinkSync('.' + path)
    //                 });
    //                 console.log(path);
    //                 RecipePost.create({
    //                     ...req.body,
    //                     image: path.replace(req.file.filename, '256x256-' + req.file.filename)
    //                 })
    //                     .populate('postedBy')
    //                     .then(doc => res.send(doc))
    //                     .catch(err => res.send(err))
    //             }
    //         }
    //     } else {
    //         res.send(err.message);
    //     }
    // })
    
    let path = "/" + req.file.path.split("\\").join("/");
    sharp(req.file.path).resize(256, 256).toFile('./uploads/recipes/' + '256x256-' + req.file.filename, (err) => {
        if (err) {
            console.log('Sharp Error: ', err)
        }
        console.log('Resize successfully');
        fs.unlinkSync('.' + path)
    });
    console.log(path);
    RecipePost.create({
        ...req.body,
        image: path.replace(req.file.filename, '256x256-' + req.file.filename)
    })
        // .populate('postedBy')
        .then(doc => res.send(doc))
        .catch(err => res.send(err))
    
    
}