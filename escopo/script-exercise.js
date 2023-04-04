// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;

  console.log(cor, marca, portas); // * Tem que ficar no mesmo bloco ou escopo.
}

// Como corrigir o erro abaixo?
const dois = 2; // * Como é usado em diferentes funções tem que ser uma variável global.

function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50; // * Foi mudado de var para const para ele não for pego no for.

// * Mudado de var para let, que é o apropriado para usar em loops.
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;

console.log(total);
