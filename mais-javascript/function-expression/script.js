//* > Function declaration.

// Criado uma function declaration, que geralmente é a mais utilizada. Essa função se chama sum e contém dois parâmetros.
function sum1(a, b) {
  return a + b; // Retorna a soma dos valores do parâmetro a mais o parâmetro b.
}

console.log(sum1(4, 2)); // Executa a função e passa valores para o parâmetro da função e mostra no console o resultado.

//* > Function expression.

// Criado uma function expression que é armazenada na constante chamada sum2, que contém dois parâmetros.
// A function expression é criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.
const sum2 = function (a, b) {
  return a + b; // Retorna a soma dos valores do parâmetro a mais o parâmetro b.
};

console.log(sum2(8, 2)); // Executa a função armazenada na constante chamada sum2 e passa valores para o parâmetro da função e mostra no console o resultado.

//* > Hoisting.

console.log(sum3(4, 2)); // Retorna o resultado no console pois uma function declaration é armazenado na memoria antes mesmo de ser executado.
// divide1(4, 2); // Retorna um erro pois o function expression só é armazenado na memória no seu momento exato de execução.

// Function declarations são completamente definidas no momento do hoisting
function sum3(a, b) {
  return a + b; // Retorna a soma dos valores do parâmetro a mais o parâmetro b.
}

// Function expression apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma function expression possui importância.
const divide1 = function (a, b) {
  return a / b; // Retorna a divisão dos valores do parâmetro a dividido pelo o parâmetro b.
};

//* > Arrow function

// Podemos criar utilizando arrow functions.

const sum4 = (a, b) => a + b; // Criado uma function expression chamada sum4 que recebe dois parâmetros e retorna a soma desses parâmetros.
console.log(sum4(11, 10)); // Executa a função armazenada na constante chamada sum4 e passa valores para o parâmetro da função e mostra no console o resultado.

const square = (a) => a * a; // Criado uma function expression chamada square que recebe um parâmetro e retorna a multiplicação dele mesmo.
console.log(square(4)); // Executa a função armazenada na constante chamada square e passa um valor para o parâmetro da função e mostra no console o resultado.

//* > Function expression ou Function declaration?

// Geralmente o uso entre expression / declaration é uma questão de preferência. Function expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

// A function declaration pode ser ativada antes de ser declarada. Corre o risco de ter conflito por questão de ficar no escopo global(window).
function sum5(a, b) {
  return a + b; // Retorna a soma dos valores do parâmetro a mais o parâmetro b.
}

// O function expression não vai para o escopo global(window) então não tem risco de dar conflito com outros métodos. Só é ativada depois de declarada.
const divide2 = (a, b) => a / b; // Criado uma function expression chamada divide2 que recebe dois parâmetro e retorna a divisão deles mesmo.

console.log(sum5(4, 2)); // Executa a função chamada sum5 e passa valores para o parâmetro da função e mostra no console o resultado.
console.log(divide2(9, 3)); // Executa a função armazenada na constante chamada divide2 e passa valores para o parâmetro da função e mostra no console o resultado.

//* > IIFE - Immediately Invoked Function Expression.

var instrument1 = "Violão"; // Definido uma variável de escopo global chamada instrument1 que armazena uma string.

// Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.
// A partir do momento que é criado/definido um IIFE ele já executa o seu escopo automaticamente.
(function () {
  // Código isolado do escopo global.
  var instrument1 = "Guitarra"; // Definido uma variável de escopo local chamada instrument1 que armazena uma string.
  console.log(instrument1); // Mostra a string armazenada na variável local no console.
})();

console.log(instrument1); // Mostra a string armazenada na variável global no console.

//* > IIFE - Arrow Function.

var instrument2 = "Bateria"; // Definido uma variável de escopo global chamada instrument2 que armazena uma string.

// Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.
// A partir do momento que é criado/definido um IIFE ele já executa o seu escopo automaticamente.
(() => {
  // Código isolado do escopo global.
  var instrument2 = "Flauta"; // Definido uma variável de escopo local chamada instrument2 que armazena uma string.
  console.log(instrument2); // Mostra a string armazenada na variável local no console.
})();

console.log(instrument2); // Mostra a string armazenada na variável global no console.
