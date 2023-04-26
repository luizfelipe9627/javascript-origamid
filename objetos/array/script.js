//* > Introdução a arrays.

const citys = ["São Paulo", "Rio de Janeiro", "Ribeirão Preto"]; // Criado uma array contendo 3 elementos do tipo string.
console.log(citys); // Retorna a array no console.
const price = [49, 99, 69, 89]; // Criado uma array contendo 4 elementos do tipo number.
console.log(price); // Retorna a array no console.

// Numa mesma array podemos trabalhar com vários tipos de dados, como: number, string, object, array dentro de array, função e etc.
const datas = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

console.log(datas[2]("Ford")); // Está acessando o segundo elemento da Array no caso a função, e está passando um parâmetro para ela fazendo ela ser executada..
console.log(datas[1][2].cor); // Está acessando o segundo elemento, no caso o objeto e em seguida acessando o terceiro elemento da array, no caso o objeto, e por fim acessando o elemento do objeto.

//* > Construção de arrays.

const instruments = ["Guitarra", "Baixo", "Violão"]; // Criado uma array comum contendo 3 elementos.
console.log(instruments); // Retorna a array no console.
const car = new Array("Corola", "Mustang", "Honda"); // Criado uma array chamada car que está recebendo 3 elementos.
console.log(car); // Retorna a nova array no console.

console.log(instruments[2]); // Retorna Violão no console.
console.log(car[1]); // Retorna Mustang no console.
console.log((car[2] = "Ferrari")); // Está reescrevendo o valor de Honda para Ferrari no console.
console.log((car[10] = "Parati")); // Está criando no index 10 a string chamada Parati.

console.log(car.length); // Retorna 3 no console, pois são apenas 3 elementos.
// 11
