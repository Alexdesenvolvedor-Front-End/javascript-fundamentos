
// Estrutura condiconal else if;
// O else if é uma estrutura intermediária de if e do else;
// É possível adicionar novas condigções, como no if;
// Assim temos a possibilidade de criar várias validações, para resolver nosso problema;


if (1 > 2) {
    console.log("Teste");

} else if (2 > 3) {
    console.log("Teste 2");

} else if (5 > 1) {
    console.log("Agora sim!");
}



const userName = "Alex";

const userAge = 43;

if (userName === "Pedro") {
    console.log("Bem vindo Pedro");

} else if (userName === "Alex" && userAge === 43) {
    console.log("Olá Alex, você tem 43 anos de idade!");

} else {
    console.log("Nenhuma condição aceita!");
}
