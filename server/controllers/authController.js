const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const { auth } = require('../middlewares/auth');

//Regiser an user
router.post('/register', (req, res, next) => {


    const { email, password, passwordRepeat } = req.body;

    //Checking the password if matching or not
    if (password !== passwordRepeat) {
        return next({

            status: 422,
            message: "Password missmatch",
            type: "error"
        })
    }

    //Checking if there is an user, if yes an error will displayed and if not an user will be created
    User.findOne({ email })
        .then(user => {
            if (user) {
                console.log(user)
                return next({

                    status: 409,
                    message: "The user already exists!",
                    type: "error"
                })
            } else {
                let user = new User({ email, password });
                user.save()
                    .then(result => {
                        return next({

                            status: 201,
                            message: "User Created",
                            type: "success"
                        })
                    })
            }
        })
        .catch(next)
});


//Login
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            console.log(user)
            if (!user) {
                return next({
                    status: 401,
                    message: "Incorrect credentials",
                    type: "error"
                });
            } else {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        return next();
                    } else {
                        if (result) {
                            const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, { expiresIn: '1h' })


                            res.status(200).json({
                                message: 'Logged in',
                                token: `Bearer ${token}`
                            })
                        } else {
                            return next({
                                status: 401,
                                message: "Incorrect credentials",
                                type: "error"
                            });
                        }
                    }
                })
            }
        })
        .catch(next)
})


//Delete an user
router.delete('/remove/:userId', (req, res, next) => {
    User.findOneAndRemove({ _id: req.params.userId })
        .exec()
        .then(deleted => {
            return next({
                stutus: 200,
                message: 'User deleted',
                type: 'success'
            })
        })
        .catch(err => {
            return next({
                stutus: 409,
                message: 'There is nothing to delete!',
                type: 'error'
            })
        })
})



module.exports = router;