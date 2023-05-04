const cheerio = require('cheerio'); // importar cheerio
const axios = require('axios'); // importar axios

// Funcao para fazer o scraping
async function webscraping() {
    return new Promise(async (resolve, reject) => {
        await axios.get('https://www.tecmundo.com.br/novidades')
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const noticias = [];
            $('.tec--list .tec--card').each(function () {
                const titulo = $(this).find('.tec--card__title__link').text();
                const hora = $(this).find('.tec--timestamp__item').find('.z--truncate').text();
                const link = $(this).find('.tec--card__title__link').attr('href');
                noticias.push({
                    titulo,
                    hora,
                    link
                });
            });
            resolve(noticias);
        })
        .catch(error => {console.log(error)});
    }); // retornar uma promise
}

module.exports = webscraping; // exportar a funcao