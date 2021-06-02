const { createAboutUsContent } = require('../services/aboutUs');

exports.createAboutUsContent = async function(req,res) {
  try{
    const aboutUsData = {
      ...req.body,
    };
    console.log('Путь файла:', req.file.path);
    console.log(req.file);

    if(req.file) {
      aboutUsData.path = req.file.path;
    }
    console.log('Путь файла:', req.file.path);

    const result = await createAboutUsContent(aboutUsData);
    res.status(201).json(result);
  } catch(err) {
    res.status(500).json({

      message: "Ошибка сервера!" + err.message
    })
  }
}