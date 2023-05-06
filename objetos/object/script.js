//* > Introdução a constructor object.

// Criado um objeto chamado car que contém duas propriedades.
const car = {
  brad: "Ford",
  year: 2018,
};
console.log(car);

// Criado um novo objeto chamado person que contém duas propriedades.
const person = new Object({
  name: "André",
  age: 28,
});
console.log(person);

//* > Método create.

const newCar = {
  wheels: 4,
  // Criado um método chamado init que contém um parâmetro nomeado como brand.
  init(brand) {
    // O this referencia sempre o objeto pai, sendo assim é a mesma coisa que se for passar o o objeto newCar.
    this.brand = brand; // Atribui ao objeto o parâmetro brand para ser usado em outros lugares.
    return this; // Retorna o objeto newCar inteiro.
  },
  // Criado um método chamado speedUp.
  speedUp() {
    // O this referencia sempre o objeto pai, sendo assim é a mesma coisa que se for passar o o objeto newCar.
    return `${this.brand} acelerou as ${this.wheels} rodas`; // Retorna o valor brand e do wheels presente dentro do objeto newCar.
  },
  // Criado um método chamado honk.
  honk() {
    // O this referencia sempre o objeto pai, sendo assim é a mesma coisa que se for passar o o objeto newCar.
    return this.brand + " buzinou"; // Retorna o valor brand presente dentro do objeto newCar.
  },
};

// O método create retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
const honda = Object.create(newCar); // Criado um novo objeto chamado honda que recebe os elementos do objeto newCar e armazena no prototype, sendo assim não irá aparecer no objeto mas pode ser chamado.
console.log(honda.init("Honda").speedUp()); // Retorna no console o método init preenchendo o valor do parâmetro brand e em seguida executa o método speedUp também presente no objeto newCar.

//* > Método assign.

const automobileFunction = {
  // Criado um método chamado speedUp.
  speedUp() {
    return "acelerou"; // Retorna uma string quando executado a função.
  },
  // Criado um método chamado honk.
  honk() {
    return "buzinou"; // Retorna uma string quando executado a função.
  },
};

// Criado um objeto chamado twisterMotocycle que contém duas propriedades.
const twisterMotocycle = {
  rodas: 2,
  capacete: true,
};

// Criado um objeto chamado ferrariCar que contém duas propriedades.
const ferrariCar = {
  rodas: 4,
  mala: true,
};

// O método assign adiciona ao alvo(nesse caso o alvo é a função twisterMotocycle e o ferrariCar) as propriedades e métodos passadas a partir do segundo valor. O assign irá modificar o objeto alvo.
const assignTwister = Object.assign(twisterMotocycle, automobileFunction);
console.log(assignTwister); // Mostra no console o objeto twisterMotocycle em conjunto com os elementos do automobileFunction.
const assignFerrari = Object.assign(ferrariCar, automobileFunction);
console.log(assignFerrari); // Mostra no console o objeto assignFerrari em conjunto com os elementos do automobileFunction.

// Sendo assim agora que foi passado as propriedades do alvo(objeto a ser adicionado) podemos acessar diretamente através das constantes criadas.
console.log(assignTwister.speedUp());
console.log(assignFerrari.honk());

//* > Método defineProperties.

const city = {
  name: "São Paulo",
  location: "Brazil",
};

// O método defineProperties adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
// O primeiro valor é o alvo(objeto), e o segundo é um objeto que vai conter as propriedades definidas.
Object.defineProperties(city, {
  // Criado um elemento chamado age.
  age: {
    // Por padrão todas opções boolean são false, então não precisa definir false.
    value: 469, // Value é o valor que vai ser atribuído no elemento age.
    configurable: false, // Usado para permitir se pode ser deletado ou não.
    writable: true, // Usado para permitir ou não alteração de valor.
    enumerable: false, // Usado para tornar a função enumerável ou não.
  },
});

city.age = 150; // Irá alterar pois o writable está permitindo.
delete city.age; // Não irá deletar por conta do configurable não deixar.
console.log(city); // Retorna o objeto com o elemento age acrescentado.

//* > Método defineProperties utilizando os métodos get e set.

// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade, a função get é ativada e ao setarmos a função de set é ativada.

const train = {};
Object.defineProperties(train, {
  speed: {
    // O get é usado para pegar/puxar um valor.
    get() {
      return this._speed; // Retorna o objeto e a criação de uma variável(_speed) para que quando definido o valor no set ele puxe para o get.
    },
    // O set é usado para definir/criar um valor.
    set(valor) {
      this._speed = "Velocidade " + valor; // Está definindo valor * 4 a variável(_speed) do get.
    },
  },
});

train.speed = 200; // Está atribuindo ao set o parâmetro com um valor number
console.log(train.speed); // Retorna no console uma string concatenado com o valor atribuído no set. O get puxa o retorno/resultado após ter passado pelo set.

//* > Método getOwnPropertyDescriptors.

// O método getOwnPropertyDescriptors lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
console.log(Object.getOwnPropertyDescriptors(Array)); // Mostra no console uma lista com métodos e propriedades de um Object Construtor Array.

console.log(Object.getOwnPropertyDescriptors(Array.prototype)); // Mostra no console uma lista com métodos e propriedades do protótipo de Array.

console.log(Object.getOwnPropertyDescriptor(window, "innerHeight")); // Mostra filtrado no console, pois puxa de uma única propriedade.

//* > Métodos keys, values e entries.

// O método keys retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
console.log(Object.keys(Array)); // Retorna uma array vazia([]) no console, pois não possui propriedades enumeráveis.
console.log(Object.keys(car)); // Retorna ['brand', 'year'] no console.

// O método values retorna uma array com os valores do objeto.
console.log(Object.values(car)); // Retorna ['Ford', 2018] no console.

// O método entries retorna uma array com array's contendo a chave e o valor.
console.log(Object.entries(car)); // Retorna [['brand', 'Ford'], ['year', 2018]] no console.

//* > Método getOwnPropertyNames.

// O método getOwnPropertyNames retorna uma array com todas as propriedades diretas do objeto, incluindo os enumeráveis (não retorna as do protótipo).
console.log(Object.getOwnPropertyNames(Array)); // Retorna ['length', 'name', 'prototype', 'isArray', 'from', 'of'] no console.
console.log(Object.getOwnPropertyNames(Array.prototype)); // Retorna [..., 'filter', 'map', 'every', 'some', 'reduce', ...] no console.
console.log(Object.getOwnPropertyNames(car)); // Retorna ['brand', 'year'] no console.

//* > Métodos getPrototypeOf e is.

// O método getPrototypeOf retorna o protótipo do objeto.
console.log(Object.getPrototypeOf(car)); // Retorna no console o protótipo do object construtor array.
console.log(Object.getPrototypeOf("")); // Retorna no console o protótipo do object constructor string.

const newFruit = car; // Está criando uma nova constante armazenando o objeto car.

// O método is verifica se os objetos são iguais e retorna true ou false.
console.log(Object.is(car, city)); // Retorna false no console.
console.log(Object.is(car, car)); // Retorna true no console.

//* > Métodos freeze, seal e preventExtensions.

const myInfos = {
  firstname: "Luiz",
  lastname: "Silva",
  age: 19,
};

// O método freeze congela o objeto, assim impedindo qualquer mudança nas propriedades.
Object.freeze(myInfos);
myInfos.firstname = "Lucas"; // O freze não deixa alterar o valor do firstname.
myInfos.study = true; // Também não deixa adicionar nvoas propriedades
delete myInfos.age; // Também não pode ser deletada.
console.log(myInfos); // Não retorna nenhuma mudança pois o frezee não deixa.

const documents = {
  rg: 123456789,
  cpf: 12336273678,
};

// O método seal previne a adição de novas propriedades e impede que as atuais sejam deletadas.
Object.seal(documents);
documents.cnh = 2342367855; // O seal não permite adicionar um novo valor.
delete documents.cpf; // Não permite deletar nenhuma propriedade.
console.log(documents); // Não retorna nenhuma propriedade nova pois o seal não deixa.

const idioms = {
  usa: "English",
  brazil: "Portuguese",
  japao: "Japanese",
};

// O método preventExtensions previne a adição de novas propriedades.
Object.preventExtensions(idioms);
idioms.italy = "Italian"; // Não permite adicionar novas propriedades.
idioms.brazil = "Portuguese BR"; // Permite alterar propriedades já existentes.
delete idioms.usa; // Permite deletar uma propriedade.
console.log(idioms);

// O método isFrozen verifica se o objeto está congelado.
console.log(Object.isFrozen(myInfos)); // Retorna true no console pois está congelado.

// O método isSealed verifica se o objeto está fechado.
console.log(Object.isSealed(documents)); // Retorna true no console pois ele está fechado/selado.

// O método isExtensible verifica se pode ser extensivo ou não.
console.log(Object.isExtensible(idioms)); // Retorna false no console pois não pode ser extensivo, pois foi usado o preventExtensions.

//* > Propriedades e Métodos do protótipo.

// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.
const fruits = ["Banana", "Uva"];
console.log(fruits.constructor); // Retorna uma function array no console.

const phrase = "Isso é uma String";
console.log(phrase.constructor); // Retorna function string no console.

//* > Métodos hasOwnProperty e propertyIsEnumerable.

// O método hasOwnProperty verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo.
console.log(fruits.hasOwnProperty("map")); // Retorna false no console.
// fruits.map(); // Não a propriedade utilizando o objeto fruits.

console.log(Array.hasOwnProperty("map")); // Retorna false no console.
// Array.map(); // Não existe a propriedade utilizando o objeto nativo Array.

console.log(Array.prototype.hasOwnProperty("map")); // Retorna true no console.
// Array.prototype.map(); // Existe a propriedade utilizando no prototype do objeto Array.

// O método propertyIsEnumerable verifica se a propriedade é enumerável.
console.log(Array.prototype.propertyIsEnumerable("map")); // Retorna false no console.
console.log(window.propertyIsEnumerable("innerHeight")); // Retorna true no console.

//* > Método isPrototypeOf.

// O método isPrototypeOf verifica se é o protótipo do valor passado.
Array.prototype.isPrototypeOf(fruits); // Retorna true no console.

//* > Método toString.

// O método toString retorna o tipo do objeto. O problema é toString ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const moreFruits = ["Laranja", "Carambola"];
console.log(moreFruits.toString()); // Retorna Laranja,Carambola no console pois transforma em uma string.
console.log(typeof moreFruits); // Retorna object no console.
console.log(Object.prototype.toString.call(moreFruits)); // Retorna no console o tipo do objeto, nesse caso [object Array].

const morePhrase = "Uma String";
console.log(morePhrase.toString()); // Retorna Uma String no console
console.log(typeof morePhrase); // Retorna string no console.
console.log(Object.prototype.toString.call(morePhrase)); // Retorna no console o tipo do objeto, nesse caso [object String].

const bmwCar = { brand: "BMW" };
console.log(bmwCar.toString()); // Retorna no console o tipo do objeto, nesse caso [object Object].
console.log(typeof bmwCar); // Retorna object no console.
console.log(Object.prototype.toString.call(bmwCar)); // [object Object]

const li = document.querySelectorAll("li");
console.log(typeof li); // Retorna object no console.
console.log(Object.prototype.toString.call(li)); // Retorna no console o tipo do objeto, nesse caso [object NodeList].
