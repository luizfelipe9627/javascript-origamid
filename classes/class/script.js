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

    spanElement.innerText = this.text; // Está atribuindo como texto do paragrafo o valor armazenado no parâmetro na constructor do objeto Paragraph.
    spanElement.style.background = this.background;

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

// Criado uma class chamada ButtonStyle.
class ButtonStyle {
  constructor(options) {
    this.options = options;
  }
}

// Podemos passar qualquer valor dentro de uma propriedade, exemplo disso é o objeto blueOptions criado contendo várias propriedades.
const blueOptions = {
  backgroundColor: 'blue',
  color: 'white',
  text: 'Clique',
  borderRadius: '4px',
}

const blueButton = new Button(blueOptions); // Está criando um novo objeto contendo as propriedades do Button e atribuindo como parâmetro do construtor o objeto blueOptions criado.
blueButton.options;
