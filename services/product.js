const {
  Product
} = require('../models/product');

exports.createProduct = async function (product) {

  try {
    console.log('Перед поиском продукта', product)

    const productExists = await Product.findOne({
      price: product.price,
      name: product.name,
    });

    console.log('После  поиска продукта', productExists)

    if (productExists) {
      return {
        message: 'Данная позиция была добавлена ранее!',
        status: 'failed',
        data: {}
      }
    }

    const newProduct = await Product.create({
      name: product.name,
      price: product.price,
      category: product.category,
      picture: product.path,
    });

    return {
      message: 'Продукт успешно создан',
      status: 'success',
      data: newProduct
    }

  } catch (e) {
    console.log('ERROR FROM PRODUCT SERVICE', e.message)
    return {
      message: e.message,
      data: null,
      status: 'failed'
    }
  }
}

exports.getProducts = async function (options = {}) {
  try {
    const products = await Product.find(options)
    return products;
  } catch (e) {
    console.log(e.message);
  }
}

exports.getProductById = async function (id) {
  try {
    const singleProduct = await Product.findById(id);
    return singleProduct;
  } catch (e) {
    console.log(e.message);
  }
}

exports.deleteProductById = async function (productId) {
  try {

    const removedProduct = await Product.findByIdAndDelete(productId);
    return removedProduct;
  

  } catch (e) {
    // console.log('Error from deleting);

  }

}

exports.editProduct = async function (productId, data) {
  console.log(data);

  try {
    const updatedProduct = Product.findByIdAndUpdate(productId, data);

    return updatedProduct;
  } catch (e) {
    throw new Error('Ошибка при изменении товара: ' + e.message)
  }
}