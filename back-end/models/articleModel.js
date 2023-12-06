const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    Title: {
        type: String,
        require: [true, 'A article must have a title']
    },
    Category: {
        type: Array,
        require: [true, 'A article must have a catagory']
    },
    Detail: {
        type: String
    },
    ID_author: {
        type: String,
        require: [true, 'A article must have a author']
    },
    posted_time: {
        type: Date,
        default: Date.now()
    },
    rating: {
        type: Number,
        default: 0
    },
    view: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    isPriority: {
        type: Boolean,
        default: false
    },
    Image: {
        type: String
    },
    comments: {
        type: Array
    }
})
// The same create table in sql server and table have name which is lowercase."article" 
const Article = mongoose.model('Articles', articleSchema);

module.exports = Article;