var database = require("../database/config")

function cadastrar(user, puzzle) {
    var instrucao = `
        INSERT INTO statistic (fkUser, fkPuzzle) VALUES ('${user}', '${puzzle}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};