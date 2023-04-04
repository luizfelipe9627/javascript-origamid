// * Como descobrir o tipo de dado.

let nome = "Luiz"; // Criado uma variável armazenando uma string.
console.log(typeof nome); // Retorna string no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.

// * Concatenar string.

let cidade = "São Paulo";
let estado = "SP";
let infosLocal = cidade + " " + estado; // Para concatenar uma string usamos o simbolo +.
console.log(infosLocal); // Retorna São Paulo SP no console. Mostra no console as strings concatenadas em uma.

// * Aspas dentro de string.

let frase1 = "Esse é o 'melhor' jogo do mundo."; // Podemos botar aspas dentro de aspas também em uma string(portanto que seja aspas diferentes uma da outra).
console.log(frase1); // Retorna Esse é o 'melhor' jogo do mundo. no console .

let frase2 = "Esse é o 'pior' jogo do mundo."; // Ou podemos usar o "\" para tirar a função especial das aspas.
console.log(frase2); // Retorna Esse é o 'pior' jogo do mundo. no console .

// * Template string.

let gols = 1000;
let frase3 = `Luan fez ${gols} gols.`; // Podemos utilizar o template string utilizando "``".
console.log(frase3); // Retorna Luan fez 1000 gols no console.

// * Tipo de dado number.

let idade = 19; // Criado uma variável armazenando um number.
console.log(typeof idade); // Retorna number no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.

// * Tipo de dado undefined.

let time; // Criado uma variável armazenando um valor undefined.
console.log(typeof time); // Retorna undefined no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.

// * Tipo de dado symbol.

let symbol = Symbol(); // Criado uma variável armazenando um valor symbol.
console.log(typeof symbol); // Retorna symbol() no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.
