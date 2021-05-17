const express = require('express');
const {
  upload
} = require('./multer');
const {
  parseFormData
} = require('../middlewares/formdata')

const {
  createCategory,
  getCategories
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
router.post('/category', createCategory); //добавить категорию
router.get('/categories', getCategories) //получить все категории

//получить все продукты
router.get('/products', getAllProducts);

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