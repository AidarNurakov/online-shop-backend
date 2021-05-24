const {
  getCategories,
  deleteCategoryById,
  getCategoryById,
  createCategory,
  updateCategoryById
} = require('../services/category.js');
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
    const categoryData = {
      ...req.body,
    };

    if (req.file) {
      categoryData.path = req.file.path;
    }

    console.log('путь файла:', req.file.path);

    const result = await createCategory(categoryData);

    res.status(201).json(result)
  } catch (e) {
    res.status(500).json({
      message: 'Ошибка сервера: ' + e.message
    })
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
    console.log("реквест боди", req.body);
    // if(!result.title || !req.file) {
    //   res.status(400).json({
    //     message: "Не заполнены необходимые поля!"
    //   })
    if(req.file) {
      result.icon = req.file.path
    }
    const editingCategory = await getCategoryById(req.params.id);
    if(!editingCategory) {
      res.status(400).json({
        message: "Попытка изменения несуществующей категории!"
      })
    }
    console.log(req.params.id);
    console.log(result);

    const updatedCategory = await updateCategoryById(req.params.id,result);
    res.status(201).json({
      message: "Категория успешно обновлена...",
      data: updatedCategory
    })
  } catch (err) {
    res.status(500).json(err.message)
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

