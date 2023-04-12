//* forEach

const imgs = document.querySelectorAll("img"); // Está puxando do DOM todos os elementos img presentes no site.

let i = 0;
// O forEach executa o callback fornecido uma vez para cada elemento da ordem. Sendo assim, ele executa 1 vez para cada item. Ele pode receber no máximo 3 parâmetros.
imgs.forEach(function (item, index, array) {
  // console.log(item); // O item atual no loop.
  // console.log(index); // O número(posição na array) do index.
  // console.log(array); // A array completa.
});

const title = document.getElementsByClassName("titulo"); // Retorna uma Array like.
const titleArray = Array.from(title); // O Array.from() é um método que transforma elementos em Array.

console.log(title); // Retorna um Array like.
console.log(titleArray); // Retorna uma Array normal.

titleArray.forEach(function (item) {
  console.log(item);
});

//* Arrow function

const links = document.querySelectorAll("a"); // Retorna uma Array like.
const linksArray = Array.from(links); // O Array.from() é um método que transforma elementos em Array.

// O arrow function é uma curta forma do function, não usa a palavra function e precisa da flecha(=>) para funcionar.
linksArray.forEach((item) => {
  // console.log(item)
});

// Para o uso de uma única linha podemos utilizar sem os parênteses.
linksArray.forEach(item => {
  // console.log(item);
});
// Ou
linksArray.forEach(item => console.log(item));
// Quando não tem argumentos precisa ter os parênteses, mesmo que vazios.
let inicializador = 0;
linksArray.forEach(() => console.log(inicializador++));