const connection = require('./connect'); // importar a conexao

// Funcao para obter os numeros dos usuarios
async function getUsersNumbers() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT number FROM users`, (error, result) => {
            if (error) throw error;
            else {
                resolve(result);
            }
        });
    });
}

module.exports = getUsersNumbers; // exportar a funcao
