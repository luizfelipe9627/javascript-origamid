//* > Definindo e criando number.

const year = 2023; // Criado uma variável chamada year que armazena o number 2023.
console.log(year); // Retorna o number no console.
const day = new Number(23); // Cria um objeto do tipo construtor number que recebe o valor 23.
console.log(day); // Retorna o objeto construtor no console.

//* > Métodos e propriedades de um number.

// O isNaN é um método usado para verificar se o valor colocado dentro do seu parâmetro é NaN, retornando true ou false.
console.log(Number.isNaN(NaN)); // Retorna true no console pois é um valor NaN.
console.log(Number.isNaN(5)); // Retorna false no console pois não é um valor NaN.
console.log(Number.isNaN("teste")); // Retorna false no console pois não é um valor NaN.

// O isInteger é um método usado para verificar se um valor é integral(sem valor decimal, sendo assim aceita somente números inteiros).
console.log(Number.isInteger(10)); // Retorna true no console pois é um valor int.
console.log(Number.isInteger(10.5)); // Retorna false no console pois é um valor float.

// O parseFloat é um método que transforma string em number quebrado(float).
console.log(Number.parseFloat("99.50")); // Retorna 99.5 no console, mas sem o 0 pois ele não é um valor(quebrado no caso).
console.log(Number.parseFloat("100 Reais")); // Retorna 100 no console.
console.log(Number.parseFloat("R$ 100")); // Retorna NaN no console pois não reconhece caractere.

// O parseInt é um método que transforma a string em number inteiro(int).
// Obs.: É passado o valor 10 no segundo parâmetro para falar que são números decimais.
console.log(Number.parseInt("99.50", 10)); // Retorna 99 no console.
console.log(Number.parseInt(5.43434355555, 10)); // Retorna 5 no console.
console.log(Number.parseInt("100 Reais", 10)); // Retorna 100 no console.

// O toFixed é uma propriedade que arredonda o número com base no total de casas decimais do valor definido. Recebe um valor(opcional) como parâmetro que é quantas casas decimais vai ter.
// Usamos o "+" para transformar uma string em um number.
const price1 = 2.99;
console.log(+price1.toFixed()); // Retorna 3 no console.

const car = 1000.455;
console.log(+car.toFixed(2)); // Retorna 1000.46 no console.

const price2 = 1499.49;
console.log(+price2.toFixed()); // Retorna 1499 no console.

// O toString transforma numbers em string. Use o valor 10 para o sistema decimal.
const tel = 99999999;
console.log(tel.toString(10));

// O toLocaleString é um método usado para formatar o número de acordo com a lingua e opções passadas.
const price3 = 59.49;
console.log(
  price3.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // Retorna $59.49 no console.
console.log(
  price3.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
); // Retorna R$ 59,49 no console.)

//* > Objeto nativo Math.

// O PI é uma propriedade responsável por retornar o número de PI.
console.log(Math.PI); // Retorna 3.141592653589793 no console.

// O abs é um método responsável por retornar o número absoluto de um vaor.
console.log(Math.abs(-5)); // Retorna no console o número absoluto(sendo assim sempre positivo) do valor definido.

// O ceil é um método usado para arredondar um valor quebrado em inteiro(sempre para cima do valor inicial).
console.log(Math.ceil(4.8334)); // Retorna 5 no console.
console.log(Math.ceil(4.3)); // Retorna 5 no console.

// O floor é um método usado para arredondar um valor quebrado em inteiro(sempre para abaixo do valor inicial).
console.log(Math.floor(4.8334)); // Retorna 4 no console.
console.log(Math.floor(4.3)); // Retorna 4 no console.

// O round é um método que segue o padrão da matemática, sendo assim ele arredonda para o valor mais próximo.
console.log(Math.round(4.8334)); // Retorna 5 no console.
console.log(Math.round(4.3)); // Retorna 4 no console.

// O max é um método usado para retornar o maior valor passado.
console.log(Math.max(5, 20, 30, 10)); // Retorna 30 no console.

// O max é um método usado para retornar o menor valor passado.
console.log(Math.min(5, 20, 30, 10)); // Retorna 5 no console.

// O random é um método usado para criar valores aleatórios.
console.log(Math.random()); // Retorna um número aleatório do tipo float no console.
// Podemos usar o floor em conjunto com o random para criar um campo menor de aleatoriedade de número int.
console.log(Math.floor(Math.random() * 100)); // Retorna no console um número entre 0 a 100.
console.log(Math.floor(Math.random() * 500)); // Retorna no console um número entre 0 a 500.
// Ou podemos fazer colocando um número máximo menos o mínimo mais 1 e por fora dos parenteses somar com o mínimo novamente.
// Math.floor(Math.random() * (max - min + 1) + min);
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32); // Retorna no console um número aleatório entre 72 a 32.
