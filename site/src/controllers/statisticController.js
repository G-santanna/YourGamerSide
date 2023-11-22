var statisticModel = require("../models/statisticModel");

function cadastrar(req, res) {
    var user = req.body.idUser;
    var puzzle = req.body.idPuzzle;

    if (user == undefined) {
        res.status(400).send("User undefined");
    }else if (puzzle == undefined) {
        res.status(400).send("Puzzle undefined");
    }else {
        statisticModel.cadastrar(user, puzzle)
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

module.exports = {
    cadastrar
}