// necessary modules from sequelize
const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

// columns in the comment table
Comment.init(
    {
        id: {},
        content: {},
        userID: {},
        postId: {}

    }
)
