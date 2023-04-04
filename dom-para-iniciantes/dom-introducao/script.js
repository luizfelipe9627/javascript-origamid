// window.alert('Sou um alerta.'); // O alert é uma função que serve para criar uma caixa de alerta no navegador.

// * Objeto location e alguns dos seus métodos.

const href = window.location.href; // O location é um objeto e o href uma propriedade do location, que é usado para pegar a atual url da página.
console.log(href); // Retorna http://127.0.0.1:5500/dom-para-iniciantes/dom-introducao/ no console.

// Verifica se a url da página atual é igual ao da url colocada, se for executa o bloco de comando do if.
if (href === "http://127.0.0.1:5500/dom-para-iniciantes/dom-introducao/") {
  console.log("É igual."); // Retorna É igual. no console.
}

// * Objeto document e alguns de seus métodos.

const h1 = document.querySelector("h1"); // O querySelector é uma função que recebe como parâmetro o elemento HTML.
console.log(h1);

const body = document.body; // Armazena o body HTML.
console.log(body);

// * Node (element.property).

const classList = h1.classList; // É uma propriedade que retorna as classes existentes no elemento.
console.log(classList);

const innerText = h1.innerHTML; // É uma propriedade que retorna o texto do elemento.
console.log(innerText);

const id = h1.id; // É uma propriedade que retorna os id's existentes no elemento.
console.log(id);

const height = h1.offsetHeight; // É uma propriedade que retorna a altura do elemento.
console.log(height);

// * Evento de escuta.

// Quando disparado o evento do H1 irá executar a função.
function handleClick() {
  console.log("Clicou em ", h1.innerText); // Retorna Clicou em Esse é um titulo. no console. O innerText é responsável por retornar o texto do elemento.
}

// Cria um evento de clique, que quando disparado aciona a função criada.
h1.addEventListener("click", handleClick);
