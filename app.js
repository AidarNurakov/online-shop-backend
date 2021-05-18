const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const {
  router
} = require('./routes/api.js');

app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('files'))
app.use(cors());

const PORT = process.env.PORT || 5050;

const dbUrl = 'mongodb+srv://homelander:Drmirmid7184@cluster0.wz4cl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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