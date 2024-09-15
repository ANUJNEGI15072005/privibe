const express = require('express');
const { signup, login } = require('../controllers/AuthController'); 
const { loginvalidation, signupvalidation } = require('../middlewares/AuthValidation');

const router = express.Router();

router.post('/login', loginvalidation, login);
router.post('/signup', signupvalidation, signup);

module.exports = router;

