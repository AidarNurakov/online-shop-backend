const {
  createAboutUsContent,
  updateContent,
  getAboutUsContent
} = require('../services/aboutUs');

const {
  AboutUs
} = require('../models/aboutUs');

exports.createAboutUsContent = async function (req, res) {
  try {
    const aboutUsData = {
      ...req.body,
    };
    console.log('Путь файла:', req.file.path);
    console.log(req.file);

    if (req.file) {
      aboutUsData.path = req.file.path;
    }
    console.log('Путь файла:', req.file.path);

    const result = await createAboutUsContent(aboutUsData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({

      message: "Ошибка сервера!" + err.message
    })
  }
}

exports.editAboutUsContent = async function(req, res) {
  try{
    const result = req.body;
    console.log("реквест боди:", req.body);  
    if(req.file) {
      result.picture = req.file.path
    }
    const editingContent = await AboutUs.findOne();
    if(!editingContent) {
      res.status(500).json({
        message: "Отсутствует контент для изменения"
      })
    }
  const updatedContent = await updateContent(req.body);
  res.status(201).json({
    message: "контент успешно изменен..",
    data: updatedContent
  })
  
}catch(e) {
  res.status(500).json(e.message);

  }
}

exports.getAboutUsContent = async function (req, res) {
  try{
    const result = await getAboutUsContent();
    res.status(200).json({
      message: "Получен контент страницы 'О нас'",
      data: result
    })
  }catch(e) {
    res.status(500).json({
      message: 'Ошибка воспроизведения данных'
    })
  }
} 