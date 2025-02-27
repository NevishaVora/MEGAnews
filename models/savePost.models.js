const { default: mongoose } = require('mongoose');

const savePostSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth',
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sendPost',
        required: true
    },
    savedAt: {
        type: Date,
        default: Date.now
    }
});


const savePost = mongoose.model('savePost', savePostSchema);

module.exports = savePost;
