// Verifique se a sua idade é maior do que a de algum parente.
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 19;
let maeIdade = 38;
let paiIdade = 42;

if (minhaIdade > maeIdade) {
  console.log("É maior.");
} else if (minhaIdade === maeIdade) {
  console.log("É igual.");
} else {
  console.log("É menor.");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil tem mais habitantes que a China.");
} else {
  console.log("Brasil tem menos habitantes que a China.");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // Irá retornar falso
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // Cão
} else {
  console.log("Falso");
}
