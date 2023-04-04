"use strict"; // Serve para não permitir que erros como uma variável sem as palavras, let, var e const não aconteçam.

// * Escopo local e global.

function showCar() {
  let carFusca = "Fusca"; // Criado uma variável local, no caso só vai ser reconhecida dentro da função.
  console.log(carFusca); // Irá retornar "Fusca" no console.
}

showCar(); // Está invocando a função.

// console.log(carFusca); // Irá retornar "erro, car is not defined", a variável car está definida somente no escopo da função.

let carFerrari = "Ferrari"; // Criado uma variável global, no caso vai ser reconhecida em qualquer tipo de escopo.
console.log(carFerrari); // Agora irá mostrar no console pois está no escopo global.

// * O porque não utilizar o VAR.

if (true) {
  var month = "December"; // Utilizar o var não é recomendado pois ele ignora o contexto de escopo. É bom utilizar sempre let ou const que respeitam o escopo.
  console.log(month); // Irá retornar "December" no console.
}

console.log(month); // Irá funcionar também pois o var está ignorando o escopo que ele está.

// * Variável CONST.

const week = "Friday";
console.log(week); // Retorna Friday no console.

// week = 'Saturday'; // Irá retornar erro pois o const não permite ter seu valor alterado.

// const week = 'Monday'; // Irá retornar erro pois o const não permite criar a mesma constante mas com valor diferente.

// const empty; // Irá retornar erro pois também não permite deixar uma constante vazia.

const date = {
  year: 2024,
  month: "February",
};

date.year = 2022; // Funciona pois está alterando a propriedade do objeto e não o objeto em si.

date.days = 31; // Também funciona pois está adicionando uma nova propriedade no objeto.

// date = 'Uma string'; // Retorna erro pois está tentando alterar o objeto.

console.log(date); // Retorna {year: 2024, month: "February"} no console.

// * Variável LET.

let myYear; // Permite criar uma variável vazia.

myYear = 2003; // Permite sobrescrever o valor da variável

console.log(myYear); // 2003

// let myYear = 2000; // Retorna erro, pois o let não aceita redeclarar a mesma variável.
