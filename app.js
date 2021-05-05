const express = require('express');
const app = express();
const { router } = require('./routes/api.js');

app.use('/api', router);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log('Сервер запущен.., порт: ', PORT);
});