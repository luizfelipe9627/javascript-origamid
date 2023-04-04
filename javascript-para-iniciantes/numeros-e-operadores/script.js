let numNormal = 19; // Criado uma variável armazenando um valor do tipo number.
console.log(numNormal); // Retorna 19 no console.

let numExp = 10e2; // Criado uma variável que tem como valor o tipo number exponenciado.
console.log(numExp); // Retorna 1000 no console.

let numQuebrado = 10.52; // Criado uma variável que tem como valor o tipo number quebrado.
console.log(numQuebrado); // Retorna 10.52 no console.

let soma = 10 + 5 + 2; // Criado uma variável que contém o operador aritmético de soma(+).
console.log(soma); // Retorna 17 no console.

let divisao = 100 / 2; // Criado uma variável que contém o operador aritmético de divisão(/).
console.log(divisao); // Retorna 50 no console.

let modulo = 962723 % 4; // Criado uma variável que contém o operador aritmético de módulo, resto de divisão(/).
console.log(modulo); // Retorna 3 no console.

let testeNaN = "Isso é 100" / 2; // Criado uma variável que contém uma string divido por 2, assim se tornando um NaN(Not a number).
console.log(testeNaN); // Retorna NaN no console.
console.log(isNaN(testeNaN)); // Retorna true no console. O isNaN é uma função que verifica se algo é NaN ou não.

// No JavaScript tem uma ordem em que os operadores são executados primeiro vai a multiplicação, depois a divisão e por fim a soma.
let ordemExecucao1 = 10 + 20 + 50 + (19 * 10) / 2;
console.log(ordemExecucao1); // Retorna 175 no console.

let ordemExecucao2 = (10 + 20 + 50 + 19 * 10) / 2; // Para priorizar algum operador usamos os "()".
console.log(ordemExecucao2); // Retorna 135 no console.

// O incremento ou decremento é usado para acrescentar/retirar um número do valor inicial.
let incremento1 = 5;
incremento1++;
console.log(incremento1); // Retorna 6 no console.

// Podemos transformar uma sting em um number incrementando/retirando número do valor inicial
let incremento2 = +"28";
incremento2 = -5;
console.log(incremento2); // Retorna -5 no console.
