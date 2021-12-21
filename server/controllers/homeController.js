const router = require('express').Router();
const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
    res.status(200).json({ "message": "It is working" });
});

router.post('/', auth.isAuth, (req, res) => {
    res.status(200).json({ "message": "It is working" });
});

module.exports = router;