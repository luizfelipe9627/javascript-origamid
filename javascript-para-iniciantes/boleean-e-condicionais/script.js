// Está criando duas variáveis que tem como valor um boolean.
let possuiGraduacao = true;
let possuiMBA = false;

// * Condicional If, Else e Else if.

// Se o valor for true(verdadeiro) irá executar o primeiro bloco de comando.
if (possuiGraduacao) {
  console.log("Possui graduação.");
} // O else if verifica se a condição anterior é false, se for ele verifica o else if, se não for true ele irá para o else.
else if (possuiMBA) {
  console.log("Possui MBA.");
} // Se for false ele ira executar o segundo bloco no c else.
else {
  console.log("Não possui nem graduação nem MBA.");
}

let nome = ""; // Caso a variável esteja vazia ela é false, se tiver algo ela é true.

// Se nome existir então ele irá executar o comando dentro do if.
if (nome) {
  console.log(nome);
  // Caso contrario irá executar o comando dentro do else.
} else {
  console.log("Não existe nome.");
}

// * Operadores de comparação.

let maior = 2 > 5; // Operador de comparação maior(">") verifica se o primeiro valor é maior que o segundo, se for retorna true, caso contrario false.
console.log(maior); // Retorna false no console pois 2 não é maior que 5.

let menor = 5 < 10; // Operador de comparação menor("<") verifica se o primeiro valor é menor que o segundo, se for retorna true, caso contrario false.
console.log(menor); // Retorna true no console pois 5 é menor que 10.

let menorIgual = 10 <= 10; // Operador de comparação menor igual("<=") verifica se o primeiro valor é menor ou igual ao segundo, se for retorna true, caso contrario false.
console.log(menorIgual); // Retorna true no console pois 10 é igual a 10.

let maiorIgual = 10 >= 11; // Operador de comparação menor igual("<=") verifica se o primeiro valor é menor ou igual ao segundo, se for retorna true, caso contrario false.
console.log(maiorIgual); // Retorna false pois 10 não é maior ou igual a 11.

// * Operadores lógicos.

// O operador lógico de negação("!") inverte os valores, sendo assim o true vira false e vice versa. Assim executando o comando dentro do if.
if (!possuiMBA) {
  console.log("Não possui MBA.");
}

// Para verificar se algo é true ou false podemos usar duas negações ("!!"), assim fazendo ele negar e depois voltar ao valor original.
if (!!possuiMBA) {
  console.log("Não possui MBA.");
} else {
  console.log("Possui MBA.");
}

let igualNum = "10" == 10; // O operador lógico de comparação igual("==") diz por true ou false se o valor é igual um do outro, sem restringir o tipo.
console.log(igualNum); // Irá retornar no console true pois eles são o mesmo número.

let igualTipo = "23" === 23; // O operador lógico de comparação igual("===") diz por true ou false se o valor é igual um do outro, restringindo o tipo.
console.log(igualTipo); // Irá retornar no console false pois eles não são do mesmo tipo.

let diferenteNumber = "451" != 23; // O operador lógico diferente("!=") diz por true ou false se o valor é diferente um do outro, sem restringir o tipo.
console.log(diferenteNumber); // Irá retornar no console true pois eles são diferentes.

let diferenteString = "Cachorro" !== "Cachorro"; // O operador lógico diferente("!==") diz por true ou false se o valor é diferente um do outro, restringindo o tipo.
console.log(diferenteString); // Irá retornar no console false pois eles não são diferentes.

let operadorAnd = 5 - 10 && 5 + 5; // O operador lógico and("&&") só retorna true caso os dois valores sejam verdadeiros, se algum ser false ele irá ignorar o true e vai retornar o false.
if (operadorAnd) {
  console.log(
    "Verdadeiro, pois as duas condições são verdadeiras.",
    operadorAnd
  );
} else {
  console.log("Falso, pois nenhuma condição é verdadeira.", operadorAnd);
}

var operadorOr = 5 - 5 || 5 + 5 || 10 - 2; // O operador lógico ou("||") só retorna true caso algum dos valores for true, se os dois for false ele irá retornar false.
if (operadorOr) {
  console.log("Verdadeiro, pois um dos valores é verdadeiro.", operadorOr);
} else {
  console.log("Falso, pois nenhum número é verdadeiro.", operadorOr);
}

// * Condicional Switch case.

let corFavorita = "Azul";
// O switch case é usado para verificar se um valor é igual a uma das opções definidas, se for ele irá executar.
// O break do case finaliza a execução do switch quando encontrado a resposta.
// O default é acionado quando nenhuma das opções for verdadeira.
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos.");
}
