const express = require('express');
const {
  replaceUrl
} = require('../middlewares/file-url')
const {
  upload
} = require('./multer.js');

const {
  createCategory,
  getCategories,
  getCategoriesWithProducts,
  editCategory,
  getCategoryById,
  deleteCategory
} = require('../controllers/category');

const {
  getProductsByCategory,
  createProduct,
  getProductById,
  deleteOneProduct,
  editProduct,
} = require('../controllers/product');

const {
  createOrder
} = require("../controllers/order");

const {
  createAboutUsContent,
  editAboutUsContent,
  getAboutUsContent
} = require('../controllers/aboutUs');

const router = express.Router();

// энд пойнты для категорий

//получить все категории
router.get('/categories', getCategories);

//Получить одну категорию по id с ее продуктами
router.get('/category/:categoryId', getCategoryById);

//создать категорию
router.post('/category', upload.single('file'), replaceUrl, createCategory);

//Изменение категории
router.patch('/category/:id', upload.single('file'), editCategory);

//получить все продукты с их категориями
router.get('/category', getCategoriesWithProducts);

//Удалить категорию по айди
router.delete('/category/:categoryId', deleteCategory);


//энд пойнты для товаров --------------------------------------


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

//создание заказа
router.post('/create-order', createOrder);

//Создание контента для страницы "О нас" 
router.post('/create-aboutus-content', upload.single('file'), createAboutUsContent);

//Измененение контента страницы "О нас"
router.patch('/update-aboutus-content', upload.single('file'), editAboutUsContent);

//Получение контента страницы "О нас"
router.get('/get-aboutus-content', getAboutUsContent);

exports.router = router;