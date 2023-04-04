// * Tudo é objeto.

let firstName = "Luiz"; // A string armazenada na variável já é um objeto pois usa propriedades ou métodos para armazenar uma string.

let nameLowerCase = firstName.toLowerCase(); // O toLowerCase() é uma função/método que deixa todas as letras em minusculas.
console.log(nameLowerCase); // Retorna luiz no console.

let btn = document.querySelector(".btn"); // Usamos o document(objeto) e o querySelector(método/função) para selecionar um elemento HTML pelo JS utilizando a Classe ou ID atribuído ao elemento.
console.log(btn); // Retorna <button class="btn">Clique aqui</button> no console.
