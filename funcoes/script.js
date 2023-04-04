// * Funções.

// Criado uma função chamada areaQuadrada, que recebe um parâmetro chamado area.
function areaQuadrada(lado) {
  return lado * lado; // Retorna o valor atribuído ao parâmetro da função e multiplica por ela mesma.
}

console.log(areaQuadrada(10)); // Retorna no console 100. Está chamando a função e atribuindo um argumento no parâmetro da função.

// Criado uma função chamada pi, que não recebe nenhum parâmetro.
function pi() {
  return 3.14; // Retornar o valor number 3.14;
}

console.log(pi()); // Retorna o valor atribuído na função pi.

let total = 5 * pi(); // Criado uma variável que armazena 5 vezes o valor definido na função pi, no caso 5x3.14.
console.log(total); // Retorno no console 15.700000000000001.

// Função chamada imc contendo dois parâmetros, sendo peso e altura.
function imc(peso, altura) {
  let imc = peso / (altura * altura); // Variável responsável por armazenar o cálculo IMC.
  return imc; // Retorna o valor do cálculo.
}
console.log(imc(60, 1.8)); // Retorna 18.51851851851852 no console. Chama a função e atribui argumentos nos parâmetros da função.

// Criada função chamada corFavorita que recebe um parâmetro chamada cor.
function corFavorita(cor) {
  if (cor === "Azul") {
    return "Eu gosto do céu.";
  } else if (cor === "Verde") {
    return "Eu gosto da floresta.";
  } else {
    // Como não tem valor igual as condicionais como argumento da função ele irá retornar o else.
    return "Eu não gosto de nada.";
  }
}

console.log(corFavorita()); // Retorna Eu não gosto de nada. no console.

// Podemos usar argumentos como funções utilizando um evento de escuta.
// O primeiro parâmetro é o tipo de evento, no caso foi usado o de click, e no segundo parâmetro é passado o que vai ser executado, no caso uma função de callback.
addEventListener("click", function () {
  console.log("Clicado.");
});

// Função chamada imc contendo dois parâmetros, sendo peso e altura.
function imc2(peso, altura) {
  let imc = peso / (altura * altura); // Variável responsável por armazenar o cálculo IMC.
  console.log(imc); // Mostra no console o resultado do cálculo IMC.
}

imc2(70, 1.5); // Retorna 31.11111111111111 no console. Chama a função e atribui argumentos nos parâmetros da função.

console.log(imc2(20, 1.8)); // Retorna undefined no console. Irá executar a função, mostrar no console e em seguida retornar undefined no console pois não há um return na função.

// Uma função chamada terceiraIdade que tem um parâmetro chamado idade, que usa vários tipos de dados.
function terceiraIdade(idade) {
  // Faz uma verificação condicional tendo como resultado um valor string.
  if (typeof idade !== "number") {
    return "Por favor preencha um número.";
  }
  // Faz uma verificação condicional tendo resultado um valor boolean.
  else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("60")); // Retorna true no console.

// Função responsável por dizer quantos países faltar visitar, tendo um parâmetro que armazena os países visitados.
function paisesVisitados(paises) {
  // Escopo da função, só funciona dentro da função.
  let totalPaises = 193;
  return `Faltam visitar ${totalPaises - paises} países.`;
}

console.log(paisesVisitados(20)); // Retorna Faltam visitar 173 países. no console. 

// console.log(totalPaises); // Irá retornar um erro falando que não foi definido, pois a variável existe somente ao escopo local da função.
