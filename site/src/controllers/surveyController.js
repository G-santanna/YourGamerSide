var surveyModel = require("../models/surveyModel");

function cadastrar(req, res){
    var userID = req.body.userID;
    var answers = req.body.answers;

    surveyModel.cadastrar(userID, answers)
}

function listar(req, res){
    surveyModel.listar().then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao coletar os dados! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    cadastrar,
    listar
}