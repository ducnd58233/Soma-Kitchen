const fs = require('fs');
const path = require('path')
const RecipePost = require('../../../../models/RecipePost');

module.exports = (req, res, next) => {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString('base64');

    const finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };

    // RecipePost.insertOne(finalImg, (err, result) => {
    //     console.log(result);
    //     if (err) return console.log(err);
    //     res.send(result);
    // })
    RecipePost.create({    
        image: finalImg
    }, (err) => {
        res.send(err);
    })
}