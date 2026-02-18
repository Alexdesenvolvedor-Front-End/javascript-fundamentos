
// Pulando uma execução do loop
//  A palavra reservada continue, pode pular uma ou mais execuções do loop;
// É um recurso utilizado de forma semelhante ao break;


for (let s = 1; s < 10; s = s + 1) {
    // Operador resto %
    if (s % 2 === 0) {
        console.log("Numero par!");
        continue;
    }

    console.log(s);
}