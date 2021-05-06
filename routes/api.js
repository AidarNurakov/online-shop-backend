const express = require('express');
const {
  parseFormData
} = require('../middlewares/formdata')

const {
  createProduct
} = require('../controllers/product');
const router = express.Router();

router.get('/all-products', function (req, res) {
  res.status(200).json('all products are working');
});

router.get('/products/:categoryId', function (req, res) {
  res.status(200).json('this category products are here');

});

router.post('/product', parseFormData, createProduct);

router.post('/category', function (req, res) {
  console.log(req.body)
  res.status(200).json('get all categories');

});

router.get('/product/:id', function (req, res) {
  res.status(200).json('get single product');
});

exports.router = router;