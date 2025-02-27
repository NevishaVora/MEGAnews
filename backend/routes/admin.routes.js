const { admin } = require("../models/admin.models.js");
const express = require('express');
const { createAdmin, loginAdmin } = require('../controllers/admin.controllers.js');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

router.post('/signUp', createAdmin)
router.post('/login', loginAdmin);

module.exports = router;