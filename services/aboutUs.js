const {
  AboutUs
} = require('../models/aboutUs');

exports.createAboutUsContent = async function (content) {
  try {
    const contentExists = await AboutUs.findOne();

    if (contentExists) {
      return {
        message: "Контент уже добавлен",
        data: contentExists
      }
    }


    const newContent = await AboutUs.create({
      text: content.text,
      phone: content.phone,
      picture: content.path,
      email: content.email,
      socialNetworks: content.socialNetworks,
      address: content.address,
      location: content.location
    });

    return {
      message: "Контент для страницы 'О нас' успешно создан.",
      status: "success",
      data: newContent

    }
  } catch (err) {
    console.log("Error from content creating service", err.message);
    return {
      message: err.message,
      status: failed,
      data: null
    }
  }
}