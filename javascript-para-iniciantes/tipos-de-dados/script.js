// * Como descobrir o tipo de dado.

let myName = "Luiz"; // Criado uma variável armazenando uma string.
console.log(typeof myName); // Retorna string no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.

// * Concatenar string.

let city = "São Paulo";
let state = "SP";
let locantionInfo = city + " " + state; // Para concatenar uma string usamos o simbolo +.
console.log(locantionInfo); // Retorna São Paulo SP no console. Mostra no console as strings concatenadas em uma.

// * Aspas dentro de string.

let phrase1 = "Esse é o 'melhor' jogo do mundo."; // Podemos botar aspas dentro de aspas também em uma string(portanto que seja aspas diferentes uma da outra).
console.log(phrase1); // Retorna Esse é o 'melhor' jogo do mundo. no console .

let phrase2 = "Esse é o 'pior' jogo do mundo."; // Ou podemos usar o "\" para tirar a função especial das aspas.
console.log(phrase2); // Retorna Esse é o 'pior' jogo do mundo. no console .

// * Template string.

let gols = 1000;
let phrase3 = `Luan fez ${gols} gols.`; // Podemos utilizar o template string utilizando "``".
console.log(phrase3); // Retorna Luan fez 1000 gols no console.

// * Tipo de dado number.

let age = 19; // Criado uma variável armazenando um number.
console.log(typeof age); // Retorna number no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.

// * Tipo de dado undefined.

let timeSoccer; // Criado uma variável armazenando um valor undefined.
console.log(typeof timeSoccer); // Retorna undefined no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.

// * Tipo de dado symbol.

let symbol = Symbol(); // Criado uma variável armazenando um valor symbol.
console.log(typeof symbol); // Retorna symbol() no console. Verifica e mostra no console qual o tipo de valor está armazenado na variável.
