let express = require('express')
let app = express()
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let cors = require('cors');
const expressSession = require('express-session');
const dotenv = require('dotenv');



const PORT = process.env.PORT || 9000;



/* ---------------------------------------------------- 
            START: Connect to database
---------------------------------------------------- */

mongoose.connect('mongodb://localhost/soma_kitchen', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });

/* ---------------------------------------------------- 
            END: Connect to database
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Middleware
---------------------------------------------------- */
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(cors());
app.use(expressSession({
    secret: 'keyboard cat'
}))
app.use('/uploads/recipes/', express.static('uploads/recipes'))
app.use('/uploads/cookings/', express.static('uploads/cookings'))

/* ---------------------------------------------------- 
                END: Middleware
---------------------------------------------------- */




/* ---------------------------------------------------- 
                START: Routers
---------------------------------------------------- */

// Recipe
const recipeRouter = require('./app/routes/Recipe/recipes');

// Cooking Skills
const cookingRouter = require('./app/routes/Cooking/cookings');

// User
// const registerController = require('./app/routes/User/new/registerController');
const authRouter = require('./app/routes/User/auth');
const usersRouter = require('./app/routes/User/users');

/* ---------------------------------------------------- 
                END: Routers
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Request handler
---------------------------------------------------- */

// Recipes Post
app.use('/recipes', recipeRouter);

// Cooking Post
app.use('/cookings', cookingRouter);

// Users Request
// app.post('/auth/register', registerController);
app.use('/auth', authRouter);
app.use('/api', usersRouter);


/* ---------------------------------------------------- 
                END: Request handler
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Port listener
---------------------------------------------------- */

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

/* ----------------------------------------------------
                END: Port listener
---------------------------------------------------- */

module.exports = app;