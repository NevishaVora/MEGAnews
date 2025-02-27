const PostSave = require('../models/savePost.models');

// Save a Post
exports.savePost = async (req, res) => {
    try {
        const { userId} = req.params; // Get userId from params
        const { postId } = req.body;

        // if (!postId) {
        //     return res.status(400).json({ message: "Post ID is required" });
        // }

        // Check if post is already saved
        const existingSave = await PostSave.findOne({ userId, postId });

        if (existingSave) {
            // If post is already saved, remove it (Unsave)
            await PostSave.deleteOne({ _id: existingSave._id });
            return res.status(200).json({ message: "Post unsaved successfully" ,postId});
        }

        // If post is not saved, save it
        const newSave = new PostSave({
            userId,
            postId
        });

        await newSave.save();
        res.status(201).json({ message: "Post saved successfully", savedPost: newSave });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Get all saved posts for a user
exports.getSavedPosts = async (req, res) => {
    try {
        const { userId } = req.params;

        const savedPosts = await PostSave.find({ userId }).populate('postId');

        res.status(200).json({ savedPosts });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching saved posts', error });
    }
};
