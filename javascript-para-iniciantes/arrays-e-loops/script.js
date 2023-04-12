// * Array[].

let videoGames = ["Switch", "PS4", "Xbox One S", "3DS"]; // Criado uma array("[]"), chamada videoGames que contém 3 propriedades. A contagem em array começa do número 0 e não do 1.

console.log(videoGames); // Retorna ["Switch", "PS4", "Xbox One S", "3DS"] no console.

console.log(videoGames[1]); // Retorna PS4 no console. Para acessar uma propriedade em especifico usamos os ("[]") e a posição da propriedade desejada.

// * Método pop().

let arrayPop = videoGames.pop(); // O pop é um método/função que tira a ultima propriedade da array e retorna ela.

console.log(arrayPop); // Retorna 3DS no console.

console.log(videoGames); // Agora a propriedade removida não está mais na array.

// * Método push().

videoGames.push("PS5"); // Temos o push que adiciona uma nova propriedade ao final da array.

console.log(videoGames); // Retorna ["Switch", "PS4", "Xbox One S", "3DS", "PS5"] no console.

// * Propriedade length.

let arrayLength = videoGames.length; // Verifica quantas propriedades tem a array.

console.log(arrayLength); // Retorna 4 no console.

// * For loop.

// Dentro do for vai 3 parâmetros, o primeiro é o inicializador que é o número inicial que vai começar, o segundo é a condição para que o loop continue acontecendo e o terceiro e o quanto vai ser incrementado no inicializador a cada loop.
for (let i = 0; i < 10; i++) {
  // O loop só vai parar quando o inicializador(i) chegar a 10, sendo assim o loop vai terminar sempre a 1 número a menos do que foi definido na condição.
  console.log(i); // Retorna de 0 a 9 no console.
}

// * While loop.

let i = 0; // Inicializador.
// Enquanto o inicializador(i) for menor que 10 ele irá continuar o loop.
while (i < 15) {
  console.log(i); // Retorna de 0 a 14 no console.
  i = i + 2; // Acrescenta 2 no inicializador a cada loop.
}

// * For loop com array.

// Está criando um loop que interage com uma array.
// O length está pegando a quantidade de propriedades que a array tem.
for (let i = 0; i < videoGames.length; i++) {
  // Irá executar o loop até a quantidade de propriedade da array terminar e mostrar cada propriedade no console.
  console.log(videoGames[i]);
  // Faz uma verificação, se a propriedade na array for igual a PS4 ele irá quebrar o loop.
  if (videoGames[i] === "PS4") {
    // O break é responsável por quebrar o loop.
    break;
  }
}

// * Método forEach().

var fruits = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];
// O forEach é um método responsável por fazer loops em arrays até não restar mais propriedades na array.
// Ele pode receber 3 parâmetros, o primeiro que vai armazenar o nome/valor da propriedade da array, o segundo que é o index que vai armazenar o número/posição da propriedade na array e o terceiro que é a array, que vai retornar no caso a array completa.
fruits.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
