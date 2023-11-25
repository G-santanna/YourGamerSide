var database = require("../database/config")

function cadastrar(userID, answers) {
    var instrucao = `
        INSERT INTO answer VALUES`;
       for(var i = 0; i < answers.length-1; i++){
           instrucao += `(${userID}, ${i+1}, '${answers[i]}'),`;
        }
        instrucao += `(${userID}, ${answers.length}, '${answers[answers.length-1]}');`;
    return database.executar(instrucao);
}

function listar(){
    var instrucao = `
    select username, genero.answer  as genero, DATE_FORMAT(FROM_DAYS(DATEDIFF(firstTime.answer,idade.answer)), '%Y') + 0 as startedPlaying, auge.answer as auge, dificuldade.answer as dificuldade, expectativa.answer as expectativa, realidade.answer as realidade from usuario 
    join answer as genero on idUser = genero.fkUser and genero.fkQuestion = 1
    join answer as idade on idUser = idade.fkUser and idade.fkQuestion = 2
    join answer as firstTime on idUser = firstTime.fkUser and firstTime.fkQuestion = 3
    join answer as auge on idUser = auge.fkUser and auge.fkQuestion = 4
    left join answer as dificuldade on idUser = dificuldade.fkUser and dificuldade.fkQuestion = 5
    left join answer as expectativa on idUser = expectativa.fkUser and expectativa.fkQuestion = 6
    left join answer as realidade on idUser = realidade.fkUser and realidade.fkQuestion = 7;
    `;

    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};