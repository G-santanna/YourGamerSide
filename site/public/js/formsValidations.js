function validarLogin(){
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;

    if(username != "" && senha != ""){
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usernameServer: username,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    // console.log(JSON.stringify(json));
                    sessionStorage.userEmail = json.email;
                    sessionStorage.userName = json.username;
                    sessionStorage.userID = json.idUser;

                    setTimeout(function () {
                        window.location = "./index.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    }else{
        // alerta na tela
    }
}

function validarCadastro(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirm = document.getElementById("confirm").value;

    if(user != "" && email != "" && senha != "" && senha == confirm){
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userServer: user,
              emailServer: email,
              senhaServer: senha
            }),
          })
            .then(function (resposta) {
              console.log("resposta: ", resposta);
      
              if (resposta.ok) {
                setTimeout(() => {
                  window.location = "login.html";
                }, "2000");

              } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);

            });
    }else{
        // alerta na tela
    }
}