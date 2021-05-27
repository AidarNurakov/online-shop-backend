const axios = require("axios").default;
const nodemailer = require("nodemailer");


const chat_id = "-1001405882451";

const BOT_TOKEN = "1871782386:AAEUfvZgOhil0-TzUaa1g3v8gMexv96r1Ys";
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?`;

async function sendTOtelegram(text) {
  try {
    axios.post(API_URL, {
      chat_id: chat_id,
      text: text,
      parse_mode: "Markdown",
    });
  } catch (e) {
    console.log("Error from sending to telegram", e.message);
  }
}

const sample = {
  productId: "123",
  phone: "3125553535",
  count: 5,
  userName: "Han",
  price: 500,
  orderNumber: 1,
  name: "Nitro 5",
};

function createOrderText(order) {
  return `
    Номер заказа: ${order.orderNumber}
    Номер клиента: ${order.phone}
    Имя Клиента: ${order.userName}
    Количество: ${order.count}
    Цена: ${order.price}
    Имя: ${order.name}
    `;
}

async function sendToEmail(orderText) {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "notesandpods@gmail.com",
              pass: "Ctujlyzgjytltkmybr", // naturally, replace both with your real credentials or an application-specific password
            },
          });
          
          const mailOptions = {
              from: 'notesandpods@gmail.com',
              to: 'districkwar@gmail.com',
              subject: 'Test',
              text: orderText
          };
          
          const response = await transport.sendMail(mailOptions);
    } catch (e) {
        console.log('Error from sending, email: ', e.message);
    }
}


exports.sendOrderInfo = async (order) => {
    try {
        const orderText = createOrderText(sample);
        await sendTOtelegram(orderText);
        await sendToEmail(orderText);
    } catch (e) {
        console.log('Error from sendOrder', e.message);
    }
};
