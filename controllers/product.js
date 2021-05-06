const {createProduct} = require('../services/product')

exports.createProduct = async function (req, res) {

  console.log(req.body);

  if (req.body) {
    res.status(200).json('created product');

    // нужных данных нет, кидаем 400
  } 
  res.status(404).json('There is no info');

  const result = await createProduct()
  console.log(req.files); 
  res.status(200).json(result)
}
