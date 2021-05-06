const {
  createProduct
} = require('../services/product')

exports.createProduct = async function (req, res) {

  console.log(req.body);

  // if () {
  //   res.status(200).json('created product');

  //   // нужных данных нет, кидаем 400
  // }

  // const result = await createProduct()
  //console.log(req.files); 
  res.status(200).json(result)
}