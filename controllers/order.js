const {
    sendOrderInfo
} = require('../services/order');

exports.createOrder = async function (req, res) {
    try {
        if (!req.body) {
            res.status(500).json({
                message: "Ошибка, не заполнены поля!"
            });
        }
        sendOrderInfo(req.body);

        res.status(201).json({
            message: 'Заказ успешно принят'
        })
    } catch (e) {
        res.status(500).json({
            message: 'Ошибка обработки запроса'
        })
    };
}