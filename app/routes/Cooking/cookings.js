const CookingPost = require('../../../models/CookingPost');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const verifyToken = require('../../../middlewares/verifyToken');

/* ---------------------------------------------------- 
                START: Storage
---------------------------------------------------- */
let storage = multer.diskStorage({
    destination: "./public/img/uploads/cookings",
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
});


let upload = multer({
    storage: storage
});
/* ---------------------------------------------------- 
                END: Storage
---------------------------------------------------- */

/* ---------------------------------------------------- 
                START: Declare Controllers
---------------------------------------------------- */
let getAllCookingPostsController = require('./controllers/getAllCookingPostsController');

let getCookingPostController = require('./controllers/getCookingPostController');

let postCookingPostController = require('./controllers/postCookingPostController');

let updateCookingPostController = require('./controllers/updateCookingPostController');

let deleteCookingPostController = require('./controllers/deleteCookingPostController');
/* ---------------------------------------------------- 
                END: Declare Controllers
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Router
---------------------------------------------------- */

router.get('/', getAllCookingPostsController);

router.get('/:_id', getCookingPostController);

router.post('/', verifyToken, upload.single('video'), postCookingPostController);

router.put('/:_id', verifyToken, upload.single('video'), updateCookingPostController);

router.delete('/:_id', verifyToken, deleteCookingPostController);
/* ----------------------------------------------------
                END: Router
---------------------------------------------------- */

module.exports = router;