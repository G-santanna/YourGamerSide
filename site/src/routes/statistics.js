var express = require("express");
var router = express.Router();

var statisticController = require("../controllers/statisticController");

router.post("/cadastrar", function(req, res){
    statisticController.cadastrar(req, res);
})


module.exports = router;