//* Definindo e criando string.

const food = "Pizza"; // Criado uma variável que armazena a string Pizza.
console.log(food); // Retorna a string no console.

const water = new String("Water"); // Cria um objeto do tipo construtor string.
console.log(water); // Retorna o objeto construtor no console.

// Os dois tem os mesmos métodos, mesmo um sendo um object string e outro uma string comum.
food.toLowerCase(); // o toLowerCase é uma função usada para deixar todas as letras do elemento em maiúscula.
console.log(food); // Retorna a string com todas as letras em maiúsculas.
water.toLowerCase(); // o toLowerCase é uma função usada para deixar todas as letras do elemento em maiúscula.
console.log(water); // Retorna a string com todas as letras em maiúsculas.

//* Métodos e propriedades de uma string.

// Length é uma propriedade usada para retornar quantas letras tem o valor(espaços também contam).
console.log(food.length); // Retorna "5" no console.

//* Acessar o index de uma string.

const phrase = "A melhor comida";

console.log(phrase[0]); // Retorna "A" no console.
console.log(phrase[2]); // Retorna "m" no console.
// Podemos usar o length para retornar sempre a última letra do elemento.
console.log(phrase[phrase.length - 1]); // Retorna "a" no console.
