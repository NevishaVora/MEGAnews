const { default: mongoose } = require('mongoose');

const categorySchema = mongoose.Schema({
    
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


const category = mongoose.model('category', categorySchema);

module.exports = category;
