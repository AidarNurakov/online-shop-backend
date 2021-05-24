const { Category } = require('../models/category');
const { Product } = require('../models/product');


exports.createCategory = async function (category) {

  try {
    console.log('Перед поиском категории', category)

    const categoryExists = await Category.findOne({
      title: category.title,
      icon: category.icon
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
    console.log('ERROR FROM Category', e.message)
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

exports.updateCategoryById = async function(id, data){
  try{

    console.log("данные до апдейта", data);
    const updatedCategory = await Category.findByIdAndUpdate(id, data);
    console.log("Апдейтед категория из сервиса",updatedCategory);
    return updatedCategory;

  }catch(err){
    console.log(err.message);
    throw new Error("Ошибка при изменении категории!" + err.message);
  }
}

