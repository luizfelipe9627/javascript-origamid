//* Definindo e criando string.

const food = "Pizza"; // Criado uma variável que armazena a string Pizza.
console.log(food); // Retorna a string no console.

const water = new String("Water"); // Cria um objeto do tipo construtor string.
console.log(water); // Retorna o objeto construtor no console.

// Os dois podem possuir os mesmos métodos, mesmo um sendo um object string e outro uma string comum.

// O toLowerCase é uma função usada para deixar todas as letras do elemento em maiúscula.
console.log(food.toLowerCase()); // Retorna a string com todas as letras em maiúsculas.
// O toLowerCase é uma função usada para deixar todas as letras do elemento em minusculas.
console.log(water.toUpperCase()); // Retorna a string com todas as letras em maiúsculas.

//* Acessar o index de uma string.

const phrase = "A melhor comida";
console.log(phrase[0]); // Retorna "A" no console.
console.log(phrase[2]); // Retorna "m" no console.
// Podemos usar o length para retornar sempre a última letra do elemento.
console.log(phrase[phrase.length - 1]); // Retorna "a" no console.

//* Métodos e propriedades de uma string.

// O length é uma propriedade usada para retornar quantas letras tem o valor(espaços também contam).
console.log(food.length); // Retorna "5" no console.

// O charAt é responsável por retornar o caractere de acordo com o index passado no seu parâmetro.
console.log(food.charAt(2)); // Retorna "z" no console.
console.log(food.charAt(food.length - 1)); // Retorna a última letra da string, sendo assim retorna "a" no console.

const firstname = "Luiz Felipe";
const lastname = " Silva";
// O concat é um método responsável por concatenar uma string em outra.
console.log(firstname.concat(lastname, "!!")); // Retorna no console a string firstname concatenada com lastname e com as "!!".

const fruits = "Banana";
const listFruits = "Melancia, Banana, Laranja";

// O includes é um método usado para buscar a existência de um elemento no outro, que recebe dois parâmetros, o primeiro o elemento a ser buscado e segundo a posição que ele irá começar a buscar o elemento.
console.log(listFruits.includes(fruits)); // Retorna true no console pois um dos valores do listFruits está presente em fruits.
console.log(fruits.includes(listFruits)); // Retorna false no console pois o valor de fruits não contém todo o valor do listFruits.

// O startsWitch é um método usado para retornar se tal string começa de um jeito, retorna um valor boolean.
console.log(fruits.startsWith("Ba")); // Retorna true, pois o valor armazenado em fruits começa com Ba.
console.log(fruits.startsWith("na")); // Retorna false, pois o valor armazenado em fruits não começa com na.

// Temos também o endWitch que é um método usado para retornar se tal string termina de um jeito, retorna um valor boolean.
console.log(fruits.endsWith("Ba")); // Retorna false, pois o valor armazenado em fruits termina com na.
console.log(fruits.endsWith("na")); // Retorna true, pois o valor armazenado em fruits começa com na.

// O slice é um método usado para retornar uma parte da string, tendo dois parâmetros, o primeiro é de onde vai começar e o outro e onde vai terminar.
console.log(fruits.slice(1, 3)); // Retorna an no console, sendo assim irá recortar somente a partir do 2 e até o 3.
console.log(fruits.slice(1)); // Retorna anana no console, pois sem um fim ele irá recortar somente o inicio.
console.log(fruits.slice(2, -2)); // Retornou as duas primeiras letras e como teve valor negativo ele começou pegar de trás para frente.
console.log(fruits.slice(-1)); // Retorna a no console, pois sem um fim ele irá recortar somente o fim.

// O indexOf é um método usado para retornar o primeiro index que tal letra está.
console.log(fruits.indexOf("n")); // Retorna 2 no console, mesmo tendo vários N ele prioriza sempre o primeiro.

// O lastIndexOf é um método usado para retornar o último index que tal letra está.
console.log(fruits.lastIndexOf("n")); // Retorna 4 no console, mesmo tendo vários N ele prioriza sempre o último.

const priceList = ["R$ 99", "R$ 199", "R$ 12000"];
// Criado um forEach para percorrer por todos os elementos da array priceList.
priceList.forEach((preco) => {
  // Passa por cada preco e adiciona no máximo 10 "." no inicio deles até manter eles alinhados.
  console.log(preco.padStart(10, ".")); // Retorna no console as strings com os caracteres.
});
// o padStart é um método usado para aumentar caracteres a partir do inicio do elemento. Recebe dois parâmetros sendo o primeiro o quanto de caractere/numer/string/etc vai ser colocado e o segundo qual tipo de caractere vai ser acrescentado.(ele conta também o espaço ocupado pela string e por isso não completa os 10).
console.log(priceList[0].padStart(10, ".")); // Retorna no console o primeiro elemento da Array seguido de 10 "." definidos no padStart.
// o padEnd é um método usado para aumentar caracteres a partir do final do elemento. Recebe dois parâmetros sendo o primeiro o quanto de caractere/numer/string/etc vai ser colocado e o segundo qual tipo de caractere vai ser acrescentado(ele conta também o espaço ocupado pela string e por isso não completa os 10).
console.log(priceList[0].padEnd(10, "."));

// O repeat é um método usado para repetir uma string, no seu parâmetro recebe a quantidade de repetições a ser feita.
const city = "São Paulo ";
console.log(city.repeat(2)); // Retorna São Paulo São Paulo no console.

let listItems = "Camisas Bonés Calças Bermudas Vestidos Saias";
// O replace é um método responsável por trocar parte da string por outra. Está usando regexp para pegar todos os espaços usados(caso não usar o replace pega somente vai funcionar no primeiro item que ele encontrar).
listItems = listItems.replace(/[ ]+/g, ", ");
console.log(listItems); // Retorna no console a string com virgula antes de cada espaço.
let price = "R$ 1200,43";
price = price.replace(",", "."); // Está pegando a virgula da string e transformando em um ponto.
console.log(price); // Retorna no console o valor com o "." ao invés da ",".

// O split é um método que divide a string de acordo com o padrão passado e retorna uma array.
console.log(listItems.split(", ")); // Retorna no console uma array que divide sempre quando tiver virgula seguida de espaço.
console.log(listItems.split("")); // Retorna no console uma array com todas as letras separadas.

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>"; // Criado uma string contendo tag e elemento html.
console.log(htmlText); // Retorna a string no console.
const htmlArray = htmlText.split("div"); // Irá separar em array cada vez que houver uma div, removendo o elemento passado também.
console.log(htmlArray); // Retorna a string em array e sem as divs.
const htmlNew = htmlArray.join("section"); // O join é um método usado para acrescentar algo no final de cada elemento de uma array.
console.log(htmlNew); // Retorna a string trocada no console.

const value = "  R$ 23.00   ";
// O trim é um método usado para remover espaços em branco do inicio ou final de uma string.
value.trim(); // Retorna R$ 23.00 sem espaços no console.
value.trimStart(); // Retorna no console R$ 23.00 sem espaços no inicio.
value.trimEnd(); // Retorna no console R$ 23.00 sem espaços no final.
