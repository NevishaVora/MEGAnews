const express = require('express');
const { uploadSendPost, createSendPost, getSendPost, deleteSendPost } = require("../controllers/sendPost.controller");
const router = express.Router();

router.post('/add', uploadSendPost.single('img'), createSendPost);
router.get('/get', getSendPost);
router.delete('/delete/:id', deleteSendPost);


module.exports = router;