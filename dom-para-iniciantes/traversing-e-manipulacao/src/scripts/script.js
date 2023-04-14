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

const animals = document.querySelector(".animais"); // Está puxando o elemento com a classe animais.
const map = document.querySelector(".mapa"); // Está puxando o elemento com a classe mapa.
const contact = document.querySelector(".contato"); // Está puxando o elemento com a classe contato.
const contactTitle = contact.querySelector(".titulo"); // Está puxando o elemento com a classe titulo dentro do elemento com a classe contato no DOM.

// const appendChild = animals.appendChild(contact); // O appendChild é um método que leva como último filho do elemento.
// const insertBefore = contact.insertBefore(animals, contactTitle); // O insertBefore é um método que recebe dois valores, o primeiro é o que deseja ser movido e o segundo é o elemento que deve ser colocado antes. Nesse caso vai inserir animais antes do titulo animais.
// const removeChild = contact.removeChild(contactTitle); // o removeChild é usado para remover um elemento filho do pai.
// const replaceChild = contact.replaceChild(list, contactTitle); // o replaceChild é um método usado para substituir um elemento por outro.

// * Criação de elementos.

const newH1 = document.createElement("h1"); // o createElement é um método usado para criar novos elementos.

newH1.innerText = "Novo titulo"; // Está adicionando um valor ao elemento H1 criado.

newH1.classList.add("titulo"); // Adiciona uma classe ao novo elemento criado.

map.appendChild(newH1); // Após o mapa adiciona o elemento H1 criado.

// * Clonar elementos.

const faq = document.querySelector(".faq"); // O querySelector está puxando o elemento com a classe faq.

const cloneH1 = h1.cloneNode(true); // O cloneNode é responsável por clonar o elemento, dentro dele pode ser passado true ou false, true para pegar todo o texto do elemento até mesmo seus filhos e false para pegar somente o texto do elemento em si.

faq.appendChild(cloneH1); // O appendChild é um método que leva como último filho do elemento.
