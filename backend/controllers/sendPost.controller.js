const sendPost = require('../models/sendPost.models');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/sendPostimg'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});
const uploadSendPost = multer({ storage: storage });

const createSendPost = async (req, res) => {
    const {title ,username ,explanation} = req.body;
    console.log("🚀 ~ createSendPost ~ req.body:", req.body,req.file)
    const img = req.file ? req.file.filename : null;
    // const userimg = req.file ? req.file.filename : null;
    // console.log("🚀 ~ createCategory ~ userimg:", userimg)
    console.log("🚀 ~ createSendPost ~ img:", img)
    try {
        const sendPosts = await sendPost.create({...req.body,img});
        res.status(200).json({ message: sendPosts });
    } catch (error) {
        console.error(`Error in createSendPost: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};
const getSendPost = async (req, res) => {
    try {
        const sendPosts = await sendPost.find({});
        res.status(200).json(sendPosts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteSendPost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "sendPost ID is required." });
        }
        const sendPosts = await sendPost.findByIdAndDelete(id);
        if (!sendPosts) {
            return res.status(404).json({ message: "sendPost not deleted" })
        }
        res.status(200).json({ message: "sendPost deleted Successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createSendPost,
    uploadSendPost,
    getSendPost,
    deleteSendPost
}