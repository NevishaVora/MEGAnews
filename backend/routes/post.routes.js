const express = require('express');
const router = express.Router();
const { createPost,upload, getPosts, getPost,getPostWithComments, addCommentOrReply } = require('../controllers/post.controllers');

router.post('/add',upload.single('img'), createPost);
router.get('/get', getPosts);
router.get('/get-one/:id', getPost);
router.post('/addCommentOrReply',addCommentOrReply);
router.get('/getPostWithComments/:postId', getPostWithComments);


module.exports = router;