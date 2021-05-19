const { Category } = require('../models/category');
const { Product } = require('../models/product');

exports.createCategory = async function(category) {
  try{
    console.log('Перед получением категории');
  }catch(e) {

  }
}

exports.createCategoryTest = async function (category) {

  try {
    console.log('Перед поиском категории', category)

    const categoryExists = await Category.findOne({
      title: category.title,
      icon: product.icon
    });

    if (categoryExists) {
      return {
        message: 'Данная категория была добавлена ранее!',
        status: 'failed',
        data: {}
      }
    }

    const newCategory = await Category.create({
      title: category.title,
      icon: category.path
    });

    return {
      message: 'Категория успешно создана',
      status: 'success',
      data: newCategory
    }

  } catch (e) {
    console.log('ERROR FROM Catogory', e.message)
    return {
      message: e.message,
      data: null,
      status: 'failed'
    }
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