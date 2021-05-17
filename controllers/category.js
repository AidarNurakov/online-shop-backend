const { getCategories } = require('../services/category.js');
const { getProducts } = require('../services/product.js');


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
      categories.map(async (category) => {
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