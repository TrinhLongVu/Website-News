const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserName: {
        type: String,
        require: [true, 'A User must have a UserName']
    },
    Password: {
        type: String,
        require: [true, 'A User must have a Password']
    },
    Role: {
        type: String,
        default: 'reader',
        require: [true, 'A User must have a role']
    },
    FullName: {
        type: String,
        default: 'No Name'
    },

    Birthday: {
        type: Date
    },
    Gender: {
        type: String
    },
    PhoneNumber: {
        type: String
    },
    Address: {
        type: String
    },
    ID_follow_writer: {
        type: Array
    },
    Saved_news: {
        type: Array
    },
    Image_Avatar: {
        type: String
    },
    Account_type: {
        type: String
    },
    ID_article: {
        type: Array
    },
    ID_user_follow: {
        type: Array
    }
})
// The same create table in sql server and table have name which is lowercase."article" 
const User = mongoose.model('Users', userSchema);

module.exports = User;