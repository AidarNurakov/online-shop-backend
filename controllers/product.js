const {
  createProduct,
  getProducts, getProductById, deleteProductById
} = require('../services/product')


exports.getProductsByCategory = async function (req, res) {
  // console.log(req.params.categoryId);
  const products = await getProducts({
    category: req.params.categoryId
  })
  res.status(200).json({ data: products });
}

exports.getProductById = async function (req, res) {
  const product = await getProductById(req.params.productId);

  if(product) {
    return res.status(200).json(product);
    
  } 


  res.status(404).json({ message: "product not found" })
}

exports.deleteOneProduct = async function(req,res) {
  const deletedProduct = await deleteProductById(req.params.productId);

  if(deletedProduct) {
    return res.status(200).json({message: 'Продукт успешно удален'});
  }

  res.status(404).json({message: "Product haven't deleted"});
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

exports.getAllProducts = async function (req, res) {

  const allProducts = await getProducts();
  res.status(200).json({
    message: "Получены все продукты",
    data: allProducts
  });
}

