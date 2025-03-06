const footercontact = require('../models/footercontact.models');
const nodemailer = require('nodemailer');

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

const createfooterContact = async (req, res) => {
    const { email } = req.body;
    try {
        const footercontacts = await footercontact.create({ ...req.body });
        sendMail(email, "Contact Successfully Submitted");

        res.status(200).json({ message: footercontacts });
    } catch (error) {
        console.error(`Error in createContact: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    createfooterContact,
};
