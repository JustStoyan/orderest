const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

})


userSchema.pre('save', async function (next,) {

    const rawPass = this.password;
    try {
        const strongPassword = await bcrypt.hash(rawPass, SALT_ROUNDS);
        this.password = strongPassword;
        next()
    } catch (err) {
        err = new Error('User already exists');
        next(err)
    }

})




module.exports = mongoose.model('User', userSchema);