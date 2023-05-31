//* > Constructor function.

// Criado uma função construtora chamada Button que contém dois parâmetros.
function Button(text, background) {
  this.text = text; // Está atribuindo o this ao parâmetro text.
  this.background = background; // Está atribuindo o this ao parâmetro background.
}

const blueButton = new Button("Comprar", "blue"); // Está atribuindo um novo valor ao parâmetro da function constructor Button e armazenando na constante blueButton como objeto.

// Está acessando o prototype do constructor Button e criando dentro dele uma função chamada element.
Button.prototype.element = function () {
  const buttonElement = document.createElement("button"); // Está criando um elemento do tipo button e armazenando na constante buttonElement.

  // O this está puxando os elementos atribuídos a ele que esteja dentro da function Button.
  buttonElement.innerText = this.text; // Está atribuindo como texto do button o valor armazenado no parâmetro da function constructor.
  buttonElement.style.background = this.background; // Está atribuindo como background do button o valor armazenado no parâmetro da function constructor.

  return buttonElement; // Está retornando o button.
};

console.log(blueButton.element()); // Mostra no console a execução da função element presente dentro do objeto blueButton.
console.log(blueButton); // Mostra o objeto blueButton no console.

//* > Class.

// Criado uma class chamado Paragraph.
class Paragraph {
  // O constructor é responsável pela inicialização das propriedades do objeto quando o objeto é criado, é basicamente os parâmetros da class.
  constructor(text, color) {
    this.text = text; // Está referenciando o this ao parâmetro text criado no constructor.
    this.color = color; // Está referenciando o this ao parâmetro color criado no constructor.
  }

  // Criado uma função dentro da class, chamado de element.
  element() {
    const paragraphElement = document.createElement("p"); // Está criando um elemento do tipo p e armazenando na constante paragraphElement.

    // O this está puxando os elementos atribuídos a ele que esteja dentro da class Paragraph.
    paragraphElement.innerText = this.text; // Está atribuindo como texto do paragrafo o valor armazenado no parâmetro na constructor do objeto Paragraph.
    paragraphElement.style.color = this.color; // Está atribuindo como color do paragrafo o valor armazenado no parâmetro na constructor do objeto Paragraph.

    return paragraphElement; // Está retornando o paragrafo.
  }
}

const greenParagraph = new Paragraph("Eu sou um paragrafo", "green"); // Está atribuindo um novo valor ao parâmetro do objeto Paragraph e armazenando na constante greenParagraph como objeto.

console.log(greenParagraph.element()); // Mostra no console a execução da função element presente dentro do objeto greenParagraph.
console.log(greenParagraph); // Mostra o objeto greenParagraph no console.

//* > Constructor.

class H1 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(color, size, font) {
    // O this está referenciando os parâmetros criados no constructor.
    this.color = color;
    this.size = size;
    this.font = font;
  }
}

const blackH1 = new H1("black", 16, "Poppins"); // Está atribuindo um novo valor aos argumentos do constructor e armazenando na constante blackH1 como objeto.

// Mostra o objeto blackH1 no console.
console.log(blackH1); // H1 {font: 'Clique', size: 'blue', font: 'white'}

//* > This.

// Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades e métodos da classe utilizando o this.
// Criado uma class chamada Span.
class Span {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(text) {
    this.text = text; // O this está referenciando o parâmetro text criado no constructor.
  }

  // Criado uma função chamada element.
  element() {
    const spanElement = document.createElement("span"); // Está criando um elemento do tipo span e armazenando na constante spanElement.

    spanElement.innerText = this.text; // Está atribuindo como texto do span o valor armazenado no parâmetro na constructor da class Span.
    spanElement.style.background = this.background; // Está atribuindo como background do span o valor armazenado no parâmetro na constructor da class Span.

    return spanElement; // Está retornando o elemento span.
  }

  // Criado uma função chamada appendElementTo que contém um parâmetro chamado target.
  appendElementTo(target) {
    const targetElement = document.querySelector(target); // Está selecionando o elemento no DOM e armazenando na constante targetElement

    targetElement.appendChild(this.element()); // Está tornando o método element presente dentro da class Span(por isso o this) como filho do targetElement.
  }
}

const spanText = new Span("Eu sou um span"); // Está criando um objeto baseado na class e atribuindo um valor ao parâmetro text do constructor.

spanText.appendElementTo("body"); // Está acessando dentro do spanText o método criado e aplicando um valor ao parâmetro da função.

//* > Propriedades.

// Criado uma class chamada H2.
class H2 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(options) {
    this.options = options; // O this está referenciando o parâmetro options criado no constructor.
  }
}

// Podemos passar qualquer valor dentro de uma propriedade, exemplo disso é o objeto H2Options criado contendo várias propriedades.
const H2Options = {
  color: "aqua",
  fontFamily: "Arial",
  fontSize: "16px",
};

const H2Element = new H2(H2Options); // Está criando um novo objeto contendo as propriedades da class H2 e atribuindo como parâmetro do construtor o objeto H2Options criado.
console.log(H2Element.options); // Mostra no console o valor presente na propriedade options.

//* > Static vs Prototype.

// Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array.
// Criado uma classe chamada LiElement.
class AElement {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(text) {
    this.text = text; // O this está referenciando o parâmetro text criado no constructor.
  }

  // Criado uma função estática chamada create, que quando definida fica dentro do constructor.
  static create(link) {
    const elementA = document.createElement("a"); // Está criando um elemento do tipo a e armazenando na constante elementA.

    elementA.href = link; // Está atribuindo href do elemento a o valor definido no parâmetro link da função create.
    elementA.innerText = "Clique aqui"; // Está atribuindo como texto do elemento a o valor armazenado no parâmetro na constructor da class AElement.

    return elementA; // Retorna o elementA.
  }
}

// Não precisamos utilizar o New quando é usado o static, ele pode ser acessado direto.
const linkElement = AElement.create("www.origamid.com.br"); // Está acessando o método create dentro da class AElement e atribuindo como parâmetro do método a string definida.
console.log(linkElement); // Mostra o linkElement no console.

//* > Static.

// Usamos o método static para retornar a própria classe com propriedades já pré definidas.
// Criado uma class chamada
class buttonStyle {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(text, background) {
    // O this está referenciando os parâmetros criados no constructor.
    this.text = text;
    this.background = background;
  }

  // Criado uma função chamada element.
  element() {
    const elementButton = document.createElement("button"); // Está criando um elemento do tipo button e armazenando na constante elementButton.

    elementButton.innerText = this.text; // Está atribuindo como texto do button o valor armazenado no parâmetro na constructor da class buttonStyle.
    elementButton.style.background = this.background; // Está atribuindo como background do button o valor armazenado no parâmetro na constructor da class buttonStyle.

    return elementButton; // Está retornando o button.
  }

  // Criado uma função estática(pré definida) chamada createBlue que quando definida fica dentro do constructor.
  static createBlue(text) {
    return new buttonStyle(text, "blue"); // Retorna a criação de uma nova class buttonStyle com o parâmetro definido no text, e o parâmetro do construtor background tendo seu valor blue definido como padrão.
  }
}

// Não precisamos utilizar o New quando é usado o static, ele pode ser acessado direto.
const newButton = buttonStyle.createBlue("Comprar"); // Através da class está acessando o método createBlue e preenchendo seu parâmetro, por fim armazena o resultado na constante newButton.
console.log(newButton); // Mostra o newButton no console.
