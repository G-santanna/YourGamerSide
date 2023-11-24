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
        select min(DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),answer)), '%Y') 
        + 0) as minAge,avg(DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),answer)), '%Y') 
        + 0) as avgAge,max(DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),answer)), '%Y') 
        + 0) as maxAge from usuario join answer on fkUser in (select idUser from usuario join answer on idUser = fkUser and fkQuestion = 1 and idUser in (select idUser from usuario join answer on fkUser = idUser and answer = 'feminino'))
        union 
        select min(DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),answer)), '%Y') 
        + 0) as minAge,avg(DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),answer)), '%Y') 
        + 0) as avgAge,max(DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),answer)), '%Y') 
        + 0) as maxAge from usuario join answer on fkUser in (select idUser from usuario join answer on idUser = fkUser and fkQuestion = 1 and idUser in (select idUser from usuario join answer on fkUser = idUser and answer = 'masculino'));
    `;

    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};