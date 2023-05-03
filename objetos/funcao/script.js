//* > Introdução a function.

// Criado uma função chamada squareArea que contém um parâmetro chamado side.
function squareArea(side) {
  return side * side; // Retorna o valor do side dividido pelo próprio valor do side.
}
console.log(squareArea(2)); // Está atribuindo o valor 5 no parâmetro side.

// Criado uma nova função chamada squarePerimeter que recebe um parâmetro chamado side, e em seguida retorna o side dividido por 4.
const squarePerimeter = new Function("side", "return side * 4"); // O primeiro valor é o argumento e o segundo é o escopo da função.
console.log(squarePerimeter(5)); // Está atribuindo o valor 5 no parâmetro side.

//* > Propriedade length e name.

// Criado uma função chamada squareArea que contém dois parâmetros chamados n1 e n2.
function sum(n1, n2) {
  return n1 + n2; // Retorna o valor n1 somado com o n2.
}

// A propriedade length retorna o total de argumentos da função.
console.log(sum.length); // Mostra 2 no console pois a função só tem dois parâmetros/argumentos.
// A propriedade name retorna uma string com o nome da função.
console.log(sum.name); // Mostra o nome da função no console.

//* > Método call.

// Criado um objeto chamado car que contém dois elementos.
const car = {
  brand: "Ford",
  year: 2018,
};

// Criado uma função chamada descriptionCar.
function descriptionCar() {
  // Mostra no console undefined, pois não está sendo passado o objeto car para ser usado o this referenciando o objeto.
  console.log(this.brand + " " + this.year);
}

// Retorna undefined undefined no console pois não há referência do objeto car na função.
descriptionCar();
descriptionCar.call();

// O método call executa a função, sendo possível passarmos uma nova referência ao this da mesma.
descriptionCar.call(car); // Retorna Ford 2018 pois agora está referenciando o objeto car na função descriptionCar.
descriptionCar.call({ brand: "Tesla", year: 2020 }); // Podemos usar o call para passar direto as propriedades que vão ser passadas para o this.

//* > Palavra reservada this.

const cars = ["Ford", "Fiat", "VW"]; // Criado um objeto chamado cars que contém 3 elementos do tipo string.

// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().
cars.forEach((item) => {
  console.log(item); // Mostra no console cada item do objeto cars que foi passado a cada loop.
});

// Está passando por cada elemento do objeto cars, pois é o que está sendo referenciado no call, então se for passado o this em algum momento será em referencia ao objeto cars.
cars.forEach.call(cars, (item) => {
  console.log(item); // Mostra no console cada item do objeto cars que foi passado a cada loop.
}); // Log de cada Carro

const fruits = ["Banana", "Pêra", "Uva"]; // Criado um objeto chamado fruits que contém 3 elementos do tipo string.

// Está passando por cada elemento do objeto fruits, pois é o que está sendo referenciado no call, então se for passado o this em algum momento será em referencia ao objeto fruits.
cars.forEach.call(fruits, (item) => {
  console.log(item); // Mostra no console cada item do objeto fruits que foi passado a cada loop.
});

//* > Exemplo real utilizando this e o método call.

// Criado uma function constructor chamada Dom que recebe um parâmetro chamado seletor.
function Dom(seletor) {
  this.element = document.querySelector(seletor); // O this está referenciando o valor atribuído ao seletor e pegando o element passado. E então o querySelector pega a primeira LI encontrada no DOM.
}

const ul = new Dom("ul"); // Criado uma nova function constructor que está atribuindo um parâmetro para a function Dom.
console.log(ul); // Mostra no console o elemento ul puxado.

// Podemos usar a propriedade prototype para adicionar uma classe ao elemento, deve ser passado o nome da classe após o prototype pois está atribuindo a ele.
Dom.prototype.ativo = function (classe) {
  console.log(classe);
  this.element.classList.add(classe); // Mostra no console o element, o this está referenciando a função e pegando o element HTML passado e adiciona uma classe nele.
};

// Para usarmos o call precisamos passar um objeto para que seja parecido com o objeto original.
const li = {
  // Está atribuindo ao element o a primeira LI encontrada no DOM.
  element: document.querySelector("li"),
};

// Atribui ao this(dentro da função ativo criada) o objeto novo, sendo assim o element vai ser puxado do objeto li referenciado pelo this. E a classe vai ser definida pelo segundo valor que é o parâmetro da função ativo.
Dom.prototype.ativo.call(li, "ativado");
console.log(li); // Mostra no console o elemento li com a classe atribuída.

//* > Método call no protótipo construtor Array.

// Criado dentro do protótipo da Array uma function chamada showThis.
Array.prototype.showThis = function () {
  console.log(this); // Mostra no console o elemento pai referenciado, seja objeto, array e etc.
};

const moreFruits = ["Abacate", "Morango", "Manga"]; // Criado uma array chamada moreFruits contendo 3 elementos do tipo string.

moreFruits.showThis(); // Está selecionando a array moreFruits e executando a função criada dentro do prototype da Array.

Array.prototype.pop.call(moreFruits); // Está selecionando o objeto Array e em seguida selecionando a propriedade prototype que contém o método de arrays pop, usado para remover o ultimo elemento de uma array. O call está referenciando como this a array moreFruits.

moreFruits.pop(); // Ou da forma mais simples e mais utilizada, por padrão ele já faz todo esse caminho de ir na Array e depois no prototype então podemos passar direto a array e depois usar o método pop.

//* > Utilizando métodos de Array em Array-like(NodeList) utilizando o call e o protótipo construtor Array.

const liElements = document.querySelectorAll("li"); // Está selecionando no DOM todos os elementos LI e armazenando na constante liElements.
console.log(liElements); // Retorna no console uma NodeList.

// Criado uma função chamada filter que passa pelo o objeto constructor Array e acessa o prototype que é responsável pelos métodos de arrays.
// O método filter retorna a array original mas com lista de valores que durante a sua iteração retornaram um valor true, sendo assim o que for false é ignorado.
// Em seguida é passado o call para referenciar o this, que no caso é o liElements.
// Obs.: O primeiro valor é o this que está sendo referenciado pelo liElements, o segundo valor é o parâmetro do método filter chamado item.
const filter = Array.prototype.filter.call(liElements, function (item) {
  return item.classList.contains("ativo"); // Retorna um valor boolean, através de uma verificação no item atual do loop se ele contém a classe ativo.
});

console.log(filter); // Retorna no console os itens que possuem a classe ativo(se tiverem vão ser true então o método filter irá retornar).

//* > Método apply.

const numbers = [3, 4, 6, 1, 34, 44, 32]; // Criado uma array chamada numbers que contém elementos do tipo number.

// Obs.: Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar.

// O método apply funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
console.log(Math.max.apply(null, numbers)); // Retorna no console o maior número da array.

// Já método call aceita receber somente os argumento dentro da sua função.
console.log(Math.max.call(null, 3, 4, 5, 6, 7, 20)); // Retorna no console o maior número passado no argumento do método.

//* Apply vs Call.

// A única diferença entre os dois é a array como segundo argumento.

const liAll = document.querySelectorAll("li"); // Está puxando do DOM todos os elementos li e atribuindo a constante liAll criada.

// Criado uma função chamada itemHasActive que está recebendo um parâmetro nomeado como item.
function itemHasActive(item) {
  // Retorna através de um valor boolean, se o valor passado no parâmetro item contém a classe inativo, se não tiver retorna false, se tiver retorna true.
  return item.classList.contains("inativo");
}

// Criado uma constante chamada filter1 que passa pelo o objeto constructor Array e acessa o prototype que é responsável pelos métodos de arrays.
// O método filter retorna a array original mas com lista de valores que durante a sua iteração retornaram um valor true, sendo assim o que for false é ignorado.
// Em seguida é passado o call ou apply que é para referenciar o this, que no caso é o liAll.
const filter1 = Array.prototype.filter.call(liAll, itemHasActive); // Aceita somente valores passados pelo seu parâmetro.
const filter2 = Array.prototype.filter.apply(liAll, [itemHasActive]); // Aceita somente valores passados por array.

// Retorna no console os itens que possuem a classe ativo(se tiverem vão ser true então o método filter irá retornar).
console.log(filter1);
console.log(filter2);

//* > Método bind.

// Diferente de call e apply, o bind não irá executar a função mas sim retornar a mesma com o novo contexto de this.

// Criado uma função chamada filterLi que passa pelo o objeto constructor Array e acessa o prototype que é responsável pelos métodos de arrays.
// O método filter retorna a array original mas com lista de valores que durante a sua iteração retornaram um valor true, sendo assim o que for false é ignorado.
// Em seguida é passado o bind que é para referenciar o this, que no caso é o liAll, só que o bind não executa a função, tem que ser chamada fora do escopo.
// Obs.: O primeiro valor é o this que está sendo referenciado pelo liAll, o segundo valor é o parâmetro do método filter chamado item.
const filterLi = Array.prototype.filter.bind(liAll, function (item) {
  // Retorna através de um valor boolean, se o valor passado no parâmetro item contém a classe ativado, se não tiver retorna false, se tiver retorna true.
  return item.classList.contains("ativado");
});

console.log(filterLi()); // Está executando a função filterLi.

//* > Argumentos e Bind.

// Criado um objeto chamado newCar que contém três elementos, sendo um deles uma função.
const newCar = {
  brand: "Ford",
  year: 2018,
  // Criado uma função chamada acelerar que recebe dois parâmetros, um chamado aceleração e outro chamado tempo.
  acelerar: function (aceleracao, tempo) {
    return `${this.brand} acelerou ${aceleracao} em ${tempo}`; // Retorna a propriedade brand do objeto, e o parâmetro aceleracao e tempo concatenado com uma string.
  },
};
console.log(newCar.acelerar(100, 20)); // Retorna Ford acelerou 100 em 20 no console.

// Criado um objeto chamado honda que contém um elemento com o nome igual(importante ser igual) ao original.
const honda = {
  brand: "Honda",
};

const acelerarHonda = newCar.acelerar.bind(honda, "300"); // Criado uma função chamada acelerarHonda que seleciona a função acelerar dentro do objeto newCar e utiliza o método bind para tornar o objeto honda o novo this a ser referenciado e não mais o objeto pai(newCar). Como segundo valor podemos definir o valor do parâmetro da função.
console.log(acelerarHonda(10)); // Retorna Honda acelerou 200 em 10 no console.

//* Argumentos comuns.

// Criado uma função chamada imc que recebe dois parâmetros, um chamado altura e outro chamado peso.
function imc(altura, peso) {
  return peso / (altura * altura); // Retorna o resultado da a altura multiplicada pela altura e em seguida dividida pelo peso.
}

// Obs.: Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar.
const imc180 = imc.bind(null, 1.8); // Está acessando a função imc e o bind está definindo o valor do primeiro parâmetro(altura) como padrão. A constante imc180 é a função imc só que com seu parâmetro alterado.

console.log(imc(1.8, 70)); // Na função normal passamos os dois valores do parâmetro e retorna 21.6 no console.
console.log(imc180(70)); // Utilizando o bind retorna 21.6 no console da mesma forma pois já está definido 1.8 na altura como padrão.
