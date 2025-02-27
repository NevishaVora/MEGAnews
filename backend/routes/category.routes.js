
const express = require('express');
const { createCategory, uploadcategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/category.controllers');
const router = express.Router();

router.post('/add',uploadcategory.single('img'), createCategory);
router.get('/get', getCategories);
router.get('/get-one/:id', getCategory);
router.put('/update/:id',uploadcategory.single('img'), updateCategory);
router.delete('/delete/:id', deleteCategory);


module.exports = router;