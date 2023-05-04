//* > Introdução a construtor array.

const citys = ["São Paulo", "Rio de Janeiro", "Ribeirão Preto"]; // Criado uma array contendo 3 elementos do tipo string.
console.log(citys); // Retorna a array no console.

const price = [49, 99, 69, 89]; // Criado uma array contendo 4 elementos do tipo number.
console.log(price); // Retorna a array no console.

// Numa mesma array podemos trabalhar com vários tipos de dados, como: number, string, object, array dentro de array, função e etc.
const datas = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

console.log(datas[2]("Ford")); // Está acessando o segundo elemento da Array no caso a função, e está passando um parâmetro para ela fazendo ela ser executada..
console.log(datas[1][2].cor); // Está acessando o segundo elemento, no caso o objeto e em seguida acessando o terceiro elemento da array, no caso o objeto, e por fim acessando o elemento do objeto.

//* > Construção de arrays.

const instruments = ["Guitarra", "Baixo", "Violão"]; // Criado uma array comum contendo 3 elementos.
console.log(instruments); // Retorna a array no console.

const car = new Array("Corola", "Mustang", "Honda"); // Criado uma array chamada car que está recebendo 3 elementos.
console.log(car); // Retorna a nova array no console.

console.log(instruments[2]); // Retorna Violão no console.
console.log(car[1]); // Retorna Mustang no console.
console.log((car[2] = "Ferrari")); // Está reescrevendo o valor de Honda para Ferrari no console.
console.log((car[10] = "Parati")); // Está criando um elemento no index 11 a string chamada Parati(quando criado assim os index anteriores ficarão vazios).

console.log(car.length); // Retorna 3 no console, pois são apenas 3 elementos.

//* > Método Array.from.

const li = document.querySelectorAll("li"); // Está puxando todos os elementos LI do DOM.

console.log(li); // Retorna uma array-like(nodeList) no console.
// O Array.from é um método usado para transformar uma array-like(nodeList) em uma array.
const arrayLI = Array.from(li); // Armazena a conversão da array-like para array.
console.log(arrayLI); // Retorna no console a array.

//* > Método Array.isArray.

// O Array.isArray é um método usado para verificar se o valor passado é uma array ou não, através de valor boolean.
console.log(Array.isArray(li)); // Retorna false no console, pois é uma nodeList e não uma array.
console.log(Array.isArray(arrayLI)); // Retorna true no console, pois foi convertido a nodeList para uma array.

//* > Métodos de criação de array.

console.log(Array.of(10)); // Cria uma array contendo 10 itens vazios.
console.log(Array.of(1, 2, 3, 4)); // Cria uma array contendo 4 itens do tipo number.
console.log(new Array(5)); // Cria uma nova array contendo 5 itens vazios.
console.log(Array(5)); // Cria uma nova array contendo 5 itens vazios.
console.log(Array(1, 2, 3, 4)); // Cria uma array contendo 4 itens do tipo number.

//* > Propriedade length.

const frutas = ["Banana", "Maçã", ["Uva Roxa", "Uva Verde"]]; // Criado uma array chamada frutas contendo outra array dentro.
console.log(frutas); // Retorna no console a array frutas.

// A propriedade length é usado para retornar o tamanho da array.
console.log(frutas.length); // Retorna 3 no console, pois há 3 elementos na array frutas.
console.log(frutas[0].length); // Retorna 6 no console pois ele ta contando quantas letras há no primeiro elemento da array.
console.log(frutas[1].length); // Retorna 4 no console pois ele ta contando quantas letras há no segundo elemento da array.
console.log(frutas[2].length); // Retorna 2 no console pois ele ta contando quantos elementos há presente dentro da array criada.
console.log(frutas[2][0].length); // Retorna 8 no console pois ele ta contando quantas letras há no primeiro elemento da array filho.

//* > Método modificador sort.

const names = ["Zac", "Laura", "Carlos", "Felipe"]; // Criado uma array contendo 4 elementos string.

// O método sort é usado para ordenar os itens de uma array em ordem alfabética.
console.log(names.sort()); // Retorna a array com as string organizados por ordem alfabética.
console.log(names); // Modificou a array, sendo assim reescreveu a array original.

const ages = [32, 21, 33, 43, 1, 12, 8]; // Criado uma array contendo 7 elementos number.

// O método sort também pode ser usado para ordenar números a partir do seu caractere, sendo assim ele irá primeira ordenar do menor para o maior contando o primeiro caractere e depois de terminar todos ele vai para o segundo.
console.log(ages.sort()); // Retorna a array com os números em ordem crescente.
console.log(ages); // Modificou a array, sendo assim reescreveu a array original.

//* > Método modificador unshift.

const carBrand = ["Ford", "Fiat", "VW"]; // Criado uma array chamada carBrand que contém 3 elementos do tipo string.

// O método unshift é usado para adicionar elementos ao inicio da array e retorna o length(tamanho) da array.
console.log(carBrand.unshift("Honda", "Kia")); // Adiciona os elementos no inicio da array e retorna o tamanho da array no console, no caso 5.
console.log(carBrand); // Retorna a array com os dois elementos criados no inicio dela.

//* > Método modificador push.

// O método push é usado para adicionar elementos ao final da array e retorna o length(tamanho) da array.
console.log(carBrand.push("Ferrari")); // Adiciona o elemento no final da array e retorna o tamanho da array no console, no caso 6.
console.log(carBrand); // Retorna a array com o elemento criado no final dela.

//* > Método modificador shift.

// O método shift é usado para remover o primeiro elemento da array e retorna o elemento removido.
console.log(carBrand.shift()); // Mostra a string removida da array no console.
console.log(carBrand); // Retorna a array modificada, sendo assim sem o elemento removido.

//* > Método modificador pop.

// O método pop é usado para remover o ultimo elemento da array e retorna o elemento removido.
console.log(carBrand.pop()); // Mostra a string removida da array no console.
console.log(carBrand); // Retorna a array modificada, sendo assim sem o elemento removido.

//* > Método modificador reverse.

// O método reverse é usado para inverter os itens da array e retorna a nova array.
console.log(carBrand.reverse()); // Retorna no console a array com a ordem invertida.
console.log(carBrand); // Retorna a array modificada, sendo assim ele invertido.

//* > Método modificador splice.

// O método splice é usado para adicionar valores na array a partir do seu index, também remove a quantidade de itens que for passada no segundo parâmetro e retorna eles.
console.log(carBrand.splice(1, 0, "Uno", "Chevrolet")); // Adiciona os elementos a partir do index 1 e remove 0 elementos, retorna no console uma array vazia.
console.log(carBrand); // Retorna no console os elementos adicionados a partir do index 1.

console.log(carBrand.splice(3, 2, "Uno", "Chevrolet")); // Adiciona os elementos a partir do index 3 e remove 2 elementos da array, retorna os elementos da array no console.
console.log(carBrand); // Retorna no console os elementos adicionados a partir do index 3 mas sem os elementos removidos.

//* > Método modificador copyWithin.

// O método copyWithin é usado para a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2)); // Retorna ['Item1', 'Item2', 'Item1', 'Item2', 'Item3'] no console pois vai começar a modificar a partir do terceiro elemento, e faz uma copia da array a partir do primeiro item até o terceiro item.
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(-1)); // Retorna ['Item1', 'Item2', 'Item3', 'Item1'] no console, pois ele começa pelo final.

//* > Método modificador fill.

// O método fill preenche a array com o valor passado, sendo assim, os valores de inicio e fim.
console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana")); // Retorna ['Banana', 'Banana', 'Banana', 'Banana'] no console, pois não foi passado nenhum valor de inicio ou fim.
console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2)); // Retorna ['Item1', 'Item2', 'Banana', 'Banana'] no console pois começa a modificar a partir do terceiro index.
console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3)); // Retorna ['Item1', 'Banana', 'Banana', 'Banana'] no console, pois começa a modificar a partir do index 1 e termina no index 3.

//* > Método de acesso concat.

const transport1 = ["Barco", "Aviao"]; // Criado uma array chamada transport1 contendo dois elementos do tipo string.
const transport2 = ["Carro", "Moto"]; // Criado uma array chamada transport2 contendo dois elementos do tipo string.

// O método concat é usado para concatenar/juntar os elementos de uma array com outra.
// Obs.: Os métodos de acesso não modificam a array, sendo assim os seus valores iniciais não são alterados.
const transports = transport1.concat(transport2); // Está concatenando os elementos do transport1 com o do transport2.
console.log(transports); // Irá retornar no console os elementos das arrays concatenadas.

const moreTransports = [].concat(transport1, transport2, "Van"); // Passado uma array vazia e que está concatenando os elementos do transport1 com o do transport2. e adicionando um novo elemento na array.
console.log(moreTransports); // Retorna no console os elementos da array concatenados.

//* > Método de acesso includes, indexOf E indexLastOf.

const languages = ["HTML", "CSS", "JS", "PHP", "PYTHON", "JS"];

// O includes é um método responsável por retornar se um valor/elemento existe na array através de valor boolean.
console.log(languages.includes("CSS")); // Existe na array então irá retornar true.
console.log(languages.includes("RUBY")); // Não existe na array então irá retornar false.

// O indexOf é método usado para verificar se a array possui o valor e retorna o index do primeiro valor encontrado na array.
console.log(languages.indexOf("PYTHON")); // Está no index 4, então retorna 4 no console.
console.log(languages.indexOf("JS")); // Está no index 2(primeiro encontrado), então retorna 2 no console.

// O lastIndexOf retorna o último index encontrado e não o primeiro como o indexOf.
console.log(languages.lastIndexOf("JS")); // Está no index 5(ultimo encontrado), então retorna 5 no console

//* > Método de acesso join.

// O método join é usado para juntar todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
console.log(languages.join()); // Retorna a array em uma string, separando por virgulas(padrão caso o join esteja sem nada).
console.log(languages.join(" ")); // Retorna a array tendo cada item separada por espaço.
console.log(languages.join("-_-")); // Retorna a array tendo cada item seu separado por caracteres definidos.

let htmlString = '<h2>Título Principal</h2>'; // Criado uma string contendo um elemento HTML.
htmlString = htmlString.split('h2'); // O split é um método usada para separar/dividir um elemento a partir de tal parte(nesse caso a cada h2) e separando/transformando ela em uma array.
console.log(htmlString); // Retorna no console uma array separada pelos H2..
htmlString = htmlString.join('h1'); // O join está transformando em string novamente e preenchendo os espaços em brancos pelo elemento H1.
console.log(htmlString); // Retorna no console uma string contendo H1.

//* > Método de acesso slice.

// O método slice recebe dois parâmetros, o inicio e o valor final e por fim retorna os itens da array selecionados.
console.log(languages.slice(3)); // Retorna a partir do index 3.
console.log(languages.slice(1, 4)); // Retorna a array começando do index 1 até o index 4

const cloneLanguages = languages.slice(); // Podemos evitar de passar valores dentro para usar o slice para clonar uma array.
console.log(cloneLanguages); // Mostra a array clonada.
