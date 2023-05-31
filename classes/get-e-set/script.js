//* > Get e Set.

// Podemos definir comportamentos diferentes de get e set para um método.

// Criado um objeto chamado button.
const button = {
  // O get é usado para obter informações. O get não pode ser alterado.
  get element() {
    return this._element; // Retorna o método element criado(o _ é para dizer que é uma propriedade privada). presente no this(o objeto button)
  },

  // O set é usado para criar/atribuir alguma propriedade. O set pode ser alterado.
  set element(tipo) {
    this._element = document.createElement(tipo); // Está atribuído ao this.element a criação de um elemento que foi passado por parâmetro.
  },
};

button.element = "button"; // Está acessando o set(pois está atribuindo) e passando o nome de um elemento como parâmetro do método element.
button.element; // Irá acessar o get(pois está obtendo) e retornar o elemento.

//* > Valor estático.

// Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.

// Criado um objeto chamado math
const math = {
  // O get é usado para obter informações. O get não pode ser alterado.
  get PI() {
    return 3.14; // Retorna um valor do tipo number.
  },
};

console.log(math.PI); // Acessa a resposta do get e mostra no console.
math.PI = 20; // Não acontece nada, pois o get não pode ser alterado.
console.log(math.PI); // Mostra no console o mesmo resultado do get.

//* > Set.

// Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.

// Criado um objeto chamado fruits.
const fruits = {
  list: [], // Criado uma array vazia chamada list.
  // Criado um método set chamada new que recebe um parâmetro chamado fruit.
  set new(fruit) {
    this.list.push(fruit); // Está acessando o objeto vazio presente dentro do objeto fruits(por isso o this) e o push adiciona os elementos(fruit) ao final da array e retorna a array.
  },
};

// Se acessa o set como se fosse uma propriedade e não uma função, por isso não é passado uma função.
fruits.new = "Banana"; // Está definindo dentro do new presente dentro do objeto fruits um valor do tipo string.
fruits.new = "Morango"; // Está definindo dentro do new presente dentro do objeto fruits um valor do tipo string.
console.log(fruits.list); // Mostra a array com duas propriedades criadas no console.

//* > Class.

// Assim como em um objeto, as classes podem ter métodos de get e set também.

class Button1 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(text, color) {
    this.text = text; // O this está referenciando o parâmetro text criado no constructor.
    this.color = color; // O this está referenciando o parâmetro color criado no constructor.
  }

  // Criado um get que contém um método chamado element. O get é usado para obter informações. O get não pode ser alterado.
  get element() {
    const buttonElement = document.createElement("button"); // Está criando um elemento do tipo button e armazenando na constante buttonElement.

    buttonElement.innerText = this.text; // Está atribuindo como texto do button o valor armazenado no parâmetro do constructor da class Button1.
    buttonElement.style.color = this.color; // Está atribuindo como cor do texto do button o valor armazenado no parâmetro do constructor da class Button1.

    return buttonElement; // Está retornando o button.
  }
}

const redButton = new Button1("Comprar", "red"); // Está criando um objeto baseado na class e atribuindo um valor ao parâmetro text e color do constructor.
console.log(redButton.element); // Através do objeto redButton acessa/executa o método get e mostra no console.

//* > Set e Class.

// Com o set podemos modificar apenas parte do elemento de get. É comum definirmos variáveis privadas, utilizando o underscore _privada.

// Criado uma class chamada Button2.
class Button2 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(text) {
    this.text = text; // O this está referenciando o parâmetro text criado no constructor.
  }

  // Criado um get que contém um método chamado element. O get é usado para obter informações. O get não pode ser alterado.
  get element() {
    const elementType = this._elementType || "button"; // Está armazenando o elemento definido ou se for undefined atribui como valor o button.

    const buttonElement = document.createElement(elementType); // Está criando um novo elemento com o valor armazenado na constante elementType e armazena esse elemento no buttonElement.

    buttonElement.innerText = this.text; // Está atribuindo como texto do button o valor armazenado no parâmetro do constructor da class Button1.

    return buttonElement; // Retorna o elemento button.
  }

  // Criado um método set chamado element. O set é usado para criar/atribuir alguma propriedade. O set pode ser alterado.
  set element(type) {
    this._elementType = type; // Está criando uma propriedade chamada _elementType dentro da class Button2(por isso o this) e atribuindo a ela o valor armazenado no parâmetro do método.
  }
}

const blueButton = new Button2("Comprar"); // Está criando um objeto baseado na class e atribuindo um valor ao parâmetro text do constructor.
console.log(blueButton.element); // Através do objeto blueButton acessa/executa o método get e mostra no console.
