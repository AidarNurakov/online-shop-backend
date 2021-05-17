const { Category } = require('../models/category');

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