//* > Utilizando export e default.

// O export é usado para permitir que o código seja usado em outro arquivo JS. Não utiliza default pois não está exportando somente um elemento.

export function test1() {
  console.log("Esse é o teste 1.");
}
export function test2() {
  console.log("Esse é o teste 2.");
}
export function test3() {
  console.log("Esse é o teste 3.");
}

export const year = 2000; // Criado uma constante chamada password que armazena um valor number.
export const obj = { name: "Ford" }; // Criado uma constante chamada obj que armazena um objeto.
export const str = "Frase"; // Criado uma constante chamada str que armazena uma string.
export class Car {} // Criado uma constante chamada Car que armazena uma classe.

//* > Variáveis ficam no module apenas.

let thisName = "Luiz"; // O que não for exportado serve para apenas para o escopo do arquivo atual, se for acessado através de outro arquivo irá retornar um erro.

// * This fora de um objeto faz referência a undefined.

console.log(this); // Retorna undefined pois usando o type module o this não faz mais referência ao objeto pai(window), para evitar conflito entre propriedades.

//* > Use strict.

// 'use strict'; // O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.

// nome = 'Ford'; // Erro, variável global.
// delete Array.prototype; // Erro, não pode ser deletado.
// window.top = 200; // Erro, não pode mudar.
// const arguments = 3.14; // Erro, escrever em palavra reservada.
