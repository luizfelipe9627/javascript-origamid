// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
let scrollNumber = 1000;
scrollNumber += 500;
console.log(scrollNumber); // 1500

// Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário.
let possuiCarro = true;
let possuiCasa = true;
let darCredito;
darCredito = possuiCarro && possuiCasa; // Irá retornar true ou false por padrão do ternário já que não tem um se/senão.
console.log(darCredito); // true
