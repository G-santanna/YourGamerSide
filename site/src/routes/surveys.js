var express = require("express");
var router = express.Router();

var surveyController = require("../controllers/surveyController");

router.post("/cadastrar", function(req, res){
    surveyController.cadastrar(req, res);
})

router.get("/listar", function(req, res){
    surveyController.listar(req, res);
})

router.get("/hasAnswered/:idUser", function(req, res){
    surveyController.hasAnswered(req, res);
})

module.exports = router;