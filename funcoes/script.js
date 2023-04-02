// Criado uma função chamada areaQuadrada, que recebe um parâmetro chamado area.
function areaQuadrada(lado) {
  // Retorna o valor atribuído ao parâmetro da função e multiplica por ela mesma.
  return lado * lado;
}
// Está chamando a função e atribuindo um argumento no parâmetro da função.
console.log(areaQuadrada(10)); // 100

// Criado uma função chamada pi, que não recebe nenhum parâmetro.
function pi() {
  // Retornar o valor number 3.14;
  return 3.14;
}
// Retorna o valor atribuído na função pi.
console.log(pi());
// Criado uma variável que armazena 5 vezes o valor definido na função pi, no caso 5x3.14.
let total = 5 * pi();
// Retorna o resultado da variável no console.
console.log(total); // 15.700000000000001

// Função chamada imc contendo dois parâmetros, sendo peso e altura.
function imc(peso, altura) {
  // Variável responsável por armazenar o cálculo IMC.
  let imc = peso / (altura * altura);
  // Retorna o valor do cálculo.
  return imc;
}
// Chama a função e atribui argumentos nos parâmetros da função.
console.log(imc(60, 1.8)); // 18.51851851851852

// Criada função chamada corFavorita que recebe um parâmetro chamada cor.
function corFavorita(cor) {
  if (cor === "Azul") {
    return "Eu gosto do céu.";
  } else if (cor === "Verde") {
    return "Eu gosto da floresta.";
  } else {
    return "Eu não gosto de nada.";
  }
}
// Como não tem valor igual as condicionais como argumento da função ele irá retornar o else.
console.log(corFavorita()); // Eu não gosto de nada.

// Podemos usar argumentos como funções utilizando um evento de escuta.
// O primeiro parâmetro é o tipo de evento, no caso foi usado o de click, e no segundo parâmetro é passado o que vai ser executado, no caso uma função de callback.
addEventListener("click", function () {
  console.log("Clicado.");
});

// Função chamada imc contendo dois parâmetros, sendo peso e altura.
function imc2(peso, altura) {
  // Variável responsável por armazenar o cálculo IMC.
  let imc = peso / (altura * altura);
  // Mostra no console o resultado do cálculo IMC.
  console.log(imc);
}
// Chama a função e atribui argumentos nos parâmetros da função.
imc2(70, 1.5); // 31.11111111111111
// Irá executar a função, mostrar no console e em seguida retornar undefined no console pois não há um return na função.
console.log(imc2(20, 1.8)); // undefined

// Uma função chamada terceiraIdade que tem um parâmetro chamado idade, que usa vários tipos de dados.
function terceiraIdade(idade) {
  // Faz uma verificação condicional tendo como resultado um valor string.
  if (typeof idade !== "number") {
    return 'Por favor preencha um número.';
  }
  // Faz uma verificação condicional tendo resultado um valor boolean.
  else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade('60'));

// Função responsável por dizer quantos países faltar visitar, tendo um parâmetro que armazena os países visitados.
function paisesVisitados(paises) {
  // Escopo da função, só funciona dentro da função.
  let totalPaises = 193;
  return `Faltam visitar ${totalPaises - paises} países.`
}
console.log(paisesVisitados(20))
// Irá retornar um erro falando que não foi definido, pois a variável existe somente ao escopo local da função.
// console.log(totalPaises);
