const express = require('express');
const { createfooterContact } = require('../controllers/footercontact.controllers');

const router = express.Router();

router.post('/add', createfooterContact);

module.exports = router;