const { default: mongoose } = require('mongoose');

const authSchema = mongoose.Schema({
    // users: [{
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    token: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true,
    },
    // }]
}, {
    timestamps: true,
});

const auth = mongoose.model('auth', authSchema);

module.exports = { auth };
