let numNormal = 19; // Criado uma variável armazenando um valor do tipo number.
console.log(numNormal); // Retorna 19 no console.

let numExp = 10e2; // Criado uma variável que tem como valor o tipo number exponenciado.
console.log(numExp); // Retorna 1000 no console.

let numBroken = 10.52; // Criado uma variável que tem como valor o tipo number Broken.
console.log(numBroken); // Retorna 10.52 no console.

let sum = 10 + 5 + 2; // Criado uma variável que contém o operador aritmético de sum(+).
console.log(soma); // Retorna 17 no console.

let division = 100 / 2; // Criado uma variável que contém o operador aritmético de divisão(/).
console.log(division); // Retorna 50 no console.

let module = 962723 % 4; // Criado uma variável que contém o operador aritmético de módulo, resto de divisão(/).
console.log(module); // Retorna 3 no console.

let testNaN = "Isso é 100" / 2; // Criado uma variável que contém uma string divido por 2, assim se tornando um NaN(Not a number).
console.log(testNaN); // Retorna NaN no console.
console.log(isNaN(testNaN)); // Retorna true no console. O isNaN é uma função que verifica se algo é NaN ou não.

// No JavaScript tem uma ordem em que os operadores são executados primeiro vai a multiplicação, depois a divisão e por fim a soma.
let ordemExecution1 = 10 + 20 + 50 + (19 * 10) / 2;
console.log(ordemExecution1); // Retorna 175 no console.

let ordemExecution2 = (10 + 20 + 50 + 19 * 10) / 2; // Para priorizar algum operador usamos os "()".
console.log(ordemExecution2); // Retorna 135 no console.

// O incremento ou decremento é usado para acrescentar/retirar um número do valor inicial.
let increment1 = 5;
increment1++;
console.log(increment1); // Retorna 6 no console.

// Podemos transformar uma sting em um number incrementando/retirando número do valor inicial
let increment2 = +"28";
increment2 = -5;
console.log(increment2); // Retorna -5 no console.
