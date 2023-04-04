// Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002.
let brazilChampion = [1959, 1962, 1970, 1994, 2002];
console.log(brazilChampion);

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`.
brazilChampion.forEach(function (year) {
  console.log(`O brasil ganhou a copa de ${year}.`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera.
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
for (i = 0; i < frutas.length; i++) {
  if (frutas[i] === "Pera") {
    break;
  } else {
    console.log(frutas[i]);
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var lastFruit = frutas[frutas.length - 1];
console.log(lastFruit); // Melancia
