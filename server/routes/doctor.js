const express = require('express');
const {addDoctor} = require("../controllers/Doctor/InfoController");
const router = express.Router();


router.route('/add/doctor').post(addDoctor);

module.exports = router;

