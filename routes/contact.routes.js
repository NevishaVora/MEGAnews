const express = require('express');
const { createContact , uploadContact, getContacts} = require('../controllers/contact.controller');
const router = express.Router();

router.post('/add',uploadContact.single('img'), createContact);
router.get('/get', getContacts);
module.exports = router;