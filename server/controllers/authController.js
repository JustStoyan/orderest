const router = require('express').Router();
const authResource = require('../resource/authResource');
const User = require('../model/User');

//Regiser an user
router.post('/register', (req, res, next) => {


    const { username, password, repeatedPassword } = req.body;

    //Checking the password if matching or not
    if (password !== repeatedPassword) {
        return next({

            status: 422,
            message: "Password missmatch",
            type: "error"
        })
    }

    //Checking if there is an user, if yes an error will displayed and if not an user will be created
    User.findOne({ username })
        .then(user => {
            if (user) {
                return next({

                    status: 409,
                    message: "The user already exists!",
                    type: "error"
                })
            } else {
                authResource.register(username, password)
                    .then(result => {
                        console.log(result)
                        return next({

                            status: 201,
                            message: "User Created",
                            type: "success"
                        })
                    })
            }
        })




});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;

})

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