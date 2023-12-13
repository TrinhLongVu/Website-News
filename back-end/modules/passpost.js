const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/userModel')

module.exports = passport => {
    passport.serializeUser((user, done) => {
        done(null, user.UserName)
    })

    passport.deserializeUser(async (user, done) => {
        const userLogin = await User.findOne({UserName: user});
        if (user) {
            return done(null, userLogin)
        }
        return done('invalid')
    })

    // username and password get from body
    passport.use(new LocalStrategy(async(username, Password, done) => {
        console.log("Username : ", username);
        console.log("Password : ", Password);
        try {
            const user = await User.findOne({ UserName: username.trim() });
            const rs = user.Password == Password
            if (rs) {
                return done(null, user);
            }
            return done(null, false, { message: 'Invalid username or password' });
        } catch (err) {
            return done(err)
        }
    }))
}