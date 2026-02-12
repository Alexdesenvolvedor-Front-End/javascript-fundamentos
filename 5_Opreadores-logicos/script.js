
//  Operadores Lógicos

// Os operadores lógicos servem para unir duas ou mais comparações;
// O resultado final também é um boolean;
// && - AND - true apenas se os dois lados forem verdadeiros;
// || - OR - para ser true, um lado como true é suficiente;
// ! - NOT - este operador inverte a comparação;

console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Alex" === 1);

console.log(5 > 2 || "Alex" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);
