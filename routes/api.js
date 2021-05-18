const express = require('express');
const {
  upload
} = require('./multer');

const {
  createCategory,
  getCategories,
  getCategoriesWithProducts,
  editCategory,
  deleteCategory,
  getCategoryById
} = require('../controllers/category');

const {
  getProductsByCategory,
  createProduct,
  getProductById,
  deleteOneProduct,
  editProduct,
} = require('../controllers/product');


const router = express.Router();

// энд пойнты для категорий

//получить все категории
router.get('/categories', getCategories);

//Получить одну категорию по id
router.get('/category/:categoryId', getCategoryById);

//создать категорию
router.post('/category', createCategory);

//Удаление категории по id
router.delete('/category/:categoryId', deleteCategory)

//Изменение категории
router.patch('/categories', editCategory);



//энд пойнты для товаров --------------------------------------

//получить все продукты с их категориями
router.get('/category', getCategoriesWithProducts);

//получить продукты определенной категории
router.get('/products/:categoryId', getProductsByCategory);

//создание продукта
router.post('/product', upload.single('file'), createProduct);

//получение продукта по id
router.get('/product/:productId', getProductById);

//удаление продукта по id
router.delete('/product/:productId', deleteOneProduct);

//изменение продукта
router.patch('/product/:productId', upload.single('file'), editProduct);

exports.router = router;