const { SECRET_KEY, COOKIE_NAME } = require('../config');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    let token = req.cookies[COOKIE_NAME];

    if (token) {
        jwt.verify(token, SECRET_KEY, function (err, decoded) {
            if (err) {
                res.clearCookie(COOKIE_NAME);
            } else {
                req.user = decoded;
                res.locals.user = decoded;
                res.locals.isAuth = true;
            }
        })
    }

    next()
}

const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ "message": "You are not authorised to perform this action" });
    }

    next();
}

module.exports = {
    auth,
    isAuth
}