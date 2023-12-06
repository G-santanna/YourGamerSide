function limparValidacao(){
  var formInputs = document.querySelectorAll('.formulario input')

  for(var i = 0; i<formInputs.length; i++){
    formInputs[i].style.borderColor = '#BB9AF7';
  }
}


function validarLogin(){
    limparValidacao();
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;

    if(username != "" && senha != ""){
        formErrors();
    }else{
        // alerta na tela
    }
}

function validarCadastro(){
    limparValidacao();
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirm = document.getElementById("confirm").value;

    if(user != "" && email != "" && senha != "" && senha == confirm){
        formErrors();
    }else{
      document.getElementById("user").style.borderColor = 'red';
      document.getElementById("email").style.borderColor = 'red';
      document.getElementById("senha").style.borderColor = 'red';
      document.getElementById("confirm").style.borderColor = 'red';
    }
}

function formErrors(){
    var formInputs = document.querySelectorAll('.formulario input')
    var verificado = true;

    if(formInputs.length == 2){
      if(formInputs[0].value.length < 2){
        formInputs[0].style.borderColor = 'red';
        verificado = false;
      }
      if(formInputs[1].value.length < 6){
        formInputs[1].style.borderColor = 'red';
        verificado = false;
      }
      if(verificado){
        for(var i = 0; i<formInputs.length; i++){
          formInputs[i].style.borderColor = 'lime';
        }
        fetch("/usuarios/autenticar", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              usernameServer: formInputs[0].value,
              senhaServer: formInputs[1].value
          })
      }).then(function (resposta) {
          console.log("ESTOU NO THEN DO entrar()!")

          if (resposta.ok) {
              console.log(resposta);

              resposta.json().then(json => {
                  console.log(json);
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

      }
    }else if(formInputs.length == 4){
      if(formInputs[0].value.length < 2){
        formInputs[0].style.borderColor = 'red';
        verificado = false;
      }
      if(!formInputs[1].value.includes('@') || !formInputs[1].value.includes('.')){
        formInputs[1].style.borderColor = 'red';
        verificado = false;
      }
      if(formInputs[2].value.length < 6){
        formInputs[2].style.borderColor = 'red';
        verificado = false;
      }
      if(formInputs[3].value != formInputs[2].value){
        formInputs[3].style.borderColor = 'red';
        verificado = false;
      }
      if(verificado){
        for(var i = 0; i<formInputs.length; i++){
          formInputs[i].style.borderColor = 'lime';
        }
        fetch("/usuarios/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userServer: formInputs[0].value,
            emailServer: formInputs[1].value,
            senhaServer: formInputs[2].value
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
      }
    }
}