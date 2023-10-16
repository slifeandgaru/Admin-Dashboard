const { createNewAccount, getAllAccount, loginUser } = require('../controllers/authController');
const { checkExistAccount, checkLoginAccount, checkAuth } = require('../middleware/auth');
const { checkAccountAndPassword } = require('../services/authService');

const router = require('express').Router();

router.post('/create-new-account', checkExistAccount, createNewAccount);  

router.get('/get-all-account', checkAuth, getAllAccount);

router.post('/login-shop', checkLoginAccount, loginUser); 
 
module.exports = router; 