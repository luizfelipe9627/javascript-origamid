// Retorne no console todas as imagens do site.
const allImg = document.querySelectorAll("img");
console.log(allImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem.
const filterImg = document.querySelectorAll('[src^="./src/assets/img/imagem"]');
console.log(filterImg);

// Selecione todos os links internos (onde o href começa com #).
const filterLinks = document.querySelectorAll('[href^="#"]');
console.log(filterLinks);

// Selecione o primeiro h2 dentro de .animais-descricao.
const h2Animals = document.querySelector(".animais-descricao h2");
console.log(h2Animals);

// Selecione o último p do site.
const lastParagraph = document.querySelectorAll("p");
console.log(lastParagraph[lastParagraph.length - 1]);
