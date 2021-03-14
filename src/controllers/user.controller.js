const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
// const Joi = require('@hapi/joi');
const { handleError, ErrorHandler } = require('../handler/error');


const login =  (req, res, next) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const { email, password } = req.body;
        if(email === 'mtnuser@gmail.com' && password === 'MTN281#^@*')
            res.send({ "status": 200, "Message": 'Login Successfully' });
        else 
            throw new ErrorHandler(401, "Username or Password didn't matched")

    }
    catch (error){
        next(error)
    }
 };

const userModule = {
    login
}

module.exports = userModule;