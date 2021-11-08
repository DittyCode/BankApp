const express = require('express');
const {
	getLoginPage,
	registerUser,
} = require('./../controllers/authController');
const router = express.Router();

router.get('/login', getLoginPage);

router.post('/register', registerUser);

module.exports = router;
