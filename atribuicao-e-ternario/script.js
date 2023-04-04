// Criado duas variáveis que estão armazenando um valor number.
let num1 = 20;
let num2 = 20;

// * Operadores de atribuição.

// Os operadores de atribuição são um jeito de abreviar e tornar o código mais limpo.
let sumOperator = (num1 += num2); // Mesma coisa que num1 = num1 + num2.
console.log(sumOperator); // Retorna 40 no console.
let subtractionOperator = (num1 -= num2); // Mesma coisa que num1 = num1 - num2;
console.log(subtractionOperator); // Retorna 20 no console.
let multiplicationOperator = (num1 *= num2); // Mesma coisa que num1 = num1 * num2;
console.log(multiplicationOperator); // Retorna 400 no console.
let divisionOperator = (num1 /= num2); // Mesma coisa que num1 = num1 / num2;
console.log(divisionOperator); // Retorna 20 no console.
let moduleOperator = (num1 %= num2); // Mesma coisa que num1 = num1 % num2;
console.log(moduleOperator); // Retorna 0 no console.
let exponentiationOperator = (num1 **= num2); // Mesma coisa que num1 = num1 ** num2;
console.log(exponentiationOperator); // Retorna 0 no console.

// * Operador ternário.

// O operador ternário é praticamente a abreviação do if e else.
let age = 19;
let canDrink;

canDrink = age >= 18 ? "Você pode beber." : "Você não pode beber."; // Está falando que se idade for maior ou igual a 18 irá ser verdadeiro("?"), se não(":") irá ser falso.

console.log(canDrink);

// * If e Else abreviados.

let hasCollege = false;

// Podemos usar o if e else de forma abreviado.
if (hasCollege) console.log("Sim possui.");
else console.log("Sim não possui.");
