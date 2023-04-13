// * Manipulação de texto.

const h1 = document.querySelector("h1"); // Puxa o primeiro H1 do DOM.

const innerHTML = h1.innerHTML; // O innerHTML retorna o HTML interno, no caso o que está dentro da tag.
console.log(innerHTML);

const innerText = h1.innerText; // O innerText retorna o texto, sem as tags.
console.log(innerText);

const outerHTML = h1.outerHTML; // O outerHTML retorna todo o HTML do elemento, assim incluindo as tags.
console.log(outerHTML);

// * Traversing.

const list = document.querySelector(".animais-lista"); // Está puxando o elemento com a classe animais-lista do DOM.

const fatherList = list.parentElement; // Está puxando o elemento pai do animais-lista.
console.log(fatherList);

const fathersFather = list.parentElement.parentElement; // Está puxando o pai do fatherList(pai).
console.log(fathersFather);

const nextElement = list.nextElementSibling; // Está puxando o próximo(abaixo do) elemento depois da lista-animais.
console.log(nextElement);

const previousElement = list.previousElementSibling; // Está puxando o elemento anterior(acima) antes da lista-animais.
console.log(previousElement);

const listChildren = list.children; // Retorna um HTML Collection contendo os filhos do elemento animais-lista.
console.log(
  listChildren, // Retorna os filhos da animais-lista.
  listChildren[2], // Podemos filtrar para retornar o filho desejado.
  listChildren.length - 1 // Ultimo filho da animais-lista.
);

// Ou podemos selecionar através do querySelector.

const listAllChild = list.querySelectorAll("li"); // Está puxando todas as LI da lista-animais.
console.log(listAllChild);

const listLastChild = list.querySelector("li:last-child"); // Está puxando da LI o último filho.
console.log(listLastChild);

// * Element vs Node.

const listElement = list.previousElementSibling; // Retorna o elemento acima da lista-animais.
console.log(listElement);
const listPrevious = list.previousSibling; // Retorna o node acima da lista-animais.
console.log(listPrevious);

const listChildNode = list.childNodes; // Retorna os node child do elemento lista-animais.
console.log(listChildNode);
const listFirstChild = list.firstChild; // Retorna o primeiro node child.
console.log(listFirstChild);

// * Manipulando eventos.
