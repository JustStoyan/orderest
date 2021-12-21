const router = require('express').Router();
const authResource = require('../resource/authResource')

router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    authResource.register(username, password)
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'User created'
            })
        })
        .catch(next)
})



module.exports = router;