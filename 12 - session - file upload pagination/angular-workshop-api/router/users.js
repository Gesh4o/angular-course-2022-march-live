const express = require('express');
const router = express.Router();
const formidableMiddleware = require('express-formidable');
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.get('/profile', auth(), authController.getProfileInfo);
router.put('/profile', auth(), formidableMiddleware(), authController.editProfileInfo);

module.exports = router