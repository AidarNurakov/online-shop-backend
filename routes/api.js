const express = require('express');
const {
  upload,
  iconLoad  
} = require('./multer.js');

const {
  // createCategoryTest,
  createCategory,
  getCategories,
  getCategoriesWithProducts,
  editCategory,
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

//Получить одну категорию по id с ее продуктами
router.get('/category/:categoryId', getCategoryById);

//создать категорию
router.post('/category', upload.single('file'),createCategory);

//Изменение категории
router.patch('/category/:id', upload.single('file'), editCategory);

//получить все продукты с их категориями
router.get('/category', getCategoriesWithProducts);


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

exports.router = router;

