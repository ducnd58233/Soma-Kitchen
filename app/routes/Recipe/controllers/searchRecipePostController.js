const RecipePost = require('../../../../models/RecipePost')

module.exports = (req, res, next) => {
    const filters = req.query;
    const filteredUsers = RecipePost.filter(user => {
        let isValid = true;
        for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredUsers);
}