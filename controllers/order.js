const {sendOrderInfo} = require('../services/order');

exports.createOrder = async function(req,res) {
    try{
        console.log(req.body);
        sendOrderInfo();
        
            res.status(201).json({
                message: 'Заказ успешно принят'
            })
    }catch(e){
        res.status(500).json({
            message: 'Ошибка обработки запроса'
        })
    };
}
