const dotenv = require('dotenv').config(); // importar dotenv
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); // importar twilio
const cron = require('node-cron'); // importar cron
module.exports = client; // exportar o client

// enviar mensagens
const sendNews = require('./twilio-functions/send_news'); // importar a funcao
// executar a funcao as *8:50* todos os dias
cron.schedule('35 20 * * *', () => {sendNews();console.log('Enviando noticias...');}, {scheduled: true,timezone: "America/Sao_Paulo"});