// Função para setar as peças, os textos e a logo referente ao time escolhido
function setPieces(n){
    piece.innerHTML = `
    <img src="assets/imgsQuebraCabeca/quebra${n}/p1.png" draggable="true" ondragstart="drag(event)" id="p1">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p2.png" draggable="true" ondragstart="drag(event)" id="p2">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p3.png" draggable="true" ondragstart="drag(event)" id="p3">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p4.png" draggable="true" ondragstart="drag(event)" id="p4">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p5.png" draggable="true" ondragstart="drag(event)" id="p5">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p6.png" draggable="true" ondragstart="drag(event)" id="p6">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p7.png" draggable="true" ondragstart="drag(event)" id="p7">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p8.png" draggable="true" ondragstart="drag(event)" id="p8">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p9.png" draggable="true" ondragstart="drag(event)" id="p9">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p10.png" draggable="true" ondragstart="drag(event)" id="p10">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p11.png" draggable="true" ondragstart="drag(event)" id="p11">
    <img src="assets/imgsQuebraCabeca/quebra${n}/p12.png" draggable="true" ondragstart="drag(event)" id="p12">
    `

    game.style.backgroundImage = `url("./assets/imgsQuebraCabeca/quebra${n}/quebra-montado.png")`
    
    changePiece();

    var logoPlace = document.getElementsByClassName("puzzleTitle")[0];
    var textoTime = document.querySelector(".texto>span");

    if(n == 1){
        logoPlace.innerHTML = '<img src="assets/imgs/nigmalogobig.png">'
        textoTime.innerHTML = 'O time do leste europeu é simplesmente um fenômeno no cenário inclusivo do CS:GO, desde 2021 já foram 8 títulos conquistados por elas. O time é composto por ANa, twenty3, vilga, tory & Kat ,além do coach hyskeee.'
    }else if(n == 2){
        logoPlace.innerHTML = '<img src="assets/imgs/navilogobig.png">'
        textoTime.innerHTML = 'O time polones vem marcando presença nos playoffs dos principais campeonatos desde 2022, composto por vicu, Angelka, Hanka, Liina & LETi ,além do coach AlcesT. Em 2023 a NaVi obteve 2 vice-campeonatos.'
    }else if(n == 3){
        logoPlace.innerHTML = '<img src="assets/imgs/furialogobig.png">'
        textoTime.innerHTML = 'As brasileiras são invencíveis no território brasileiro, e internacionalmente colecionam 4 playoffs desde 2022. O time é composto por KaahSENSEI, GaBi, izaa, gabs & annaEX ,além do coach RMN.'
    }else if(n == 4){
        logoPlace.innerHTML = '<img src="assets/imgs/fluxologobig.webp">'
        textoTime.innerHTML = 'Recém formada a line-up, as brasileiras começaram com tudo no cenário nacional, conquistando 1 título e 2 vice-campeonatos. Formada por goddess, julih, nani, poppins & yungher ,além do coach darkpsy, elas jogarão seu primeiro internacional em dezembro de 2023.'
    }else if(n == 5){
        logoPlace.innerHTML = '<img src="assets/imgs/g2oyalogobig.webp">'
        textoTime.innerHTML = 'As europeias tem o hype a seu favor, porém elas ainda não tiveram um desafio grande em 2023. Elas contam com a dupla da Suécia juliano e zAAz para o sucesso, kr4sylya, kyossa & ramziiN completam a line-up, além do coach Jumpy.'
    }else if(n == 6){
        logoPlace.innerHTML = '<img src="assets/imgs/eggoldlogobig.png">'
        textoTime.innerHTML = 'Representando o cenário norte-americano no aqui no Your Gamer Side, a organização Evil Geniuses entrou no cenário inclusivo em 2007! a line-up atual é composta por PiggyKiki, m1lky, 7licious, Juli & vanessa, além do coach muenster.'
    }

    fetch(`/statistics/record/${n}/${sessionStorage.userID}`)
        .then(resposta => {
            console.log(resposta);
            if (resposta.status == 200) {
                resposta.json().then(resposta => {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        
                    for(var i = 0; i<resposta.length; i++){
                        record.innerHTML = `
                        ${resposta[0].runTime}
                        `
                    }
                });
            } else {
                console.error(`Nenhum dado encontrado ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados`+error);
        });
}

//Função para começar o jogo
function start(){
   
    startButton.style.display = "none"
    game.style.display = "block"

    setTimeout(() => {
        game.style.backgroundImage = "none";
        game.style.opacity = "1";
        
        timerID = setInterval(() => {
        segundos++;

        tempo = new Date(segundos * 1000).toISOString().slice(11, 19);
        yourtime.innerHTML = tempo;

    }, 1000);

    for(var i = 0; document.querySelectorAll("#piece img"); i++){
        document.querySelectorAll("#piece img")[i].style.pointerEvents = "auto";
    }
    }, 3000);

    
}

//Funções relacionadas ao drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  pieceNow = ev.target.id;  
  ev.dataTransfer.setData("text", ev.target.id);
}


var vetorPecas = [];

var pieces = []
var places = []

pieces = document.querySelectorAll("#piece img");
places = document.querySelectorAll(".linha>div");

var pieceNow;

//Função com algoritmo de verificação da posição correta e se há uma imagem no lugar.
function drop(ev) {
  if(ev.target.localName == "div"){
    if(pieceNow == ev.target.attributes[3].value){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        changePiece();
    }else{
        alert("Peça no lugar errado!")  
    }
    if(!piece.innerHTML.includes('img')){
        vetorPecas = document.querySelectorAll(".linha>div");
        for(var i = 0; i<vetorPecas.length; i++){
            vetorPecas[i].style.border = 0;
            game.style.border = "2px solid #BB9AF7"
        }
        clearInterval(timerID);
        tempo = new Date(segundos * 1000).toISOString().slice(11, 19)
        yourtime2.innerHTML = tempo;
        options.style.display = "none";
        document.getElementsByClassName("tempo")[0].style.display = "flex";
        cadastrarRun(tempo);
        
    }
  }else{
    alert("as peças não podem se sobrepor!")
  }
}

function cadastrarRun(runTime){
    fetch("/statistics/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: sessionStorage.userID,
          idPuzzle: sessionStorage.puzzleID,
          runTime: runTime
        }),
      })
}

//Função para randomizar a próxima peça do tabuleiro
function changePiece(){
    var aleatorio = parseInt(Math.random() * Number(piece.childElementCount) + 1) 
    for(var i = 1; i <= piece.childElementCount; i++){
        if(document.querySelectorAll(`#piece img:nth-child(${i})`)[0].style.visibility != "hidden"){
            document.querySelectorAll(`#piece img:nth-child(${i})`)[0].style.visibility = "hidden"
        }
    }
    randomPiece = document.querySelectorAll(`#piece img:nth-child(${aleatorio})`);
    if(randomPiece.length > 0){
        randomPiece[0].style.visibility = "visible";
    }
}

var timerID;

var segundos = 0;
var tempo;

//Função para liberar o texto
function teamText(){
    document.getElementsByClassName("tempo")[0].style.display = "none";
    texto.style.display = "flex";
}

//Função para limpar a sessão após o usuário sair do jogo
function clearIdQuebra(){
    sessionStorage.removeItem("puzzleID");
}