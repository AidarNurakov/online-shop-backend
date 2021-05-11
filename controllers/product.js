const { createProduct, getProducts, getProductById } = require('../services/product')

exports.getProductsByCategory = async function(req, res) {
  // console.log(req.params.categoryId);
  const products = await getProducts({category: req.params.categoryId})
  res.status(200).json({data: products});
}

exports.createProduct = async function (req, res) {
  const product = req.body;
  // console.log(product);

  if (!product.name || !product.price || !product.category) {
    return res.status(404).json('There is no response from database!');
  }

  const result = await createProduct(product)
  
  res.status(200).json(result)
}

exports.getAllProducts = async function(req,res) {

  const allProducts = await getProducts();
  res.status(200).json({message:"Получены все продукты", data: allProducts});
}

exports.getProductById = async function(req,res) {
 
  const products = req.body;
  const allProducts = await getProducts();
  const result = await getProductById();
  res.status(200).json({message: "Получен продукт", data: products})

}