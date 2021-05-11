const express = require('express');
const {parseFormData} = require('../middlewares/formdata')

const {createCategory,getCategories} = require('../controllers/category');

const {getProductsByCategory,createProduct,getAllProducts, getProductById} = require('../controllers/product')

const router = express.Router();


// энд пойнты для категорий
router.post('/category', createCategory); //добавить категорию
router.get('/categories', getCategories)//получить все категории

//получить все продукты
router.get('/products', getAllProducts);

//получить продукты определенной категории
router.get('/products/:categoryId', getProductsByCategory); 

//создание продукта
router.post('/product', parseFormData, createProduct);

//получение продукта по id
router.get('/products/:productId', getProductById );





exports.router = router;