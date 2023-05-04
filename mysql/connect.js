const mysql2 = require('mysql2');
const dotenv = require('dotenv').config();

// Conexao com o banco de dados
try {
    const connection = mysql2.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DB,
        password: process.env.MYSQL_PASS
    })
    connection.connect((error) => {
        if (error) throw error;
        else console.log('Conectado ao Banco de dados!');
    });
    module.exports = connection; // exportar a conexao
}
catch (error) {console.log('Erro ao tentar criar conexão com banco de dados: ' + error.stack)}

