const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const multer = require('multer');
const path = require('path');

const port = 9000;



/* ---------------------------------------------------- 
            START: Connect to database
---------------------------------------------------- */

mongoose.connect('mongodb://localhost/soma_kitchen', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

/* ---------------------------------------------------- 
            END: Connect to database
---------------------------------------------------- */

/* ---------------------------------------------------- 
            START: Set Image Storage
---------------------------------------------------- */
let storageImage = multer.diskStorage({
        destination: "../frontend/public/uploads/",
        filename: function(req, file, cb){
           cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
        }
});

const uploadImage = multer({
        storage: storageImage,
        limits:{fileSize: 1000000},
}).single("photo");


/* ---------------------------------------------------- 
            END: Set Image Storage
---------------------------------------------------- */



/* ---------------------------------------------------- 
                START: Middleware
---------------------------------------------------- */


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(fileUpload());
app.use(expressSession({
        secret: 'keyboard cat'
}))

/* ---------------------------------------------------- 
                END: Middleware
---------------------------------------------------- */



/* ---------------------------------------------------- 
        START: Declare folder of Custom Middleware
---------------------------------------------------- */
const authMiddleware = require('./middlewares/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middlewares/redirectIfAuthenticatedMiddleware');

/* ---------------------------------------------------- 
        END: Declare folder of Custom Middleware
---------------------------------------------------- */



/* ---------------------------------------------------- 
        START: Declare folder of controller
---------------------------------------------------- */
// Upload
const postImageController = require('./app/controllers/Recipe/Upload/postImagesController');


// Recipe
const getAllRecipePostsController = require('./app/controllers/Recipe/getAllRecipePostsController');
const getRecipePostController = require('./app/controllers/Recipe/getRecipePostController');
const postRecipePostController = require('./app/controllers/Recipe/postRecipePostController');
const updateRecipePostController = require('./app/controllers/Recipe/updateRecipePostController');
const deleteRecipePostController = require('./app/controllers/Recipe/deleteRecipePostController');

// Comment Recipe
const commentController = require('./app/controllers/Recipe/commentController');

// Cooking Skills
const getAllCookingPostsController = require('./app/controllers/Cooking/getAllCookingPostsController');
const getCookingPostController = require('./app/controllers/Cooking/getCookingPostController');
const postCookingPostController = require('./app/controllers/Cooking/postCookingPostController');
const updateCookingPostController = require('./app/controllers/Cooking/updateCookingPostController');
const deleteCookingPostController = require('./app/controllers/Cooking/deleteCookingPostController');

// User
const loginController = require('./app/controllers/User/loginController');
const loginPageController = require('./app/controllers/User/loginPageController');
const logoutController = require('./app/controllers/User/logoutController');
const registerController = require('./app/controllers/User/registerController');
const registerPageController = require('./app/controllers/User/registerPageController');

/* ---------------------------------------------------- 
        END: Declare folder of controller
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Request handler
---------------------------------------------------- */

// Recipes Post
app.get('/recipes', getAllRecipePostsController);
app.get('/recipes/:_id', getRecipePostController);
// app.post('/recipes', authMiddleware, postRecipePostController);
// app.put('/recipes/:_id', authMiddleware, updateRecipePostController);
app.post('/recipes', postRecipePostController);
app.put('/recipes/:_id', updateRecipePostController);
app.delete('/recipes/:_id', deleteRecipePostController);

// Image Recipes Post
app.post('/recipes/upload/photo', uploadImage, function(req, res, next) {
        if(!err){
                return res.send(200).end();
        }
        else {
                return res.send(err)
        }
        
});

// Comment Recipes Post
app.post('/comment', authMiddleware, commentController);


// Cooking Post
app.get('/cookings', getAllCookingPostsController);
app.get('/cookings/:_id', getCookingPostController);
// app.post('/cookings', authMiddleware, postCookingPostController);
// app.put('/cookings/:_id', authMiddleware, updateCookingPostController);
app.post('/cookings', postCookingPostController);
app.put('/cookings/:_id', updateCookingPostController);
app.delete('/cookings/:_id', deleteCookingPostController);

// Register Request
// app.get('/register', registerPageController)
app.post('/auth/register', registerController);

// Login Request
// app.get('/login', loginPageController);
app.post('/auth/login', loginController);

// Logout Request
app.get('/logout', logoutController);


/* ---------------------------------------------------- 
                END: Request handler
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Port listener
---------------------------------------------------- */

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

/* ---------------------------------------------------- 
                END: Port listener
---------------------------------------------------- */