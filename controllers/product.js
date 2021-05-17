const path = require('path');
const fs = require('fs');
const {
  createProduct,
  getProducts,
  getProductById,
  deleteProductById,
  editProduct
} = require('../services/product')

const {
  saveFile
} = require('../helpers/file')



exports.getProductsByCategory = async function (req, res) {
  // console.log(req.params.categoryId);
  const products = await getProducts({
    category: req.params.categoryId
  })
  res.status(200).json({
    data: products
  });
}

exports.getProductById = async function (req, res) {
  const product = await getProductById(req.params.productId);

  if (product) {
    return res.status(200).json(product);

  }


  res.status(404).json({
    message: "product not found"
  })
}

exports.editProduct = async function (req, res) {
  try {
    const updateData = {
      ...req.body,
    }

    if (req.files) {
      updateData.file = req.files.picture;
    }

    const updatedProduct = await editProduct(req.params.productId, updateData);

    if (!updatedProduct) {
      return res.status(404).json({
        message: 'Попытка изменения несуществующей позиции!'
      })
    }
    res.status(201).json({
      message: "Продукт успешно изменен..."
    })

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }

}

exports.deleteOneProduct = async function (req, res) {
  const deletedProduct = await deleteProductById(req.params.productId);

  if (deletedProduct) {
    return res.status(200).json({
      message: 'Продукт успешно удален'
    });
  }

  res.status(404).json({
    message: "Product haven't deleted"
  });
}

exports.createProduct = async function (req, res) {
  try {
    const productData = {
      ...req.body,
    };

    if (req.file) {
      productData.path = req.file.path;
    }

    const result = await createProduct(productData);

    res.status(201).json(result)
  } catch (e) {
    res.status(500).json({
      message: 'Ошибка сервера: ' + e.message
    })
  }

  // if (!product.name || !product.price || !product.category) {

  //   return res.status(404).json('There is no response from database!');
  // }


}

exports.getAllProducts = async function (req, res) {

  const allProducts = await getProducts();
  res.status(200).json({
    message: "Получены все продукты",
    data: allProducts
  });
}