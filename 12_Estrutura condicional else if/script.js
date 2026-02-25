
// Estrutura condiconal else if;
// O else if é uma estrutura intermediária de if e do else;
// É possível adicionar novas condigções, como no if;
// Assim temos a possibilidade de criar várias validações, para resolver nosso problema;

// const { PureComponent } = require("react");


// if (1 > 2) {
//     console.log("Teste");

// } else if (2 > 3) {
//     console.log("Teste 2");

// } else if (5 > 1) {
//     console.log("Agora sim!");
// }



// const userName = "Alex";

// const userAge = 43;

// if (userName === "Pedro") {
//     console.log("Bem vindo Pedro");

// } else if (userName === "Alex" && userAge === 43) {
//     console.log("Olá Alex, você tem 43 anos de idade!");

// } else {
//     console.log("Nenhuma condição aceita!");
// }

// let n1 = prompt("Digite um número!");
// n1 = parseFloat(n1);

// let n2 = prompt("Digite outro número!");
// n2 = parseFloat(n2);

// alert(n1 + n2);

// let n1 = prompt("Digite um número!");

// n1 = parseInt(n1);
// alert(`O número convertido foi: ${n1}`);


// let n1 = prompt("Digite um número: ");
// n1 = parseInt(n1);

// let n2 = prompt("Digite outro número: ");
// n2 = parseInt(n2);

// console.log(`O resultado da subtração é: ${n1 - n2 }`);


// let n1 = prompt("Digite um número: ");
// n1 = parseInt(n1);

// let n2 = prompt("Digite outro número: ");
// n2 = parseInt(n2);

// console.log(`O resultado da multiplicação é: ${n1*n2}`);


// let n1 = prompt("Digite um número: ");
// n1 = parseFloat(n1);

// let n2 = prompt("Digite outro número: ");
// n2 = parseFloat(n2);

// let media = (n1 + n2) / 2;

// console.log(`A Média total é: ${media}`);


// let n1 = prompt("Digite um número: ");
// n1 = parseInt(n1);

// let n2 = prompt("Digite outro número: ");
// n2 = parseInt(n2);


// console.log(`A divisão de ${n1} por ${n2} é ${n1 % n2}`);

// let n1 = prompt("Digite um número: ");
// n1 = parseInt(n1);


// let n2 = prompt("Digite outro número: ");
// n2 = parseInt(n2);

// console.log(`O resultado da exponenciação de ${n1}  elevado 5
//     22por ${n2} é ${n1 ** n2}`);




// let n1 = prompt("Digite uma nota: ");
// n1 = parseFloat(n1);

// let n2 = prompt("Digite outra nota: ");
// n2 = parseFloat(n2);

// let media = (n1 + n2) / 2;

// if (media > 5) {
//     console.log("Parabéns você foi aprovado!");
// } else {
//     console.log("Infelizmente você está reprovado!");
// }



let jogador1 = prompt("Jogador 1: Digite um número");
jogador1 = parseInt(jogador1);

let jogador2 = prompt("Jogador 2: Digite outro número");
jogador2 = parseInt(jogador2);


if (jogador1 === jogador2) {
    console.log("Empate");

} else {

    let sorteado = parseInt(Math.random() * 2);

    if (sorteado === 0) {
        if (jogador1 < jogador2) {
            console.log("Ganhou o jogador 1");

        } else {
            console.log("Gnahou o jogador 2");
            if (jogador1 > jogador2) {
                console.log("Ganhou o jogador 1");

            } else {
                console.log("Gangou o jogador 2");
            }
        }
    }






}
