// O var é um tipo de variável que pode ter seu valor redeclarado/modificado.
var myName = "Luiz";
var myAge = 18;
var faculty = true;
console.log(myName, myAge, faculty); // Mostra os valores das variáveis no console do browser.

// Podemos criar várias variáveis usando apenas um var.
var lastname = "Silva",
  city = "São Paulo",
  state = "SP";
console.log(lastname, city, state); // Mostra os valores das variáveis no console do browser.

var valueLess; // Cria uma variável sem nenhum tipo de valor.
console.log(valueLess); // Mostra os valores da variável no console do browser.

console.log(food); // A variável comida não tem um valor então irá retornar undefined.
var food = "Pizza"; // Irá ser ignorando no console pois o JavaScript lê de cima para baixo.
console.log(food); // Agora se chamarmos a variável novamente no console, ela irá aparecer, pois já foi definido em cima.

var timeSoccer = "Vasco"; // Cria uma variável com um valor.
console.log(timeSoccer); // Irá mostrar o valor atribuído a variável time.

timeSoccer = "Santos"; // Está reescrevendo o valor da variável time(só é possível fazer isso com var e let).
console.log(timeSoccer); // Irá mostrar o novo valor atribuído a variável time.

let sign = "Cancer"; // Cria uma variável let com um valor único que não pode ser recriado.
// let signo = 'Escorpião'; // Irá dar erro pois já foi definido uma variável chamada cidade. Foi comentado para não dar erro no console.
console.log(sign);

const nationality = "Brasileiro"; // Podemos também criar uma variável constante que não pode ser recriada e nem ter seu valor alterado.
// nacionalidade = 'Mexicano'; // Irá dar erro pois já foi definido um valor para essa variável. Foi comentado para não dar erro no console.
console.log(nationality);
