const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


const {
  router
} = require('./routes/api.js');

app.use(cors());

app.use(express.json());
app.use('/api', router);
app.use(express.static('files'))

const PORT = process.env.PORT || 5050;

const dbUrl = '';

async function start() {
  try {

    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
      .then(() => console.log('Подключился к базе данных'));

    app.listen(PORT, () => {
      console.log(`Приложение запущено на ${PORT} порту`);
    });

  } catch (e) {
    console.log('Ошибка при запуске: ', e.message);
    process.exit(1);
  }
}

start();