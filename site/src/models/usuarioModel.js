var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `
        SELECT idUser, username, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(username, email, senha) {
    var instrucao = `
        INSERT INTO usuario (username, email, senha) VALUES ('${username}', '${email}', '${senha}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};