const RecipePost = require('../../../models/RecipePost');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const verifyToken = require('../../../middlewares/verifyToken');

/* ---------------------------------------------------- 
                START: Storage
---------------------------------------------------- */
let storage = multer.diskStorage({
    destination: "./uploads/recipes",
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 16
    },
    fileFilter: fileFilter
});
/* ---------------------------------------------------- 
                END: Storage
---------------------------------------------------- */

/* ---------------------------------------------------- 
                START: Declare Controllers
---------------------------------------------------- */
let getAllRecipePostsController = require('./controllers/getAllRecipePostsController');

let getRecipePostController = require('./controllers/getRecipePostController');

let postRecipePostController = require('./controllers/postRecipePostController');

let updateRecipePostController = require('./controllers/updateRecipePostController');

let deleteRecipePostController = require('./controllers/deleteRecipePostController');

let searchRecipePostController = require('./controllers/searchRecipePostController');
/* ---------------------------------------------------- 
                END: Declare Controllers
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Router
---------------------------------------------------- */

router.get('/', getAllRecipePostsController);

router.get('/:_id', getRecipePostController);

// router.post('/', verifyToken, upload.single('image'), postRecipePostController);
router.post('/', upload.single('image'), postRecipePostController);

router.put('/:_id', upload.single('image'), updateRecipePostController);

router.delete('/:_id', deleteRecipePostController)

router.get('/search', searchRecipePostController)
/* ----------------------------------------------------
                END: Router
---------------------------------------------------- */

module.exports = router;