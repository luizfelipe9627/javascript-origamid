// Criado uma variável armazenando um valor do tipo number.
let numNormal = 19;
console.log(numNormal);
// Criado uma variável que tem como valor o tipo number exponenciado.
let numExp = 10e2;
console.log(numExp);
// Criado uma variável que tem como valor o tipo number quebrado.
let numQuebrado = 10.52;
console.log(numQuebrado);

// Criado uma variável que contém o operador aritmético de soma(+).
let soma = 10 + 5 + 2;
console.log(soma);
// Criado uma variável que contém o operador aritmético de divisão(/).
let divisao = 100 / 2;
console.log(divisao);
// Criado uma variável que contém o operador aritmético de módulo, resto de divisão(/).
let modulo = 962723 % 4;
console.log(modulo);

// Criado uma variável que contém uma string divido por 2, assim se tornando um NaN(Not a number).
let testeNaN = 'Isso é 100' / 2;
console.log(testeNaN);
// O isNaN é uma função que verifica se algo é NaN ou não.
console.log(isNaN(testeNaN));

// No JavaScript tem uma ordem em que os operadores são executados primeiro vai a multiplicação, depois a divisão e por fim a soma.
let ordemExecucao1 = 10 + 20 + 50 + 19 * 10 / 2;
console.log(ordemExecucao1);
// Para priorizar algum operador usamos os "()".
let ordemExecucao2 = (10 + 20 + 50 + 19 * 10) / 2;
console.log(ordemExecucao2);

// O incremento ou decremento é usado para acrescentar/retirar um número do valor inicial.
let incremento1 = 5;
incremento1++;
console.log(incremento1);

// Podemos transformar uma sting em um number incrementando/retirando número do valor inicial
let incremento2 = +'28';
incremento2 = -5;
console.log(incremento2);