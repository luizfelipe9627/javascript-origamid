// Está puxando os elementos por classe no DOM e armazenando nas variáveis constantes.
const controls = document.querySelector("#controls");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

// Criado um objeto que contém todas as functions responsáveis por atribuir estilos.
const handleStyle = {
  element: btn, // Está armazenando o btn na propriedade nomeada como element.

  // Função responsável por modificar/adicionar o texto do botão.
  text(value) {
    // O this está referenciando a propriedade element presente dentro do objeto.
    this.element.innerText = value; // Altera o texto conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar a cor do texto do botão.
  color(value) {
    // O this está referenciando a propriedade element presente dentro do objeto.
    this.element.style.color = value; // Altera a cor do texto conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar o background-color do botão.
  backgroundColor(value) {
    // O this está referenciando a propriedade element presente dentro do objeto.
    this.element.style.backgroundColor = value; // Altera a cor do background conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar o altura do botão.
  height(value) {
    // O this está referenciando a propriedade element presente dentro do objeto.
    this.element.style.height = value + "px"; // Altera a altura conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar a largura.
  width(value) {
    this.element.style.width = value + "px"; // Altera a largura conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar estilo a borda.
  border(value) {
    this.element.style.border = value; // Altera a grossura, estilo e cor da a borda conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar os cantos da borda.
  borderRadius(value) {
    this.element.style.borderRadius = value + "px"; // Arredonda a borda  conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar sombra.
  boxShadow(value) {
    this.element.style.boxShadow = value; // Adiciona sombra conforme o valor atribuído ao seu parâmetro(value).
  },

  // Função responsável por modificar/adicionar fonte.
  fontFamily(value) {
    this.element.style.fontFamily = value; // Altera a font-family conforme a opção escolhida no select e armazenada no parâmetro(value).
  },

  // Função responsável por aumentar/diminuir a fonte.
  fontSize(value) {
    this.element.style.fontSize = value + "rem"; // Altera o tamanho da fonte conforme o valor atribuído ao seu parâmetro(value).
  },
};

// Função responsável por verificar e lidar com as mudanças, contendo um parâmetro responsável pelo callback de evento.
function handleChange(event) {
  const nameEvent = event.target.name; // Armazena na constante nameEvent o name do evento do elemento que está recebendo a interação.
  const valueEvent = event.target.value; // Armazena na constante valueEvent o valor do evento do elemento que está recebendo a interação.

  handleStyle[nameEvent](valueEvent); // Chama o objeto handleStyle e passa como seu index o nome do evento que está sendo interagido, depois executa a função que contém esse nome e adiciona como seu valor o value do evento.

  saveValues(nameEvent, valueEvent); // Atribui o nome do evento e o valor do evento aos parâmetros da função saveValues.

  showCSS(); // Executa a função showCSS.
}

controls.addEventListener("change", handleChange); // Está adicionando um evento de mudança no controls que ao ser acionado executa a função handleChange.

// Função responsável por mostrar o código CSS na tela.
function showCSS() {
  cssText.innerHTML = `
    <span>${btn.style.cssText // Está alterando o texto HTML do span e atribuindo a ele um texto do style presente dentro da propriedade cssText.
      .split("; ") // A cada ponto e virgula quebra em uma propriedade de uma array.
      .join(";</span><span>")}`; //  O join junta cada array em texto novamente com o ponto e virgula mas adiciona um elemento span em seguida.
}

// Função responsável por salvar/armazenar os dados do usuário no localStorage do navegador.
function saveValues(name, value) {
  // O objeto localStorage é usado para armazenar e manter informações pegas do navegador do usuário, sendo assim quando dar refresh na página não perde as infos.
  localStorage[name] = value; // Adiciona no localStorage uma nova propriedade que tem como nome o index e em seguida recebe o valor dessa propriedade.
}

// Função responsável por setar os valores no navegador.
function setValues() {
  const properties = Object.keys(localStorage); // Armazena todas as chaves presente no objeto localStorage na variável constante properties.

  // O forEach percorre por cada elemento key(definido como propertie) do objeto localStorage.
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]); // Chama o objeto handleStyle e passa como seu index o nome da propriedade que está sendo interagido, depois executa a função que contém o valor do localStorage.

    controls.elements[propertie] = localStorage[propertie]; // Retorna uma array com todos os elementos presentes dentro de controls que contenha o nome da propriedade do loop e seta como valor o value do localStorage.

    showCSS(); // Executa a função showCSS.
  });
}

setValues(); // Executa a função setValues.
