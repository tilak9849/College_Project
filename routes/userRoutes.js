const express = require('express');
const { loginController, registerController } = require('../controllers/userControllers');
const router = express.Router()

// routes

// login || POST
router.post('/login',loginController);

// Register || POST
router.post('/register',registerController);



module.exports = router;