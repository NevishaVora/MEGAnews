const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    replies: [this],
}, { timestamps: true });

const commentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    replies: [replySchema]  // Nesting replies inside comments
}, { timestamps: true });

const postSchema = new mongoose.Schema({
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    title: {
        type: String,
        required: true,
    },
    post_detail: [
        {
            img: { type: String },
            subtitle: { type: String, required: true },
            description: { type: String, required: true },
        }
    ],
    comments: [commentSchema],  // Change from "comment" to "comments"
    status: {
        type: Number,
        required: true,
        enum: [0, 1],
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
