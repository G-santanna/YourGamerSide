var statisticModel = require("../models/statisticModel");

function cadastrar(req, res) {
    var user = req.body.idUser;
    var puzzle = req.body.idPuzzle;
    var runTime = req.body.runTime;

    if (user == undefined) {
        res.status(400).send("User undefined");
    }else if (puzzle == undefined) {
        res.status(400).send("Puzzle undefined");
    }else if(runTime == undefined){
        res.status(400).send("runTime undefined");
    }else {
        statisticModel.cadastrar(user, puzzle, runTime)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req,res){
    statisticModel.listar()
            .then(
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