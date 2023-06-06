//* > Iterable.

// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros. Tanto o valor armazenado na constante fruits e phrase tem no seu prototype o [Symbol.iterator], até mesmo o Header do Response do then tem, sendo assim podemos fazer iterações.
const fruitsTest = ["Banana", "Morango", "Uva"];
const phraseTest = "Isso é JavaScript";
fetch("https://pokeapi.co/api/v2/pokemon/").then(
  ({ headers }) => console.log(headers) // Mostra a resposta no console.
);

//* > For...of.

// É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.
const fruits1 = ["Maça", "Melão", "Uva"];
const phrase = "Isso é JavaScript";

// O for of faz um loop que passa por cada item da array fruits1 e armazena cada item na variável criada, nesse caso o fruit. O for of funciona de um jeito  bem parecido com o forEach.
for (const fruit of fruits1) {
  console.log(fruit); // Mostra no console o item atual que foi percorrido da array até não existir mais elementos para percorrer.
}

// O for of faz um loop que passa por cada item(no caso letra) da string phrase e armazena cada item na variável criada, nesse caso a constante char. O for of funciona de um jeito  bem parecido com o forEach.
for (const char of phrase) {
  console.log(char); // Mostra no console a letra atual que foi percorrido da string até não existir mais letras para percorrer.
}

//* > Spread e For...of.

const buttons = document.querySelectorAll("button"); // Pega todos os elementos do tipo button presentes no DOM e armazena eles como NodeList na constante buttons.

// Com o for loop podemos manipular cada um dos elementos do objeto iterável. O for of passa por cada elemento button presente na NodeList da constante buttons e armazena o item atual na constante button.
for (const button of buttons) {
  button.style.background = "tomato"; // Altera o background do botão atual que o for of está passsando.
}

console.log(...buttons); // Mostra no console cada item presente na constante buttons.

//* > Apenas iteráveis.

// O for...of não irá funcionar em um objeto comum que não seja iterável.
const car1 = {
  brand: "Honda",
  year: 2018,
};

// Irá mostrar um erro, pois objeto não é iterável do tipo for of.
// for (const key of car1) {
//console.log(key);
//}

//* > For...in.

// Criado um objeto chamado car2.
const car2 = {
  brand: "Honda",
  year: 2018,
};

// Define as propriedades do objeto car2.
Object.defineProperties(car2, {
  // Cria uma propriedade chamado rodas.
  wheels: {
    value: 4, // A propriedade wheels recebe o valor 4 como resultado.
    enumerable: true, // Permite que o for in faã o loop pela a propriedade wheels.
  },
});

// O for in irá percorrer cada item do objeto e armazenar a chave(nome da propriedade) na variável criada a não ser que seja definido as propriedades do objeto, nesse caso a key.
for (const key in car2) {
  console.log(key, car2[key]); // Mostra no console o as chaves armazenadas na constante a cada iteração e também mostra o resultado da chave através do objeto e o seu index.
}

//* > Arrays e For...in.

// Uma array é um objeto, porém a chave de cada valor é igual ao seu index.
const fruits2 = ["Banana", "Morango", "Uva"]; // Criado uma array que está sendo armazenada na constante criada chamada fruits2.

// O for in irá percorrer por cada item da array fruits2 e armazenar a chave(nesse caso o index) na variável criada.
for (const index in fruits2) {
  console.log(index); // Mostra no console o index de cada propriedade da array.
}

// O for in irá percorrer por cada item da array fruits2 e armazenar a chave(nesse caso o index) na variável criada.
for (const index in fruits2) {
  console.log(fruits2[index]); // Mostra no console cada propriedade da array.
}

//* > Chave e Valor.
// Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.
const btn = document.querySelector("button"); // Pega o primeiro elemento do tipo button presente no DOM e armazena ele na constante btn.
const btnStyles = getComputedStyle(btn); // O método getComputedStyle pega todos os estilos do elemento btn e armazena na constante btnStyles como objeto.

// O for in percorre por cada item presente no objeto btnStyles e armazena na variável criada style.
for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`); // Acessa a chave do objeto e depois acessa o resultado da chave e mostra no console como string.
}

//* > Do / While.

let i = 0; // Criado uma variável contadora chamada i que armazena um valor do tipo number.

// O Do é literalmente "faça".
do {
  console.log(i++); // Incrementar um número no inicializador.
  // Enquanto(while) o inicializador for menor ou igual a 5 ele irá retornar true e irá continuar executando o do, caso contrário se for false encerra o bloco de comandos do DO.
} while (i <= 5);
