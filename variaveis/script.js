// O var é um tipo de variável que pode ter seu valor redeclarado/modificado.
var nome = "Luiz";
var idade = 18;
var possuiFaculdade = true;
// Mostra os valores das variáveis no console do browser.
console.log(nome, idade, possuiFaculdade);

// Podemos criar várias variáveis usando apenas um var.
var sobrenome = "Silva",
  cidade = "São Paulo",
  estado = "SP";
// Mostra os valores das variáveis no console do browser.
console.log(sobrenome, cidade, estado);

// Cria uma variável sem nenhum tipo de valor.
var semValor;
// Mostra os valores da variável no console do browser.
console.log(semValor);

// A variável comida não tem um valor então irá retornar undefined.
console.log(comida);
// Irá ser ignorando no console pois o JavaScript lê de cima para baixo.
var comida = "Pizza";
// Agora se chamarmos a variável novamente no console, ela irá aparecer, pois já foi definido em cima.
console.log(comida);

// Cria uma variável com um valor.
var time = "Vasco";
// Irá mostrar o valor atribuído a variável time.
console.log(time);
// Está reescrevendo o valor da variável time(só é possível fazer isso com var e let).
time = "Santos";
// Irá mostrar o novo valor atribuído a variável time.
console.log(time);

// Cria uma variável let com um valor único que não pode ser recriado.
let signo = 'Cancer';
// Irá dar erro pois já foi definido uma variável chamada cidade. Foi comentado para não dar erro no console.
// let signo = 'Escorpião';
console.log(signo)

// Podemos também criar uma variável constante que não pode ser recriada e nem ter seu valor alterado.
const nacionalidade = 'Brasileiro';
// Irá dar erro pois já foi definido um valor para essa variável. Foi comentado para não dar erro no console.
// nacionalidade = 'Mexicano';
console.log(nacionalidade);