const express = require('express');
const {registerUser} = require('../controllers/AuthController');
const router = express.Router();


router.route('/user/register').post(registerUser);


module.exports = router;