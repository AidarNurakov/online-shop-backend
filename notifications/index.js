const express = require('express');
const app = express();

const PORT = 5050;

app.use(express.json());

const {sendOrderInfo} = require('./notifications');

app.post('/create-order', (req, res) => {

console.log(req.body);

sendOrderInfo();

    res.status(201).json({
        message: 'Заказ успешно принят'
    })
});

app.listen(PORT, () => {
    console.log('Сервер запущен!');
});