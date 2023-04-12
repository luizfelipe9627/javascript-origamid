// * addEventListener e seu callback/função.

const img = document.querySelector("img"); // Puxa o primeiro elemento IMG que encontrar no DOM.

// o addEventListener é um método responsável por executar uma ação quando um evento é ocorrido. Geralmente recebe 2 parâmetros, o tipo de evento e o callback/função que vai ser executada quando o evento ocorrer.
img.addEventListener("click", () => {
  console.log("Clicou.");
});

// Criado uma função que vai ser usada quando o evento do addEventListener acontecer.
function callback() {
  console.log("Clicou na imagem.");
}

img.addEventListener("click", callback); // Callback é o nome função que vai ser executada quando o evento de mouse ocorrer.

// img.addEventListener("click", callback()); // Errado pois está invocando a função, sendo que só irá funcionar uma vez, e sem precisar ocorrer o evento de clique.

// * Declaração de evento e suas propriedades.

const animalsList = document.querySelector(".animais-lista"); // Puxa o elemento com a classe animais-lista do DOM.

// Criado uma função que tem como parâmetro o seu evento.
function executarCallback(event) {
  const currentTarget = event.currentTarget; // Retorna o elemento que está recebendo o addEventListener.
  const target = event.target; // Retorna o local onde o clique ocorreu.
  const type = event.type; // Retorna o tipo de evento.

  console.log(currentTarget, target, type);
}

animalsList.addEventListener("click", executarCallback); // executarCallback é o nome função que vai ser executada quando o evento de click ocorrer.

// * Tipos de eventos do addEventListener.

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event); // Retorna no console o tipo de evento e o evento em si.
}

h1.addEventListener("click", handleEvent); // Evento ocorre quando há clique.
h1.addEventListener("mouseenter", handleEvent); // Evento ocorre ao passar o mouse por cima.
// h1.addEventListener("mousemove", handleEvent); // Evento ocorre ao passar o mouse no elemento.

window.addEventListener("scroll", handleEvent); // Evento ocorre quando há um scroll na página.
window.addEventListener("resize", handleEvent); // Evento ocorre quando há alteração no tamanho da página.
window.addEventListener("keydown", handleEvent); // Evento ocorre quando aperta qualquer tecla do teclado.

// * Evento keyboard do addEventListener.

function handleKeyboard(event) {
  // Se a propriedade key do evento for igual a tecla "a" irá executar o if.
  if (event.key === "a")
    // Se não tiver a classe no body adiciona e se tiver remove a classe.
    document.body.classList.toggle("azul");
  // Se não se a propriedade key do evento for igual a tecla "v" irá executar o else if.
  else if (event.key === "v")
    // Se não tiver a classe no body adiciona e se tiver remove a classe.
    document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", handleKeyboard); // handleKeyboard é o nome função que vai ser executada quando o evento de keydown ocorrer.

// * Método/função preventDefault.

const externalLink = document.querySelector('a[href^="https"]'); // Puxa o primeiro elemento que o href começa com "https" no DOM.

// Criado uma função que tem como parâmetro o seu evento.
function handleExternalLink(event) {
  event.preventDefault(); // Usamos o preventDefault no evento para impedir que a página seja atualizada/direcionada.
  console.log(event); // Irá retornar o evento no console.
}

externalLink.addEventListener("click", handleExternalLink); // handleExternalLink é o nome função que vai ser executada quando o evento de click ocorrer.

// * Palavra especial/reservada THIS.

const menuLink = document.querySelector("a");

function callbackThis() {
  console.log(this); // O this é o elemento usado no addEventListener, por isso o retorna.
  console.log(this.getAttribute("href")); // Retorna o atributo href do elemento.
}

menuLink.addEventListener("click", callbackThis);

// * forEach em junção com eventos.
