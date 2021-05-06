const {Product} = require('../models/product');

exports.createProduct = async function (product) {
  try {

    const productExists = await Product.find({
      title: product.title,
      price: product.price
    });

    if (productExists) {
      return {
        message: 'Данная позиция была добавлена ранее!',
        status: 'failed',
        data: {}
      }
    }

    const product = await Product.create({title, price, picture});

    return {
      message: 'Продукт успешно создан',
      status: 'success',
      data: product
    }

  } catch (e) {
    console.log(e.message);
  }
}