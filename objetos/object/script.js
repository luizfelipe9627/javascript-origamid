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

//* > Métodos keys, values e entries.

//* > Método getOwnPropertyNames.

//* > Métodos getPrototypeOf e is.

//* > Métodos freeze, seal e preventExtensions.

//* > Propriedades e Métodos do protótipo.

//* > Métodos hasOwnProperty e propertyIsEnumerable.

//* > Método isPrototypeOf.

//* > Método toString.
