var express = require("express");
var router = express.Router();

var statisticController = require("../controllers/statisticController");

router.post("/cadastrar", function(req, res){
    statisticController.cadastrar(req, res);
})

router.get("/listar", function(req, res){
    statisticController.listar(req,res);
})

module.exports = router;