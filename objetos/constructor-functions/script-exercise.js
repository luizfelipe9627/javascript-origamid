// Transforme o objeto abaixo em uma Constructor function.
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos.
const joao = new Pessoa("João", 20);
console.log(joao);

const maria = new Pessoa("Maria", 25);
console.log(maria);

const bruno = new Pessoa("Bruno", 15);
console.log(bruno);

/* Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:

  elements, retorna NodeList com os elementos selecionados.
  addClass(classe), adiciona a classe a todos os elementos.
  removeClass(classe), remove a classe a todos os elementos.
*/
function Dom(selectorElement) {
  const elementList = document.querySelectorAll(selectorElement);
  this.elements = elementList;

  this.addClass = function (classElement) {
    elementList.forEach((element) => {
      element.classList.add(classElement);
    });
  };

  this.removeClass = function () {
    elementList.forEach((element) => {
      element.className = "";
    });
  };
}

const listItems = new Dom("li");
listItems.addClass("ativo");
listItems.removeClass();
