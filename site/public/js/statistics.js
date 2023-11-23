function getStatistics(){
    fetch(`/statistics/listar`)
        .then(resposta => {
            console.log(resposta);
            if (resposta.status == 200) {
                resposta.json().then(resposta => {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    var table = document.querySelector('table');
                    var sulfix = ['st', 'nd', 'rd', 'th', 'th'];
                    console.log(resposta)
                    for(var i = 0; i<resposta.length; i++){
                        table.innerHTML += `
                        <tr>
                        <td>${(i+1)+sulfix[i]}</td>
                        <td>${resposta[i].runTime.substring(resposta[i].runTime.length-5)}</td>
                        <td>${resposta[i].username}</td>
                        <td>${resposta[i].puzzleTitle}</td>
                        </tr>
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