const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: {type : String},
        description: {type : String},
        likes: {type : Number},
        userName: {type : String}
    },
    {timestamps:true}
);

module.exports = mongoose.model('Blog',blogSchema)