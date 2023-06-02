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
divide(4, 2); // Retorna um erro pois o function expression só é armazenado na memória no seu momento exato de execução.

// Function declarations são completamente definidas no momento do hoisting
function sum3(a, b) {
  return a + b; // Retorna a soma dos valores do parâmetro a mais o parâmetro b.
}

// Function expression apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma function expression possui importância.
const divide = function (a, b) {
  return a / b; // Retorna a divisão dos valores do parâmetro a mais o parâmetro b.
};

//* > Arrow function

// Podemos criar utilizando arrow functions.

const sum4 = (a, b) => a + b; // Criado uma function expression chamada sum4 que recebe dois parâmetros e retorna a soma desses parâmetros.
console.log(somar(11, 10)); // Executa a função armazenada na constante chamada sum4 e passa valores para o parâmetro da função e mostra no console o resultado.

const square = (a) => a * a; // Criado uma function expression chamada square que recebe um parâmetro e retorna a multiplicação dele mesmo.
console.log(quadrado(4)); // Executa a função armazenada na constante chamada quadrado e passa um valor para o parâmetro da função e mostra no console o resultado.

//* > Estrutura / Preferência.

//* > IIFE - Immediately Invoked Function Expression.

//* > IIFE - Arrow Function.