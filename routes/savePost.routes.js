const express = require('express');
const { savePost,  getSavedPosts } = require('../controllers/savePost.controller');

const router = express.Router();

router.post("/save/:userId", savePost);
router.get('/saved/:userId', getSavedPosts); // Get Saved Posts

module.exports = router;
