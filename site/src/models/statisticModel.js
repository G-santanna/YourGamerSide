var database = require("../database/config")

function cadastrar(user, puzzle, runTime) {
    var instrucao = `
        INSERT INTO statistic (fkUser, fkPuzzle, runTime) VALUES ('${user}', '${puzzle}', '${runTime}');
    `;
    return database.executar(instrucao);
}

function listar(){
    var instrucao = `
        SELECT * FROM statistic JOIN usuario ON fkUser = idUser JOIN puzzle ON fkPuzzle = idPuzzle ORDER BY runTime LIMIT 10;
    `
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};