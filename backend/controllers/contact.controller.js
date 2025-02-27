const contact = require('../models/contact.models');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/contactimg/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

function sendMail(to, sub, msg) {
    transporter.sendMail({
        to: to,
        subject: sub,
        html: msg,
    }, (error, info) => {
        if (error) {
            console.error("Email sending error:", error);
        } else {
            console.log("Email sent successfully:", info.response);
        }
    });
}

const uploadContact = multer({ storage: storage });

const createContact = async (req, res) => {
    const { subject, name, email, explanation } = req.body;
    const img = req.file ? req.file.filename : null;

    try {
        const contacts = await contact.create({ ...req.body, img });

        // Send email to user with explanation message
        sendMail(email, "Contact Successfully Submitted", `<p>Hello ${name},</p><p>${explanation}</p>`);

        res.status(200).json({ message: contacts });
    } catch (error) {
        console.error(`Error in createContact: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await contact.find({});
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createContact,
    uploadContact,
    getContacts 
};
