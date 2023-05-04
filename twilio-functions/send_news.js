const webscraping = require('../webscraping-news/webscraping'); // importar a funcao
const client = require('../twilio'); // importar o client
const getUsersNumbers = require('../mysql/users_numbers'); // importar a funcao

// Funcao para enviar as noticias
function sendNews(){
    getUsersNumbers()
    .then((result) => {
        result.forEach((element) => {
            webscraping().then((noticias) => {
                for (var i = 0; i < noticias.length; i++) {
                    if (noticias[i]['hora'].includes("minutos")) {
                        client.messages.create({
                          from: 'whatsapp:+14155238886',
                          to: 'whatsapp:' + element['number'],
                          body: '📰 Ultimas Noticias' + '\n\n' + "*Titulo:*" + "\n\n" + noticias[i]['titulo'].trim() + '\n\n' + '*Publicado:* ' + ' ' + noticias[i]['hora'] + '\n\n' + '*Fonte:*' + '\n' + noticias[i]['link']
                        })
                        .then(message => console.log(message.sid))
                        .catch(error => console.log('Erro ao enviar mensagem:' + error.stack))
                    }
                }
            })
            .catch((error) => console.log('Erro ao obter resultados da função webscraping: ' + error.stack));
        });
    })
    .catch((error) => console.log('Erro ao obter resultados da função getUsersNumbers: ' + error.stack));
}

module.exports = sendNews; // exportar a funcao
