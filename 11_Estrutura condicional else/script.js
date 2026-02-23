
// Estrutura condicional else
// O else executa o if não atende sua condição;
// Ou seja, não temos um bloco de validação, apenas do que será executado a ideia é algo x > 5, execute isto;



const loggedIn = false;

if (loggedIn) {
    console.log("Está autenticado!");

} else {
    console.log("Não está autenticado!");
}



const a = 10;

const b = 11;


if (a > 5 && b > 13) {
    console.log("Númros mais altos");
} else {
    console.log("Os números não são mais altos");
}



const c = 8;

const d = 9;

if (c > 10) {
    console.log("Diga okay!");

} else {
    console.log("Diga não está correto!");
}




const interruptor = "on";

if (interruptor == "on") {
    console.log(`A lampada está ligada`);
} else {
    console.log(`A lampada está desligada.`);
}



const hora = new Date().getHours();

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite!");
}


function verificar(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let teste = document.getElementById("teste");

    if (nome == "" || nome == null) {
        document.getElementById("teste").innerHTML = ("O campo não pode ser verificado!");
        teste.style.color = "red";
    } else {
        document.getElementById("teste").innerHTML = ("Parabéns, seja bem vindo.!");
        teste.style.color = "blue";
    }

}
