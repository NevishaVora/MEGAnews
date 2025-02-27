const post = require('../models/post.models');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});


const upload = multer({ storage: storage });

const createPost = async (req, res) => {
    const { cat_id, title, post_detail, comment, status } = req.body;

    if (!cat_id || !title || !post_detail || !status) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newPost = await post.create({
            cat_id,
            title,
            post_detail,
            comment: comment || [], // Ensure comments are added if provided
            status
        });

        res.status(201).json({ message: "Post created successfully", post: newPost });

    } catch (error) {
        console.error(`Error in createPost: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};


const getPosts = async (req, res) => {
    try {
        console.log("getPosts API called");
        const posts = await post.find({});
        console.log(" Posts", posts);
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error in getPosts:", error.message);
        res.status(500).json({ message: error.message });
    }
};

const getPost = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "post ID is required." });
        }
        const posts = await post.findById(id);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addCommentOrReply = async (req, res) => {
    try {
        const { post_id, comment_id, user_id, description } = req.body;
        console.log("🚀 ~ addCommentOrReply ~ req.body:", req.body);

        if (!post_id || !user_id || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the post by ID
        const posts = await post.findById(post_id);
        if (!posts) {
            return res.status(404).json({ message: "Post not found" });
        }

        // If comment_id exists, add a reply
        if (comment_id) {
            let found = false;
            let addedReply = null;

            const findAndAddReply = (commentsOrReplies) => {
                if (!Array.isArray(commentsOrReplies)) return false;

                for (let item of commentsOrReplies) {
                    if (item._id.toString() === comment_id.toString()) {
                        const newReply = {
                            _id: new mongoose.Types.ObjectId(),
                            user_id: new mongoose.Types.ObjectId(user_id),
                            description: description,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            replies: []
                        };

                        if (!Array.isArray(item.replies)) {
                            item.replies = [];
                        }

                        item.replies.push(newReply);
                        found = true;
                        addedReply = newReply;

                        return true;
                    }

                    if (Array.isArray(item.replies) && item.replies.length > 0) {
                        const foundReply = findAndAddReply(item.replies);
                        if (foundReply) return true;
                    }
                }
                return false;
            };

            const replyAdded = findAndAddReply(posts.comments);

            if (!replyAdded) {
                return res.status(404).json({ message: "Comment or reply not found" });
            }

            posts.markModified("comments");
            await posts.save();

            return res.status(200).json({
                message: "Reply added successfully",
                reply: addedReply
            });
        } 
        
        // If comment_id doesn't exist, add a new comment
        else {
            // Ensure comments array is initialized
            if (!posts.comments) {
                posts.comments = [];
            }

            const newComment = {
                user_id: new mongoose.Types.ObjectId(user_id),
                description: description,
                _id: new mongoose.Types.ObjectId(),
                replies: []
            };

            posts.comments.push(newComment);
            await posts.save();

            return res.status(200).json({ message: "Comment added successfully", comments: newComment });
        }

    } catch (error) {
        console.error(`Error in addCommentOrReply: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};




const getPostWithComments = async (req, res) => {
    try {
        const { postId } = req.params;
        console.log("postIdpostIdpostId",postId);
        
        const posts = await post.findById(postId).populate("comments.user_id", "name email");

        if (!posts) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({ posts });
    } catch (error) {
        console.error(`Error in getPostWithComments: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createPost,
    upload,
    getPosts,
    getPost,
    addCommentOrReply,
    getPostWithComments
    
};
