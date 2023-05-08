//* > Introdução ao setTimeout.

// Criado uma função chamada wait, que contém um parâmetro chamado de text.
function wait(text) {
  console.log(text); // Mostra no console o texto definido no parâmetro da função.
}

// O setTimeout é método assíncrono que ativa o callback após um determinado tempo.
setTimeout(wait, 1000, "Depois de 1s"); // Pode receber até três parâmetros, o primeiro a função a ser executada, o segundo o tempo determinado para executar a função e o terceiro o valor do parâmetro da função.

//* > Execução imediata.

// Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento.
setTimeout(() => {
  console.log('Após 0s?'); // Retorna uma string no console.
});

//* > setTimeout na prática.