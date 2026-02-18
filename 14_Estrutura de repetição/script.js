
// O que são estrutura de repetição
// Um bloco de código que se repete até uma condição se satisfeita;
// Isso evita a repetição desnecessária do nosso código;
// Algumas das estruturas são: for e while;
// A sua sintaxe são diferentes, mas as duas chegam no mesmo resultado;


// Estrutura de repetição while
// O while faz uma ação até que uma condição seja atingida;
// No bloco definimos o fim do loop, que é a condição;
// Temos que definir também um incrementador, que é quem faz a condição ser atingida;


let p = 0;

while (p < 5) {
    console.log(`Rpetindo ${p}`);

    p = p + 1;
}




// Loop infinito

let x = 10;

while (x > 5) {
    console.log(`Imprimindo ${x}`);
}