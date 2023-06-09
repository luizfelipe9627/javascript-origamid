//* > Factory function.

// Factory function são funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.
function createButton(text) {
  // Criado uma função chamada element.
  function element() {
    const buttonElement = document.createElement("button"); // Criado um elemento do tipo button que está sendo armazenado na constante buttonElement.
    buttonElement.innerText = text; // Está colocando um texto passado no parâmetro da função dentro do button.

    return buttonElement; // Retorna o elemento button.
  }

  // Retorna um objeto contendo o nome do método e o valor dele em seguida.
  return {
    element, // Função element.
    text, // Texto do botão.
  };
}

const buyButton = createButton("Comprar"); // Armazena na constante buyButton a execução da função e atribuindo ao seu parâmetro um valor do tipo string.

console.log(buyButton); // Mostra no console o objeto final retornado da função createButton.
console.log(buyButton.element()); // Mostra no console o botão criado no método element, podemos acessar qualquer método da função principal.

//* > Métodos e Variáveis privadas.

function createPerson1(firstName, lastName) {
  // Uma das vantagens é a possibilidade de criarmos métodos e variáveis privadas como o caso do fullName.
  const fullName = `${firstName} ${lastName}`; // Criado uma constante chamada fullName que recebe o valor atribuído aos dois parâmetros da função e transforma numa string.

  // Criado uma função chamada walk.
  function walk() {
    return `${fullName} andou`; // Retorna uma string que contém o valor do parâmetro fullName.
  }

  // Criado uma função chamada swim.
  function swim() {
    return `${fullName} nadou`; // Retorna uma string que contém o valor do parâmetro fullName.
  }

  // Retorna um objeto contendo o nome do método e o valor dele em seguida.
  return {
    // Resultado do valor passado no parâmetro.
    firstName,
    lastName,
    // Executa e retorna os métodos.
    walk,
    swim,
  };
}

const programmer = createPerson1("Luiz", "Felipe"); // Armazena na constante createPerson1 a execução da função e atribui aos seus parâmetros da função um valor do tipo string.

console.log(programmer); // Mostra no console o objeto final retornado da função createPerson1.
console.log(programmer.firstName); // Mostra no console a o retorno da string com o nome, podemos acessar e até alterar qualquer método da função principal.
console.log(programmer.fullName); // Mostra undefined no console pois é uma variável privada, não pode ser acessada diretamente.

//* > Ice factory.

("use strict"); // O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.

function createPerson2(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`; // Criado uma constante chamada fullName que recebe o valor atribuído aos dois parâmetros da função e transforma numa string.

  // Criado uma função chamada walk.
  function walk() {
    return `${fullName} andou`; // Retorna uma string que contém o valor do parâmetro fullName.
  }

  // Retorna um objeto congelado(não permite ser alterado) contendo o nome do método e o valor dele em seguida.
  return Object.freeze({
    // Resultado do valor passado no parâmetro.
    firstName,
    lastName,
    // Executa e retorna os métodos.
    walk,
  });
}

const designer = createPerson2("André", "Rafael"); // Armazena na constante createPerson2 a execução da função e atribui aos seus parâmetros da função um valor do tipo string.
designer.firstName = "Lucas"; // Não irá reescrever o firstName pois o objeto está congelado.
console.log(designer); // Mostra no console o objeto final retornado da função createPerson2.

//* > Constructor function e Factory function.

// Criado uma constructor function chamada Person que contém um parâmetro.
function Person(firstName) {
  // Se e o this(a função) for uma instancia(tiver as propriedades no prototype) de Person ele executa o if se for false.
  // Ou (!new.target) que verifica se o new possui o target de Person.
  if (!(this instanceof Person)) {
    return new Person(firstName); // Retorna um novo objeto Person que contém como parâmetro o valor definido na função pai.
  }
  this.firstName = firstName; // Está referenciando o this ao parâmetro firstName criado no novo objeto Person.
}

// Dentro do objeto Person está acessando o seu protótipo e criando um método chamado walk.
Person.prototype.walk = function () {
  return `${this.firstName} andou`; // Retorna em string o this que contém o valor do parâmetro firstName.
};

// Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function.
const webDesigner = Person1("André"); // Armazena na constante webDesigner a execução da função e atribui a seu parâmetro da função um valor do tipo string.
console.log(webDesigner); // Mostra no console o resultado do objeto Person1 armazenado na constante no console.
