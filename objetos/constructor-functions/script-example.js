// * Usando objeto.

// Criado um objeto chamado DOM.
const DOM = {
  selector: "li", // Elemento selector criado armazenando um valor LI.
  // Criado uma função chamado element.
  element() {
    // console.log(selector); // Retorna um erro falando que selector não está definido.
    console.log(this.selector); // Retorna o valor dentro do elemento selector presente dentro da função.

    return document.querySelector(this.selector); // Retorna a primeira LI do DOM.
  },
  active() {
    this.element().classList.add("actived"); // Adiciona uma classe nova na função element.
  },
};

DOM.selector = "ul"; // Está reescrevendo o valor do selector para ul.
DOM.active(); // Está executando o método criado dentro do objeto DOM.

// * Usando o constructor function.

// Criado uma function constructor chamada DOM2.
function DOM2(selectorElement) {
  // O this referencia o próprio objeto e cria o elemento dentro dele, sendo assim eles podem ser acessados fora do escopo.
  // Criado uma função chamada element.
  this.element = function () {
    return document.querySelector(selectorElement); // Retorna a primeira LI do DOM.
  };
  // Criado uma função chamada active que contém um parâmetro na qual será passada a classe.
  this.active = function (classElement) {
    this.element().classList.add(classElement); // Adiciona uma classe nova no selectorElement dentro da função element.
  };
}

const liElement = new DOM2("li:last-child"); // Retorna um novo objeto chamado liElement que preenche o parâmetro da função passando a última LI do DOM.
liElement.active("teste1"); // Adiciona a classe no selectorElement.
console.log(liElement.element()); // Mostra no console o elemento presente dentro do selectorElement.

const ulElement = new DOM2("ul"); // Retorna um novo objeto chamado ulElement que preenche o parâmetro da função, passando a primeira UL do DOM.
ulElement.active("teste2"); // Adiciona a classe no selectorElement.
console.log(ulElement.element()); // Mostra no console o elemento presente dentro do selectorElement.
