const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../../../models/User');
const bodyParser = require('body-parser');
const verifyToken = require('../../../middlewares/verifyToken')

router.use(bodyParser.json())



/* ---------------------------------------------------- 
                START: Controller
---------------------------------------------------- */

const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');

/* ---------------------------------------------------- 
                END: Controller
---------------------------------------------------- */


/* ---------------------------------------------------- 
                START: Router
---------------------------------------------------- */
router.post('/register', registerController);
router.post('/login', loginController)


/* ---------------------------------------------------- 
                END: Router
---------------------------------------------------- */

module.exports = router;