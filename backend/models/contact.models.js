const { default: mongoose } = require('mongoose');

const contactSchema = mongoose.Schema({
    subject: {
        type: String,
        required: true,
        default: 0,
    },
    name: {
        type: String,
        required: true,
        default: 0,
    },
    email: {
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
    }
},
    {
        timestamps: true,
    }
);

const contact = mongoose.model('contact', contactSchema);

module.exports = contact;
