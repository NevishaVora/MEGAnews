const { default: mongoose } = require('mongoose');

const footercontactSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        default: 0,
    },
},
    {
        timestamps: true,
    }
);

const footercontact = mongoose.model('footercontact', footercontactSchema);

module.exports = footercontact;
