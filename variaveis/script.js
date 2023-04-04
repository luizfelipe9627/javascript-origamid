// O var é um tipo de variável que pode ter seu valor redeclarado/modificado.
var nome = "Luiz";
var idade = 18;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade); // Mostra os valores das variáveis no console do browser.

// Podemos criar várias variáveis usando apenas um var.
var sobrenome = "Silva",
  cidade = "São Paulo",
  estado = "SP";
console.log(sobrenome, cidade, estado); // Mostra os valores das variáveis no console do browser.

var semValor; // Cria uma variável sem nenhum tipo de valor.
console.log(semValor); // Mostra os valores da variável no console do browser.

console.log(comida); // A variável comida não tem um valor então irá retornar undefined.
var comida = "Pizza"; // Irá ser ignorando no console pois o JavaScript lê de cima para baixo.
console.log(comida); // Agora se chamarmos a variável novamente no console, ela irá aparecer, pois já foi definido em cima.

var time = "Vasco"; // Cria uma variável com um valor.
console.log(time); // Irá mostrar o valor atribuído a variável time.

time = "Santos"; // Está reescrevendo o valor da variável time(só é possível fazer isso com var e let).
console.log(time); // Irá mostrar o novo valor atribuído a variável time.

let signo = "Cancer"; // Cria uma variável let com um valor único que não pode ser recriado.
// let signo = 'Escorpião'; // Irá dar erro pois já foi definido uma variável chamada cidade. Foi comentado para não dar erro no console.
console.log(signo);

const nacionalidade = "Brasileiro"; // Podemos também criar uma variável constante que não pode ser recriada e nem ter seu valor alterado.
// nacionalidade = 'Mexicano'; // Irá dar erro pois já foi definido um valor para essa variável. Foi comentado para não dar erro no console.
console.log(nacionalidade);
