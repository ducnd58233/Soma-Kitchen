const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    recipePosts: [{
        type: Schema.Types.ObjectId,
        ref: 'RecipePost'
    }],
    cookingPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'CookingPost'
    }]
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
