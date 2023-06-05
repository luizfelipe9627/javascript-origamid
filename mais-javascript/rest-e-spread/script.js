//* > Parâmetros.

// Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
function perimeter1(side, totalSides) {
  return side * totalSides; // Retorna a multiplicação entre os valores definidos no parâmetro da função.
}

console.log(perimeter1(10, 4)); // Executa a função atribuindo valores ao parâmetro da função por fim retorna o resultado e mostra no console.
console.log(perimeter1(10)); // Executa a função e retorna NaN no console pois não foi definido um valor para um dos parâmetros.

//* > Parâmetro padrão (default) ES6.

// Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.
function perimeter2(lado, totalLados = 4) {
  return lado * totalLados; // Retorna a multiplicação entre os valores definidos no parâmetro da função.
}

console.log(perimeter2(20, 5)); // Executa a função atribuindo valores ao parâmetro da função por fim retorna o resultado e mostra no console.
console.log(perimeter2(15)); // Executa a função e passa um valor para o primeiro parâmetro da função, já que não está definindo um valor para o segundo parâmetro ele irá puxar o que já foi definido por padrão, no caso 4 e retorna e mostra o resultado no console.

//* > Arguments.
// A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.

//* > Parâmetro rest.
// É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.

//* > Único rest.
// Só é possível ter um único parâmetro rest e ele deve ser o último.

//* > Rest vs Arguments.
// Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.

//* > Operador spread.
// Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.

//* > Spread argument.
// O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.

//* > Transformar em array.
// É possível transformar itens iteráveis em uma array real com o spread.
