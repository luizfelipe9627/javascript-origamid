// Criado uma variável que está armazenando um valor number.
let num1 = 20;
let num2 = 20;

// Os operadores de atribuição são um jeito de abreviar e tornar o código mais limpo.
let sumOperator = (num1 += num2); // Mesma coisa que num1 = num1 + num2.
console.log(sumOperator); // 40
let subtractionOperator = (num1 -= num2); // Mesma coisa que num1 = num1 - num2;
console.log(subtractionOperator); // 20
let multiplicationOperator = (num1 *= num2); // Mesma coisa que num1 = num1 * num2;
console.log(multiplicationOperator); // 400
let divisionOperator = (num1 /= num2); // Mesma coisa que num1 = num1 / num2;
console.log(divisionOperator); // 20
let moduleOperator = (num1 %= num2); // Mesma coisa que num1 = num1 % num2;
console.log(moduleOperator); // 0
let exponentiationOperator = (num1 **= num2); // Mesma coisa que num1 = num1 ** num2;
console.log(exponentiationOperator); // 0

// O operador ternário é praticamente a abreviação do if e else.
let age = 19;
let canDrink;
// Está falando que se idade for maior ou igual a 18 irá ser verdadeiro("?"), se não(":") irá ser falso.
canDrink = age >= 18 ? "Você pode beber." : "Você não pode beber.";
console.log(canDrink);

// Podemos usar o if e else de forma abreviado.
let hasCollege = false;
if (hasCollege) console.log("Sim possui.");
else console.log("Sim não possui.");
