const express = require('express');
const router = express.Router();
const { current, login, register } = require('../controllers/users');
const { auth } = require('../middlewares/auth');

router.post('/login', login);

router.post('/register', register);

router.get('/current', auth, current);

module.exports = router;
