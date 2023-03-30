// Criado uma variável armazenando uma string.
let nome = "Luiz";
// Verifica e mostra no console qual o tipo de valor está armazenado na variável.
console.log(typeof nome);

// Para concatenar uma string usamos o simbolo +.
let cidade = "São Paulo";
let estado = "SP";
let infosLocal = cidade + " " + estado;
// Mostra no console as strings concatenadas em uma.
console.log(infosLocal);
// Podemos botar aspas dentro de aspas também em uma string(portanto que seja aspas diferentes uma da outra).
let frase1 = "Esse é o 'melhor' jogo do mundo.";
console.log(frase1);
// Ou podemos usar o "\" para tirar a função especial das aspas.
let frase2 = "Esse é o \"pior\" jogo do mundo.";
console.log(frase2);
// Ou podemos utilizar o template string utilizando "``".
let gols = 1000;
let frase3 = `Luan fez ${gols} gols.`;
console.log(frase3);

// Criado uma variável armazenando um number.
let idade = 19;
// Verifica e mostra no console qual o tipo de valor está armazenado na variável.
console.log(typeof idade);

// Criado uma variável armazenando um valor undefined.
let time;
// Verifica e mostra no console qual o tipo de valor está armazenado na variável.
console.log(typeof time);

// Criado uma variável armazenando um valor symbol.
let symbol = Symbol();
// Verifica e mostra no console qual o tipo de valor está armazenado na variável.
console.log(typeof symbol);
