//* > Método forEach.

const car = ["Ford", "Fiat", "Honda"];

// O forEach é um método de callback que é executado a cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index/posição do valor na array) e array (array original).
car.forEach((item, index, array) => {
  // O item é o responsável por passar por cada elemento da array.
  console.log(item); // Retorna cada item da array no console.
  console.log(index); // Retorna a posição de cada item no console.
  console.log(array); // Retorna a array original no console.
});

// Podemos passar também a função anonima(o mais recomendado é utilizando arrow function como no exemplo anterior.
car.forEach((item, index, array) => {
  // O item é o responsável por passar por cada elemento da array.
  // console.log(item); // Retorna cada item da array no console.
  // console.log(index); // Retorna a posição de cada item no console.
  // console.log(array); // Retorna a array original no console.
});

//* Arrow function.

const li = document.querySelectorAll("li"); // Está puxando todos os elementos LI do DOM.

// Arrow function é um jeito de deixar o código mais limpo e otimizado do que passando uma função anonima.
li.forEach((i) => {
  // Adiciona a classe ativa a cada LI.
  i.classList.add("ativa");
});

// Mesma coisa que o exemplo anterior mas sem a arrow function.
li.forEach(function (item) {
  item.classList.add("ativa"); // Adiciona a classe ativa a cada LI.
});

//* > Método map e a diferença comparado com o forEach.

const newCars1 = car.forEach((item) => {
  // Irá retornar undefined, pois forEach não é utilizado return.
  return "Carro " + item;
});
console.log(newCars1); // Retorna undefined no console pois o objetivo não é retorno e sim a interação de cada item.

// O método map funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
// Obs.: A variável newCars2 retorna um array nova, sendo assim diferente da array car passada com o map.
const newCars2 = car.map((item) => {
  // Retorna uma string em junção com o item(elemento da array).
  return "Carro " + item;
});
console.log(newCars2); // Retorna a array no console pois diferente do forEach o objetivo do map é exatamente o retorno final.

//* Arrow function e o método map.

const numbers = [2, 4, 6, 8, 10, 12, 14]; // Criado uma array chamada numbers contendo valores numbers.

// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow(=>).
// Nesse caso não irá precisar do return, pois é código de 1 linha, se fosse mais de uma precisaria se não iria retornar undefined.
const numbersX3 = numbers.map((n) => n * 3); // O map está passando por cada item da array. ele pega o item da array e multiplica por 3.
console.log(numbersX3); // Retorna os itens da array multiplicados por 3, 1 por 1.

//* Map vs forEach

/* 
  Map -> Utilizar sempre que o objetivo for modificar e retornar a array atual.
  forEach -> Utilizar quando o objetivo for modificar os itens de uma array.
*/

//* Map com objetos.

// Criado uma array chamada classes que contém 4 objetos.
const classes = [
  {
    name: "HTML 1",
    min: 15,
  },
  {
    name: "HTML 2",
    min: 10,
  },
  {
    name: "CSS 1",
    min: 20,
  },
  {
    name: "JS 1",
    min: 25,
  },
];

const classTime = classes.map((course) => course.min); // O map está passando por cada item(nomeado como classes) do objeto e acessando e retornando(armazenando na variável) a propriedade min do item(nomeado como course).
console.log(classTime); // Mostra no console cada valor da propriedade min do objeto.

const puxarNomes = (course) => course.name; // Criado uma função em uma constante que tem um parâmetro chamado course, que retorna o item course passado pelo map assim acessando a propriedade name do objeto.
const className = classes.map(puxarNomes); // O map está passando por cada item(nomeado como classes) do objeto e executa a função puxarNomes, que faz o item ser transferido para o parâmetro(course) da função.
console.log(className); // MMostra no console cada valor da propriedade nome do objeto.

//* > Método reduce.

const classesMinutes = [10, 25, 30]; // Criado uma array chamada classesMinutes que contém 3 itens do tipo number.

// O reduce é um método que executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
const reduceClasses = classesMinutes.reduce(
  (acumulador, item, index, array) => {
    // O acumulador pega o valor inicial(e após isso o anterior), o item pega o elemento atual que está percorrendo, o index pega a posição do item na array e por fim a array retorna a array original.
    console.log(acumulador, item, index); // Mostra todos os valores no console.
    return item + acumulador; // Retorna o item para não ficar undefined no console mais o valor do acumulador.
  },
  0 // Está definindo o valor inicial como 0(importante definir um valor se não pula a primeira iteração).
); 
console.log(reduceClasses); // Retorna a soma de cada acumulador e item no console.

//* > Usando o reduce para retornar o maior número de uma array.

const numbersList = [10, 25, 60, 5, 35, 10]; // Criado uma array chamada numbersList que contém 6 itens do tipo number.

// O reduce passa por cada item
const greaterValue = numbersList.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

console.log(greaterValue); // Retorna 60 no console pois ele foi o maior número da array.
