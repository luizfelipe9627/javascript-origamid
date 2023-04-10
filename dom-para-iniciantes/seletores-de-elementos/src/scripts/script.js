// * Seletores de elementos.

const animais = document.getElementById("animais"); // Retorna o elemento de ID nomeado como animais.
console.log(animais);

const primeiraLI = document.querySelector("li"); // Retorna o primeiro elemento com a tag LI.
console.log(primeiraLI);

const gridSection = document.getElementsByClassName("grid-section"); // Retorna o elemento de Class nomeado como grid-section.
console.log(gridSection);

const primeiraUL = document.querySelector("ul"); // Retorna o primeiro elemento com a tag UL.
console.log(primeiraUL);

const linkInterno = document.querySelector('[href^="#"]'); // Retorna o primeiro elemento de link que começa(^) com hashtag(#);
console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img"); // Retorna todos os elementos que contém a classe animais e por fim pega as tags img.
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName("grid-section"); // Já o getElementsByClassName é ao vivo, ou seja ele sempre irá puxar o elemento mesmo que ele tenha sido adicionado ou alterado.
const gridSectionNode = document.querySelectorAll(".grid-section"); // O querySelectorAll é estático, ou seja, quando é adicionado ou modificado um elemento em seguida ele não irá puxar o elemento.

primeiraUL.classList.add("grid-section"); // Adiciona uma classe ao elemento.

console.log(gridSectionHTML); // Retornou 4 elementos, puxou a classe adicionada.
console.log(gridSectionNode); // Retornou 3 elementos, não puxou a classe.

// * Array-like e forEach.

// O forEach funciona apenas em NodeList, é um método responsável por fazer loops em arrays até não restar mais propriedades na array.
// Ele pode receber 3 parâmetros, o primeiro que vai armazenar o nome/valor da propriedade, o segundo é o index que vai armazenar o número/posição da propriedade na array e o terceiro que é a array, que vai retornar no caso a array completa.
gridSectionNode.forEach(function(item, index) {
  console.log(item, index)
});

const arrayGrid = Array.from(gridSectionHTML); // Transforma a Array like no Array padrão.
console.log(arrayGrid);

arrayGrid.forEach(function(item) {
  console.log(item);
});