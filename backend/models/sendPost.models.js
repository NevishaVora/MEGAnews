const { default: mongoose } = require('mongoose');

const sendPostSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            default: 0,
        },
        explanation: {
            type: String,
            required: false,
        },
        img: {
            type: String,
            required: false,
        },
    
},
    {
        timestamps: true,
    }

);


const sendPost = mongoose.model('sendPost', sendPostSchema);

module.exports = sendPost;
