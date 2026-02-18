
// Estrutura condicional switch
//  O switch pode ser utilizado para organização de um excesso de if/else;
//  Cada if seria um case;
// Para cada case, temos que adicionar um break;
// E temos o default, que é como o else;


let job = "Programador";

switch (job) {
    case "Programador":
        console.log("Você é um programador!");
        break;

    case "Advogado":
        console.log("Você é um advogado");
        break;

    case "Engenheiro":
        console.log("Você é um engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
}


let nota = "B";

switch (nota) {
    case "A":
        console.log("Excelente!");
        break;

    case "B":
        console.log("Bom trabalho!");
        break;

    case "C":
        console.log("Precisa melhorar");
        break;

    default:
        console.log("Nota inválida");
}





let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Abrindo o perfil");
        break;
    case 2:
        console.log("Abrindo configurações");
        break;
    case 3:
        console.log("Saindo do sistema");
        break;
    case 4:
        console.log("Deletando arquivo");
        break;
    default:
        console.log("Opção invalida");
}
