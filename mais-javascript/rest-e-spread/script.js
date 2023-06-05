//* > Parâmetros.

// Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
function perimeter1(side, totalSides) {
  return side * totalSides; // Retorna a multiplicação entre os valores definidos no parâmetro da função.
}

console.log(perimeter1(10, 4)); // Executa a função atribuindo valores ao parâmetro da função por fim retorna o resultado e mostra no console.
console.log(perimeter1(10)); // Executa a função e retorna NaN no console pois não foi definido um valor para um dos parâmetros.

//* > Parâmetro padrão (default) ES6.

// Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.
function perimeter2(side, totalSides = 4) {
  return side * totalSides; // Retorna a multiplicação entre os valores definidos no parâmetro da função.
}

console.log(perimeter2(20, 5)); // Executa a função atribuindo valores ao parâmetro da função por fim retorna o resultado e mostra no console.
console.log(perimeter2(15)); // Executa a função e passa um valor para o primeiro parâmetro da função, já que não está definindo um valor para o segundo parâmetro ele irá puxar o que já foi definido por padrão, no caso 4 e retorna e mostra o resultado no console.

//* > Arguments.

function perimeter3(side, totalSides = 4) {
  // A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.
  console.log(arguments); // Mostra no console uma array-like com todos os argumentos da função.
  return side * totalSides; // Retorna a multiplicação entre os valores definidos no parâmetro da função.
}

console.log(perimeter3(10)); // Executa a função e passa um valor para o primeiro parâmetro da função, já que não está definindo um valor para o segundo parâmetro ele irá puxar o que já foi definido por padrão, no caso 4 e retorna e mostra o resultado no console.
console.log(perimeter3(20, 4, 30)); // Executa a função atribuindo valores ao primeiro e segundo parâmetro da função. O terceiro valor se torna estático pois não é usado e nem atribuído a nada a nao ser no arguments.

//* > Parâmetro rest.

// É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.
function announceWinners1(...winners) {
  // O forEach percorre por cada valor atribuído/armazenado no parâmetro da função.
  winners.forEach((winner) => {
    console.log(winner + " ganhou."); // Mostra no console o parâmetro atual que o forEach está concatenado com uma string.
  });
}

console.log(announceWinners1("Pedro", "Marta", "Maria")); // Executa a função atribuindo todos os valores ao parâmetro da função e por fim mostra o resultado no console.

//* > Único rest.

// Só é possível ter um único parâmetro rest e ele deve ser o último.
function announceWinners2(reward, ...winners) {
  // O forEach percorre por cada valor atribuído/armazenado no parâmetro da função.
  winners.forEach((winner) => {
    console.log(winner + " ganhou um " + reward); // Mostra no console o parâmetro atual que o forEach está e concatenado com uma string e o primeiro parâmetro da função.
  });
}

console.log(announceWinners2("Carro", "Pedro", "Marta", "Maria")); // Executa a função atribuindo valores ao parâmetro da função e por fim mostra o resultado no console. O primeiro valor é o que vai ser armazenado no parâmetro reward e o restante no winners.

//* > Rest vs Arguments.

// Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.
function announceWinners3(reward, ...winners) {
  console.log(winners); // Mostra no console os valores atribuídos nos parâmetros da função.
  console.log(arguments); // Mostra no console todos os parâmetros atribuídos a função.
}

console.log(announceWinners3("Carro", "Pedro", "Marta", "Maria")); // Executa a função atribuindo valores ao parâmetro da função e por fim mostra o resultado no console. O primeiro valor é o que vai ser armazenado no parâmetro reward e o restante no winners.

//* > Operador spread.

// Criado duas constantes que armazenam uma array.
const fruits = ["Banana", "Uva", "Morango"];
const vegetables = ["Cenoura", "Batata"];

// Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.
const food = [...fruits, "Pizza", ...vegetables]; // Armazena na constante food todos os elementos fruits(...), vegetables(...) e os valores definidos.

//* > Spread argument.

const maximumNumber = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // Armazena na constante maximumNumber o número maior passado no método max.

const listNumbers = [1, 13, 21, 12, 55, 2, 3, 43]; // Armazena na constante listNumbers uma array de números.

// O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
const maximumNumberSpread = Math.max(...listNumbers); // Armazena na constante maximumNumberSpread, o maior número da array armazenada na constante listNumbers.

//* > Transformar em array.

// É possível transformar itens iteráveis em uma array real com o spread.

const buttons = document.querySelectorAll("button"); // Está puxando do DOM todos os elementos do tipo button e armazenando na constante buttons como uma NodeList.
const buttonsArray = [...buttons]; // Está armazenando na constante buttonsArray os button no formato array.
console.log(buttonsArray); // Mostra a array contendo os button no console.

const phrase = "Isso é JavaScript"; // Criado uma constante chamada phrase que armazena uma string.
const phraseArray = [...phrase]; // Armazena na constante phraseArray cada letra armazenado na string phrase e retorna em array.
console.log(phraseArray); // Mostra no console uma array contendo cada letra da string.
