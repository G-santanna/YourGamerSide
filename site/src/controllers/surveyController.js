var surveyModel = require("../models/surveyModel");

function cadastrar(req, res){
    var userID = req.body.userID;
    var answers = req.body.answers;

    surveyModel.cadastrar(userID, answers)
}

module.exports = {
    cadastrar
}