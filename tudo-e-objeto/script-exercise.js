// Nomeie 3 propriedades ou métodos de strings.
let city = "São Paulo";
// O split é uma função usada para separar/dividir um elemento a partir de tal parte transformando ela em uma array.
let citySplit = city.split(" ");
console.log(citySplit);
// O length é uma propriedade que diz quantas letras tem o elemento.
let cityLenght = city.length;
console.log(cityLenght);
// O replace é uma função usado para reescrever um elemento, ele recebe dois valores, o que vai ser reescrito e pelo o que vai ser reescrito.
let cityReplace = city.replace("São Paulo", "Rio de Janeiro");
console.log(cityReplace);

// Nomeie 5 propriedades ou métodos de elementos do DOM.
let btn = document.querySelector(".btn");
// Responsável por fazer um evento de clique.
btn.addEventListener("click", function () {
  console.log("Fui clicado.");
});
// Responsável por adicionar uma classe no elemento.
btn.classList.add("teste");
// Responsável por modificar o texto do elemento.
btn.innerHTML = "Clique aqui";
// Atribui uma modificação na cor do background e na borda do elemento.
btn.style.backgroundColor = "#FFF";
btn.style.borderColor = "#F1F1F1";
// Adiciona um novo texto sem retirar o anterior.
btn.append(" para copiar");

// Busque na web um objeto (método) capaz de interagir com o clipboard, clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V.
btn.addEventListener("click", function () {
  // Está pegando o value(valor digitado) do input e armazenando na variável.
  let input = document.querySelector(".input").value;
  // Responsável por copiar o texto digitado no input e armazenar no clipboard.
  navigator.clipboard.writeText(input);
});
