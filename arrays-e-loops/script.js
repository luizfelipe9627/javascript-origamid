// Criado uma array("[]"), chamada videoGames que contém 3 propriedades. A contagem em array começa do número 0 e não do 1.
let videoGames = ["Switch", "PS4", "Xbox One S", "3DS"];
console.log(videoGames);
// Para acessar uma propriedade em especifico usamos os ("[]") e a posição da propriedade desejada.
console.log(videoGames[1]); // PS4

// O pop é um método/função que tira a ultima propriedade da array e retorna ela.
let arrayPop = videoGames.pop();
console.log(arrayPop); // 3DS
// Agora a propriedade removida não está mais na array.
console.log(videoGames);

// Temos o push que adiciona uma nova propriedade ao final da array.
videoGames.push("PS5");
console.log(videoGames);

// Verifica quantas propriedades tem a array.
let arrayLength = videoGames.length;
console.log(arrayLength); // 4

// Dentro do for vai 3 parâmetros, o primeiro é o inicializador que é o número inicial que vai começar, o segundo é a condição para que o loop continue acontecendo e o terceiro e o quanto vai ser incrementado no inicializador a cada loop.
for (let i = 0; i < 10; i++) {
  // O loop só vai parar quando o inicializador(i) chegar a 10, sendo assim o loop vai terminar sempre a 1 número a menos do que foi definido na condição.
  console.log(i); // Retorna de 0 a 9 no console.
}

let i = 0; // Inicializador.
// Enquanto o inicializador(i) for menor que 10 ele irá continuar o loop.
while (i < 15) {
  console.log(i); // Retorna de 0 a 14 no console.
  i = i + 2; // Acrescenta 2 no inicializador a cada loop.
}

// Está criando um loop que interage com uma array.
// O length está pegando a quantidade de propriedades que a array tem.
for (let i = 0; i < videoGames.length; i++) {
  // Irá executar o loop até a quantidade de propriedade da array terminar e mostrar cada propriedade no console.
  console.log(videoGames[i]);
}

