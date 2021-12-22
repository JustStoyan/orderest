const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');



const register = (username, password) => {

    let user = new User({ username, password });
    return user.save();
}


const login = async (username, password) => {

    let user = await User.findOne({ username });

    bcrypt.compare(password, user.password)
        .then(result => {
            if (result) {
                return jwt.sign({ username: user.username, id: user._id }, SECRET_KEY);
            } else {
                return 'Wrong credentials'
            }
        })
        .catch(err => {
            return err
        }
        )




}


module.exports = {
    register,
    login,
}