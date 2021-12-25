const { SECRET_KEY } = require('../config');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    let token = req.headers.authorisation.split(' ')[1];


    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.userData = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({
            message: 'Auth failed',
            type: 'error'
        })
    }



}

const isAuth = (req, res, next) => {
    if (!res.userData) {
        return res.status(401).json({ "message": "You are not authorised to perform this action", "type": "error" });
    }

    next();
}

module.exports = {
    auth,
    isAuth
}