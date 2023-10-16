const { createNewUser, getAllBrand } = require('../controllers/userController');

const router = require('express').Router();

router.post('/create-new-user', createNewUser);  


module.exports = router;