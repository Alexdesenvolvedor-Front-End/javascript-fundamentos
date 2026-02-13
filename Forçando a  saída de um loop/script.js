

// Forçando a saída de um loop
// Com a instrução de break podemos ejetar um loop, fazendo que com as repetições cessem;
// Isso pode poupar memória, pois o código será executado menos vezes;
// Não é tão comum, mas é um recurso válido da linguagem;


for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é ${g}`);

    if (g === 12) {
        console.log("O g é 20!");
        break;
    }
}