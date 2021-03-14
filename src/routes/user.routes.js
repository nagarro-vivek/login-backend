const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const userController = require('../controllers/user.controller');


router.post('/login', body('email').isEmail(),body('password').isLength({ min: 6, max: 20 }), userController.login);

module.exports = router;