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
  0 // Está definindo o valor inicial(o parâmetro acumulador) como 0(importante definir um valor se não pula a primeira iteração).
);
console.log(reduceClasses); // Retorna a soma de cada acumulador e item no console.

//* > Usando o reduce para retornar o maior número de uma array.

const numbersList = [10, 25, 60, 5, 35, 10]; // Criado uma array chamada numbersList que contém 6 itens do tipo number.

// O reduce passa por cada item tendo dois parâmetros(o valor anterior, e o valor atual que é o que realmente passa por cada elemento da array).
const higherNumber = numbersList.reduce((anterior, atual) => {
  // Se anterior for maior que atual irá executar o if.
  if (anterior > atual) {
    return anterior; // Retorna o número anterior, fazendo assim ele preencher o parâmetro atual do método.
  }
  // Se não, irá executar o else.
  else {
    return atual; // Retorna o número atual, fazendo ele ocupar o lugar do parâmetro atual do método.
  }
}, 0); // Está definindo o valor inicial(o parâmetro anterior) como 0(importante definir um valor para não ter risco de pular a primeira iteração).

console.log(higherNumber); // Retorna 60 no console pois ele foi o maior número da array.

//* > Usando o método reduce para objetos.

// O reduce passa por cada item tendo dois parâmetros(o valor anterior(nomeado como acumulador), o valor atual que é o que realmente passa por cada elemento da array e também o index que é a posição de cada elemento na array.
const listClasses = classes.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.name; // Está pegando o acumulador(um objeto vazio), e passando como índice da array vazia o index da array classes, e atribuindo no elemento atual(o que percorre cada objeto) a propriedade name.
  console.log(acumulador); // Mostra o acumulador a cada loop no console.
  return acumulador; // Retorna o acumulador e atribui ao parâmetro esse valor vai ser mudado a cada loop.
}, {});

//* > Método reduceRight.

const fruits = ["Banana", "Pêra", "Uva"];

// O método reduce e o reduceRight são praticamente iguais, a diferença é que este começa a iterar da direita para a esquerda(de trás para frente).
const fruitsRight = fruits.reduceRight((acumulador, fruta) => {
  return acumulador + " " + fruta; // Retorna o elemento anterior(acumulador) somado com a fruta(elemento atual).
});
console.log(fruitsRight); // Retorna no console a iteração de trás para frente.

// Já o método reduce itera da esquerda para a direita(de frente para trás).
const fruitsLeft = fruits.reduce((acumulador, fruta) => {
  return acumulador + " " + fruta; // Retorna o elemento anterior(acumulador) somado com a fruta(elemento atual).
});
console.log(fruitsLeft); // Retorna no console a iteração de frente para trás.

//* > Método some.

// O método some passa por cada elemento da array e é usado para retornar um valor boolean se pelo menos uma iteração for true retornara true, se todas forem false ele retorna false.
const hasGrape2 = fruits.some((fruta) => {
  // Retorna true somente se a fruta for igual a uva, nesse caso não existe uvas na array então retorna false.
  return fruta === "Uvas";
});
console.log(hasGrape2); // Retorna false no console pois não existe uma fruta chamada Uvas na array.

const numbers1 = [0, 43, 22, 88, 101, 2]; // Criado uma array contendo tipo number.

const hasBigger1 = numbers1.some((num) => num > 3); // Retorna true pois ele encontrou numbers na array que são maiores que 3, sendo assim teve valor true.
console.log(hasBigger1); // Mostra true no console.

//* > Método every.

const moreFruits = ["Laranja", "Ameixa", "", "Maçã"];

// O método every passa por cada elemento da array e é usado para retornar um valor boolean se pelo menos uma iteração for false irá retornar false, se todas forem true ele retorna true.
const hasFruit = moreFruits.every((fruta) => {
  // Retorna undefined pois pelo menos uma fruta está vazia '', o que é um valor false.
  return fruta;
});
console.log(hasFruit); // Retorna false no console, pois não são todos elementos que são true.

const numbers2 = [0, 43, 22, 88, 101, 2]; // Criado uma array contendo tipo number.

const hasBigger2 = numbers2.every((num) => num > 10); // Retorna false pois ele encontrou numbers na array que não são maiores que 10, sendo assim teve valor false.
console.log(hasBigger2); // Mostra true no console.

//* > Método find e findIndex.

// O find é um método que retorna o valor atual da primeira iteração que retornar um valor boolean true.
const daysWeek = [1, 2, 3, 4, 5, 6, 7]; // Criado uma array chamada cities que contém elementos do tipo number.
const searchDay = daysWeek.find((x) => x > 4); // Se x for maior que 4 ele irá retornar o número maior do que 4.
console.log(searchDay); // Retorna 5 no console, pois 5 é o primeiro valor maior que 4(sendo assim true).

const cities = ["São Paulo", "Rio de Janeiro", "Fortaleza", "Recife"]; // Criado uma array chamada cities que contém elementos do tipo string.

// O método findIndex ao invés de retornar o valor, retorna o index/posição deste valor na array.
const searchCity = cities.findIndex((cidade) => {
  // Retorna o index do elemento da array encontrado.
  return cidade === "Fortaleza";
});
console.log(searchCity); // Retorna 2 no console pois Fortaleza está no index 2.

//* > Método filter.

const names = ["Carolina", undefined, null, "", "Gabriel", 0, "Alessandra"]; // Criado uma array chamada names que contém elementos do tipo string, undefined, null e false.

// O método filter retorna a array original mas com lista de valores que durante a sua iteração retornaram um valor true, sendo assim o que for false é ignorado.
const cleanArray = names.filter((name) => {
  // Retorna cada elemento da array names.
  return name;
});
console.log(cleanArray); // Retorna somente os valores que são true no console.

const randomNumbers = [6, 43, 22, 88, 101, 29]; // Criado uma array chamada names que contém elementos do tipo number.
const searchNumber = randomNumbers.filter((x) => x > 45); // Retorna todo o número que o x for maior que 45.
console.log(searchNumber); // Retorna a array filtrada somente com os elementos que são true conforma a condição passada no filter.

//* > Método filter em objetos.

// Criado uma array chamada moreClasses que contém 4 objetos.
const moreClasses = [
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

// O método filter retorna a array original mas com lista de valores que durante a sua iteração retornaram um valor true, sendo assim o que for false é ignorado.
const greatestMinute = moreClasses.filter((aula) => {
  // Retorna os elementos da array em que min teve o tempo de aula maior que 15.
  return aula.min > 15;
});
console.log(greatestMinute);
