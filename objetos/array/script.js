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
console.log((car[10] = "Parati")); // Está criando um elemento no index 11 a string chamada Parati(quando criado assim os index anteriores ficarão vazios).

console.log(car.length); // Retorna 3 no console, pois são apenas 3 elementos.

//* > Método Array.from.

const li = document.querySelectorAll("li"); // Está puxando todos os elementos LI do DOM.

console.log(li); // Retorna uma array-like(nodeList) no console.
// O Array.from é um método usado para transformar uma array-like(nodeList) em uma array.
const arrayLI = Array.from(li); // Armazena a conversão da array-like para array.
console.log(arrayLI); // Retorna no console a array.

//* > Método Array.isArray.

// O Array.isArray é um método usado para verificar se o valor passado é uma array ou não, através de valor boolean.
console.log(Array.isArray(li)); // Retorna false no console, pois é uma nodeList e não uma array.
console.log(Array.isArray(arrayLI)); // Retorna true no console, pois foi convertido a nodeList para uma array.

//* > Métodos de criação de array.

console.log(Array.of(10)); // Cria uma array contendo 10 itens vazios.
console.log(Array.of(1, 2, 3, 4)); // Cria uma array contendo 4 itens do tipo number.
console.log(new Array(5)); // Cria uma nova array contendo 5 itens vazios.
console.log(Array(5)); // Cria uma nova array contendo 5 itens vazios.
console.log(Array(1, 2, 3, 4)); // Cria uma array contendo 4 itens do tipo number.

//* > Propriedade length.

const frutas = ["Banana", "Maçã", ["Uva Roxa", "Uva Verde"]]; // Criado uma array chamada frutas contendo outra array dentro.
console.log(frutas); // Retorna no console a array frutas.

// A propriedade length é usado para retornar o tamanho da array.
console.log(frutas.length); // Retorna 3 no console, pois há 3 elementos na array frutas.
console.log(frutas[0].length); // Retorna 6 no console pois ele ta contando quantas letras há no primeiro elemento da array.
console.log(frutas[1].length); // Retorna 4 no console pois ele ta contando quantas letras há no segundo elemento da array.
console.log(frutas[2].length); // Retorna 2 no console pois ele ta contando quantos elementos há presente dentro da array criada.
console.log(frutas[2][0].length); // Retorna 8 no console pois ele ta contando quantas letras há no primeiro elemento da array filho.

//* > Método modificador sort.

const names = ["Zac", "Laura", "Carlos", "Felipe"]; // Criado uma array contendo 4 elementos string.
// O método sort é usado para ordenar os itens de uma array em ordem alfabética.
console.log(names.sort()); // Retorna a array com as string organizados por ordem alfabética.
console.log(names); // Modificou a array, sendo assim reescreveu a array original.

const ages = [32, 21, 33, 43, 1, 12, 8]; // Criado uma array contendo 7 elementos number.
// O método sort também pode ser usado para ordenar números a partir do seu caractere, sendo assim ele irá primeira ordenar do menor para o maior contando o primeiro caractere e depois de terminar todos ele vai para o segundo.
console.log(ages.sort()); // Retorna a array com os números em ordem crescente.
console.log(ages); // Modificou a array, sendo assim reescreveu a array original.

//* > Método modificador unshift.

const carBrand = ["Ford", "Fiat", "VW"]; // Criado uma array chamada carBrand que contém 3 elementos do tipo string.
// O método unshift é usado para adicionar elementos ao inicio da array e retorna o length(tamanho) da array.
console.log(carBrand.unshift("Honda", "Kia")); // Adiciona os elementos no inicio da array e retorna o tamanho da array no console, no caso 5.
console.log(carBrand); // Retorna a array com os dois elementos criados no inicio dela.

//* > Método modificador push.

// O método push é usado para adicionar elementos ao final da array e retorna o length(tamanho) da array.
console.log(carBrand.push("Ferrari")); // Adiciona o elemento no final da array e retorna o tamanho da array no console, no caso 6.
console.log(carBrand); // Retorna a array com o elemento criado no final dela.

//* > Método modificador shift.

// O método shift é usado para remover o primeiro elemento da array e retorna o elemento removido.
console.log(carBrand.shift()); // Mostra a string removida da array no console.
console.log(carBrand); // Retorna a array modificada, sendo assim sem o elemento removido.

//* > Método modificador pop.

// O método pop é usado para remover o ultimo elemento da array e retorna o elemento removido.
console.log(carBrand.pop()); // Mostra a string removida da array no console.
console.log(carBrand); // Retorna a array modificada, sendo assim sem o elemento removido.

//* > Método modificador reverse.

// O método reverse é usado para inverter os itens da array e retorna a nova array.
console.log(carBrand.reverse()); // Retorna no console a array com a ordem invertida.
console.log(carBrand); // Retorna a array modificada, sendo assim ele invertido.

//* > Método modificador splice.

// O método splice é usado para adicionar valores na array a partir do seu index, também remove a quantidade de itens que for passada no segundo parâmetro e retorna eles.
console.log(carBrand.splice(1, 0, 'Uno', 'Chevrolet')); // Adiciona os elementos a partir do index 1 e remove 0 elementos, retorna no console uma array vazia.
console.log(carBrand); // Retorna no console os elementos adicionados a partir do index 1.

console.log(carBrand.splice(3, 2, 'Uno', 'Chevrolet')); // Adiciona os elementos a partir do index 3 e remove 2 elementos da array, retorna os elementos da array no console.
console.log(carBrand); // Retorna no console os elementos adicionados a partir do index 3 mas sem os elementos removidos.

//* > Método modificador copyWithin.


