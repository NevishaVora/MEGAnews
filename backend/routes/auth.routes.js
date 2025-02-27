const {auth} = require('../models/auth.models');
const express = require('express');
const { loginUsers, createUser, getUserData } = require('../controllers/auth.controllers');
const {verifyToken} = require('../middleware/auth');
const router = express.Router();

router.post('/signUp',createUser)
router.post('/login',loginUsers);
router.get('/get-user',verifyToken ,getUserData);

module.exports = router;