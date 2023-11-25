var answers = []
var question = 1;

function answer(){
    var questionField = document.querySelector(".question");
    var answerField = document.querySelector(".answer");

    if(question == 1){
        var radio = document.querySelector('input[name="genero"]:checked').value;
        answers.push(radio);
        question++;
        questionField.innerHTML = `Data de nascimento`;
        answerField.innerHTML = `
        <div class="campo">
            <input type="date">
        </div>
        `
    }else if(question == 2){
        var dtNasc = document.querySelector(".campo input[type='date']").value;
        answers.push(dtNasc);
        question++;
        questionField.innerHTML = `Quando você começou a jogar?`;
        answerField.innerHTML = `
        <div class="campo">
            <input type="number" min="1900" max="2023" step="1" placeholder="2023" />
        </div>
        `
    }else if(question == 3){
        var startPlaying = document.querySelector(".campo input").value+'-01-01';
        answers.push(startPlaying);
        question++;
        questionField.innerHTML = `Qual foi seu ápice de comprometimento com o jogo?`;
        answerField.innerHTML = `
        <div class="campo">
            <select name="" id="compromisse">
                <option value="freetime">Player de tempo livre</option>
                <option value="casual">Player casual</option>
                <option value="ranked">Player de ranqueadas</option>
                <option value="amador">Player competidor amador</option>
                <option value="pro">Player competidor profissional</option>
            </select>
        </div>
        `
    }else if(question == 4){
        var gameCompromisse = compromisse.value;
        answers.push(gameCompromisse);
        if(answers[0] == "feminino" || answers[0] == "não-binário" || answers[0] == "outros"){
            question++;
            questionField.innerHTML = `Qual foi a maior dificuldade que você encontrou<br>no CS:GO sendo mulher/não-binário/outro?`;
            answerField.innerHTML = `
            <div class="campo">
                <select id="difficulty">
                    <option value="agressão verbal">Já sofri agressão verbal em partidas que meu desempenho não foi muito bom</option>
                    <option value="agressão verbal">Já sofri agressao verbal por tentar ajudar o time com alguma estrategia</option>
                    <option value="assédio">Já fui comparada sexualmente com alguma personagem por sermos do mesmo genero</option>
                    <option value="abuso psicológico">Sofri abuso psicológico de 1 ou mais membros de equipe por ser a única do gênero feminino</option>
                    <option value="nenhuma">Nenhuma das anteriores</option>
                </select>
            </div>
            `
        }else{
            question += 3;
            answer();
        }
    }else if(question == 5){
        var gameDifficulty = difficulty.value;
        answers.push(gameDifficulty);
        if(answers[0] == "feminino" || answers[0] == "nao-binario" || answers[0] == "outro"){
            question++;
            questionField.innerHTML = `Qual era a sua expectativa sobre o cenário do jogo?`;
            answerField.innerHTML = `
            <div class="campo">
                <select id="expectation">
                    <option value="amigável">Ambiente amigável</option>
                    <option value="pacífico">Ambiente pacífico</option>
                    <option value="hostil">Ambiente hostil</option>
                    <option value="nenhuma">Sem expectativa</option>
                </select>
            </div>
            `
        }
    }else if(question == 6){
        var gameExpectation = expectation.value;
        answers.push(gameExpectation);
        if(answers[0] == "feminino" || answers[0] == "nao-binario" || answers[0] == "outro"){
            question++;
            questionField.innerHTML = `Qual foi a sua realidade sobre o cenário do jogo?`;
            answerField.innerHTML = `
            <div class="campo">
                <select id="reality">
                    <option value="amigável">Ambiente amigável</option>
                    <option value="pacífico">Ambiente pacífico</option>
                    <option value="hostil">Ambiente hostil</option>
                </select>
            </div>
            `
        }
    }else if(question == 7){
        if(document.getElementById("reality") != null){
            var sceneReality = reality.value;
            answers.push(sceneReality);
        }
        
        fetch("/surveys/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userID: sessionStorage.userID,
                answers: answers
            })
        })

        questionField.innerHTML = `OBRIGADO PELA PARTICIPAÇÃO`;
            answerField.innerHTML = `<img src="./assets/imgs/surveyMedal.webp"><br>
            <span>Como recompensa pela pesquisa você ganhou essa medalha!</span>
            `
        question++;
    }else{
        window.location = "index.html"
    }
}