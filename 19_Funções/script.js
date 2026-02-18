
//  O que são funções
// Estruturas de código menores, podemos dividir nosso código en várias funções;
// O ideal é que cada uma tenha apenas um único objeto;
// Isso nos faz poupar código, pois podemos reaproveita-las;
// A linguagem temn várias funções já criadas, e nós podemos criar as nossas;

// Definindo uma função

// A estrutura da função é um pouco mais complexa;
// Primeiramente utilizamos a palavra funcion, isso inicia uma função;
// Precisamos depois nomeá-la;
// Precisamos depois nomeála;
// Os parâmetros, que são uma espécie de configuração, ficam entre () depois do nome;
// O corpo da função fica entre {};
// Geralmente uma função retorna um valor;


function minhaFuncao() {
    console.log("Testando...");
}

minhaFuncao();



const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável...");

}

minhaFuncaoEmVariavel();


function funcaoComParametro(txt) {
    console.log(`imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa...");

funcaoComParametro("Outra coisa...");



// Retorno de funções
// O retorno serve para porcessarmos um valor dentro da função e retorna para o programa;
// A palavra reservada para este recurso é return;
// se não retornamos nada a função tem utilidade, mas não externiza o que acontece nela;


const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;

}

const resultado = soma(a, b);
console.log(resultado);

console.log(soma(c, d));


// Escopo de funções

// As funções tem um escopo separado do escopo do programa, que é o global;
// Este escopo faz com que variáveis de fora não funcionem dentro;
// Podemos então declarar novas variáveis, sem interferir nas já declarada;



let y = 10;

// Dentro da função;

function testandoEscopo() {
    let y = 20;
    console.log(`y dentro da função é: ${y}`);
}


testandoEscopo();


// Fora da função;

console.log(`y fora da função é: ${y}`);

testandoEscopo();



// Escopo aninhado (Nested Scopes)
// As formas de criar variáveis, let e const, nos dão a possibolidade do escopo aninhado;
// Que consiste em ter em qualquer bloco a declaração de variáveis separadas dos outros escopos;
// Um bloco é caracterizado por um código entre{};


let m = 10;

function escopoAninhado(){
    let m = 20;

    if(true){
        let m = 30;

        if(true){
            let m = 40;
            console.log(m);
        }

        console.log(m);

    }

    console.log(m);
}

escopoAninhado();
console.log(m);
