
// Strings

// Strings são textos;

// Em javaScript temos três formas de criar dados de texto;
// Aspas simples, duplas e crases;

console.log("texto");
console.log("Mais um texto");
console.log(typeof "texto");
console.log(`alex`);

// 5 - Símbolos especiais em string

console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

// 6 - Concatenação

// Concatenação é o recurso que une dois ou mais textos;
// O operador da concatenação é o +;

console.log("Oi, " + "tudo" + " bem?");
console.log(`Testando` + ` Com ` + ` crase! `)

// 7 - Interpolação (Template Strings)

// A interpolação é semelhante a concatenação;
// Podemos executar código javascript com ${algum código};

console.log(`A soma de 2 + 2 é : ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);
