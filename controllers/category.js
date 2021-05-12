const { Category } = require('../models/category');

exports.getCategories = async function(req,res) {
  try {
  const categories = await Category.find();
  res.status(200).json({message: "Получены все категории", data: categories});
  } catch (e) {
    
  }
}

exports.createCategory = async function(req,res) {
  try {
    const result = req.body;
    // console.log(result)

    if(!result.icon||!result.title) {
      res.status(400).json({message: "некорректные параметры"})
      return;
    }
    const createdCategory = await Category.create(result);
    res.status(201).json({message: "Создана категория успешно!", data: createdCategory});
    
    
  } catch (e) {
    res.status(500).json('There is trouble with category' + e.message);
  }
}