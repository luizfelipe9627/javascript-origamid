// Crie uma função para verificar se um valor é Truthy.
function isTrue(value) {
  return !!value;
}

console.log(isTrue(""));

// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado.
function squarePerimeter(square) {
  return square * 4;
}

console.log(squarePerimeter(4));

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome.
function fullName(name, lastname) {
  return `${name} ${lastname}`;
}

console.log(fullName("Luiz Felipe", "Silva"));

// Crie uma função que verifica se um número é par.
function isEven(value) {
  if (value % 2 === 0) {
    return "Este número é par.";
  } else {
    return "Este número não é par.";
  }
}

console.log(isEven(6));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof).
function dataType(type) {
  return typeof type;
}

console.log(dataType("Olá"));

// addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo o Callback, utilize essa função para mostrar no console o seu nome completo, quando o evento 'click' ocorrer.
addEventListener("click", function () {
  let nomeCompleto = "Luiz Felipe S. C. Silva";
  console.log(nomeCompleto);
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países.`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
