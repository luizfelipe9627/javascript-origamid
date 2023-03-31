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

// Operador de comparação maior(">") verifica se o primeiro valor é maior que o segundo, se for retorna true, caso contrario false.
let maior = 2 > 5; 
console.log(maior); // É false pois 2 não é maior que 5.
// Operador de comparação menor("<") verifica se o primeiro valor é menor que o segundo, se for retorna true, caso contrario false.
let menor = 5 < 10;
console.log(menor); // É true pois 5 é menor que 10.
// Operador de comparação menor igual("<=") verifica se o primeiro valor é menor ou igual ao segundo, se for retorna true, caso contrario false.
let menorIgual = 10 <= 10;
console.log(menorIgual); // É true pois 10 é igual a 10.
// Operador de comparação menor igual("<=") verifica se o primeiro valor é menor ou igual ao segundo, se for retorna true, caso contrario false.
let maiorIgual = 10 >= 11;
console.log(maiorIgual); // É false pois 10 não é maior ou igual a 11.

// O operador lógico de negação("!") inverte os valores, sendo assim o true vira false e vice versa. Assim executando o comando dentro do if.
if(!possuiMBA) {
  console.log('Não possui MBA.');
}
// Para verificar se algo é true ou false podemos usar duas negações ("!!"), assim fazendo ele negar e depois voltar ao valor original.
if(!!possuiMBA) {
  console.log('Não possui MBA.');
} else {
  console.log('Possui MBA.');
}

// O operador lógico de comparação igual("==") diz por true ou false se o valor é igual um do outro, sem restringir o tipo.
let igualNum = '10';
// Irá retornar no console true pois eles são o mesmo número.
console.log(igualNum == 10);
// O operador lógico de comparação igual("===") diz por true ou false se o valor é igual um do outro, restringindo o tipo.
let igualTipo = '23';
// Irá retornar no console false pois eles não são do mesmo tipo.
console.log(igualTipo === 23);

// O operador lógico diferente("!=") diz por true ou false se o valor é diferente um do outro, sem restringir o tipo.
let diferenteNumber = '451';
// Irá retornar no console true pois eles são diferentes.
console.log(diferenteNumber != 23);
// O operador lógico diferente("!==") diz por true ou false se o valor é diferente um do outro, restringindo o tipo.
let diferenteString = 'Cachorro';
// Irá retornar no console false pois eles não são diferentes.
console.log(diferenteString !== 'Cachorro');

// O operador lógico and("&&") só retorna true caso os dois valores sejam verdadeiros, se algum ser false ele irá ignorar o true e vai retornar o false.
let operadorAnd = (5 - 5) && (5 + 5);
if(operadorAnd) {
  console.log('Verdadeiro.', operadorAnd);
} else {
  // 5 - 5 é 0 e o número 0 é um valor false, então ele irá pular para o false.
  console.log('Falso.', operadorAnd);
}

// O operador lógico ou("||") só retorna true caso algum dos valores for true, se os dois for false ele irá retornar false.
