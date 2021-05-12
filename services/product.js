const {
  Product
} = require('../models/product');

exports.createProduct = async function (product) {

  try {
    console.log('Перед поиском продукта')

    const productExists = await Product.findOne({
      price: product.price,
      name: product.name
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
      category: product.category
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
    const allProducts = await Product.find(options)
    return allProducts;
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
    console.log('Product _id in Delete service')

    const removedProduct = await Product.findByIdAndDelete({
      _id: productId
    });
    return removedProduct;

  } catch (e) {
    // console.log('Error from deleting);

  }

}