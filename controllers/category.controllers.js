const category = require('../models/category.models');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/categoryimg'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});
// const storageuser = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/categoryuser'); 
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
//     }
// });
const uploadcategory = multer({ storage: storage });
// const uploadcategoryuser = multer({ storage: storageuser });


const createCategory = async (req, res) => {
    const {title ,username ,explanation} = req.body;
    console.log("🚀 ~ createCategory ~ req.body:", req.body,req.file)
    const img = req.file ? req.file.filename : null;
    // const userimg = req.file ? req.file.filename : null;
    // console.log("🚀 ~ createCategory ~ userimg:", userimg)
    console.log("🚀 ~ createCategory ~ img:", img)
    try {
        const categories = await category.create({...req.body,img});
        res.status(200).json({ message: categories });
    } catch (error) {
        console.error(`Error in createCategory: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};


const getCategories = async (req, res) => {
    try {
        const categories = await category.find({});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Category ID is required." });
        }
        const categories = await category.findById(id);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateCategory= async (req, res) => {
    try {
        const { title ,username ,explanation } = req.body;
        console.log("🚀 ~ updateCategory ~ req.body:", req.body,req.file)
        const img = req.file ? req.file.filename :null; 
        console.log("🚀 ~ updateCategory ~ req.file:", req.file)
        console.log("🚀 ~ updateCategory ~ img:", img)
        const { id } = req.params;
        const categoryData = await category.findById(id);
        if(!categoryData){
            return res.status(404).json({ message: "category data not found" });
        }
        if (!id) {
            return res.status(400).json({ message: "category ID is required." });
        }
        const updatedData = {
            title: title || categoryData.title,
            username: username || categoryData.username,
            explanation: explanation || categoryData.explanation,
            img: img || categoryData.img, 
        };
        const updatedCategory = await category.findByIdAndUpdate(id, updatedData , { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" })
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "category ID is required." });
        }
        const categories = await category.findByIdAndDelete(id);
        if (!categories) {
            return res.status(404).json({ message: "Category not deleted" })
        }
        res.status(200).json({ message: "Category deleted Successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    uploadcategory,
   
}