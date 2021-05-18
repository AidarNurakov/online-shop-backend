const { Category } = require('../models/category');
const { Product } = require('../models/product');

exports.createCategory = async function(category) {
  try{
    console.log('Перед получением категории');
  }catch(e) {

  }
}

exports.getCategories = async function() {
  try {
    const categories = await Category.find();
    return categories;
    } catch (e) {

    }
}

exports.getCategoryById = async function(id) {
  try{
    const singleCategory = await Category.findById(id);
    return singleCategory;
  }catch(err) {
    console.log(err.message);
  }
}

exports.deleteCategoryById = async function(categoryId) {
  try{
    const removedCategory = await Product.findByIdAndDelete(categoryId);
    return removedCategory;

  }catch(err) {
    console.log('Error from deleting category')
  }
} 