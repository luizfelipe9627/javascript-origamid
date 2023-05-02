//* > Introdução a function.

// Criado uma função chamada squareArea que contém um parâmetro chamado side.
function squareArea(side) {
  return side * side; // Retorna o valor do side dividido pelo próprio valor do side.
}
console.log(squareArea(2)); // Está atribuindo o valor 5 no parâmetro side.

// Criado uma nova função chamada squarePerimeter que recebe um parâmetro chamado side, e em seguida retorna o side dividido por 4.
const squarePerimeter = new Function("side", "return side * 4"); // O primeiro valor é o argumento e o segundo é o escopo da função.
console.log(squarePerimeter(5)); // Está atribuindo o valor 5 no parâmetro side.

//* > Propriedade length e name.

// Criado uma função chamada squareArea que contém dois parâmetros chamados n1 e n2.
function sum(n1, n2) {
  return n1 + n2; // Retorna o valor n1 somado com o n2.
}

// A propriedade length retorna o total de argumentos da função.
console.log(sum.length); // Mostra 2 no console pois a função só tem dois parâmetros/argumentos.
// A propriedade name retorna uma string com o nome da função.
console.log(sum.name); // Mostra o nome da função no console.

//* > Método call.
