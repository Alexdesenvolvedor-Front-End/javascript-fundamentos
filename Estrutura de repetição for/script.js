

// Estrutura de repetição for
// O for é a estrutura de repetição mais utilizada;
// Ela condensa toda lógica em uma linha, ao primeiro olhar parece mais complexa, mas simplifica as coisas;
// Na própria declaração, colocamos incrementador, condição final e progressão;



for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}


let r = 5;

for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`);
}


// Identação

for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);

    } else {
        if (u / 2 === 0)
            console.log("Deu o");
    }
}