const jwt = require('jsonwebtoken');
module.exports = (request, response, next) => {
    const token = request.header('auth-token');

    if (!token) return response.status(401).send({ message: 'Access Denied' });

    try {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                response.status(401).send({ message: 'Access Denied' });
            } else {
                request.userID = decoded._id;
                request.isLoggedIn = true;
                next();
            }
        });
    } catch (err) {
        return response.status(400).send({ message: 'Invalid Token' });
    }
    //Get auth header value
    // const bearerHeader = req.headers['authorization'];
    // // Check if bearer is undefined
    // if(typeof bearerHeader !== 'undefined'){
    //     // Split at the space
    //     const bearer = bearerHeader.split(' ');
    //     // Get token from array
    //     const bearerToken = bearer[1]
    //     // Set the token
    //     req.token = bearerToken
    //     // Next middleware
    //     next();
    // } else {
    //     //forbidden
    //     res.json({'result': 'not allowed'})
    // }
}