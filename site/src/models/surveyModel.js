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

module.exports = {
    cadastrar
};