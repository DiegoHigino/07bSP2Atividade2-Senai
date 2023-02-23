//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(

        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}
//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var usuario = document.getElementById("senha").value;

    if(usuario == 'diego' && senha == '123456'){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("usuário negado");
    }
}

//Ativar alert no botão cadastrar
