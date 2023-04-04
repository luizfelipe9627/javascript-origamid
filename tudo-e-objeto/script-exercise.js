// Nomeie 3 propriedades ou métodos de strings.
let city = "São Paulo";

let citySplit = city.split(" "); // O split é uma função usada para separar/dividir um elemento a partir de tal parte transformando ela em uma array.
console.log(citySplit); // ["São", "Paulo"];

let cityLenght = city.length; // O length é uma propriedade que diz quantas letras tem o elemento.
console.log(cityLenght); // 9

let cityReplace = city.replace("São Paulo", "Rio de Janeiro"); // O replace é uma função usado para reescrever um elemento, ele recebe dois valores, o que vai ser reescrito e pelo o que vai ser reescrito.
console.log(cityReplace); // Rio de janeiro

// Nomeie 5 propriedades ou métodos de elementos do DOM.
let btn = document.querySelector(".btn"); // Está selecionando a classe btn do HTML.

// Responsável por fazer um evento de clique.
btn.addEventListener("click", function () {
  console.log("Fui clicado."); // Fui clicado.
});

btn.classList.add("teste"); // Responsável por adicionar uma classe no elemento.

btn.innerHTML = "Clique aqui"; // Responsável por modificar o texto do elemento.

// Atribui uma modificação na cor do background e na borda do elemento.
btn.style.backgroundColor = "#FFF";
btn.style.borderColor = "#F1F1F1";

btn.append(" para copiar"); // Adiciona um novo texto sem retirar o anterior.

// Busque na web um objeto (método) capaz de interagir com o clipboard, clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V.
btn.addEventListener("click", function () {
  let input = document.querySelector(".input").value; // Está pegando o value(valor digitado) do input e armazenando na variável.
  navigator.clipboard.writeText(input); // Responsável por copiar o texto digitado no input e armazenar no clipboard.
});
