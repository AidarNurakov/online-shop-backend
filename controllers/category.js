const {
  getCategories,
  deleteCategoryById,
  getCategoryById
} = require('../services/category.js');
const {
  getProducts
} = require('../services/product.js');
const {
  getProductsByCategory
} = require('./product.js');


exports.getCategories = async function (req, res) {
  try {
    const categories = await getCategories();
    res.status(200).json({
      message: "Получены все категории",
      data: categories
    });
  } catch (e) {

  }
}

exports.createCategory = async function (req, res) {
  try {
    const result = req.body;
    // console.log(result)

    if (!result.icon || !result.title) {
      res.status(400).json({
        message: "некорректные параметры"
      })
      return;
    }
    const createdCategory = await Category.create(result);
    res.status(201).json({
      message: "Создана категория успешно!",
      data: createdCategory
    });


  } catch (e) {
    res.status(500).json('There is trouble with category' + e.message);
  }
}

exports.getCategoriesWithProducts = async function (req, res) {
  try {
    const categories = await getCategories();

    if (categories.length === 0) {
      return res.status(200).json({
        message: 'Нет товаров',
        data: categories
      })
    }
    const results = await Promise.all(
      categories.map(async function (category) {
        const categoryWithProducts = {};

        categoryWithProducts.category = category.title;
        categoryWithProducts.products = await getProducts({
          category: category._id
        });
        return categoryWithProducts;
      })
    )

    res.status(200).json({
      success: true,
      data: results
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}

exports.editCategory = async function (req, res) {
  try {
    const result = req.body;
    console.log(result);
  } catch (err) {

  }
}

exports.getCategoryById = async function (req, res) {
  try {
    const category = await getCategoryById(req.params.categoryId);

    if (category) {
      res.status(200).json({
        message: "Получена категория по указанной id",
        data: category
      })

    }
    res.status(404).json({
      message: "Product not found"
    });
  } catch (err) {

  }

}

exports.deleteCategory = async function (req, res) {
  try {
    const deletedCategory = await deleteCategoryById(req.params.categoryId);
    if (deletedCategory) {
      return res.status(200).json({
        message: "Категория успешна удалена"
      });
    }
    res.status(404).json({
      message: "Ошибка, категория не удалена!"
    })
  } catch (err) {
    console.log(err.message);
  }
}