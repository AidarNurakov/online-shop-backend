const express = require('express');
const router = express.Router();

router.get('/all-products', function (req, res) {
  res.status(200).json('all products are working');
});

router.get('/products/:category-id', function (req, res) {
  res.status(200).json('this category products are here');

});
router.post('/product', function (req, res) {
  res.status(200).json('end point for creating product');

});
router.get('/categories', function (req, res) {
  res.status(200).json('get all categories');

});

router.get('/product/:id', function (req, res) {
  res.status(200).json('get single product');
});

exports.router = router;