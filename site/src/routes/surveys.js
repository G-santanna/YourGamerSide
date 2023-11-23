var express = require("express");
var router = express.Router();

var surveyController = require("../controllers/surveyController");

router.post("/cadastrar", function(req, res){
    surveyController.cadastrar(req, res);
})

module.exports = router;