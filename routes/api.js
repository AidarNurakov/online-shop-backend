const express = require('express');
const {
  upload
} = require('./multer');


const {
  createCategory,
  getCategories,
  getCategoriesWithProducts
} = require('../controllers/category');

const {
  getProductsByCategory,
  createProduct,
  getAllProducts,
  getProductById,
  deleteOneProduct,
  editProduct,
} = require('../controllers/product');


const router = express.Router();


// энд пойнты для категорий

//добавить категорию
router.post('/category', createCategory); 

//получить все категории
router.get('/categories', getCategories) 



//энд пойнты для товаров --------------------------------------

//получить все продукты
router.get('/category', getCategoriesWithProducts);

//получить продукты определенной категории
router.get('/products/:categoryId', getProductsByCategory);

//создание продукта
router.post('/product', upload.single('file'), createProduct);

//получение продукта по id
router.get('/product/:productId', getProductById);

//удаление продукта по id
router.delete('/product/:productId', deleteOneProduct);

router.patch('/product/:productId', upload.single('file'), editProduct);

exports.router = router;