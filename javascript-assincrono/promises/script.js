//* > Objeto construtor Promise.

// Criado uma promise armazenada na variável constante nomeada como promise1 que recebe uma arrow function contendo 2 parâmetros que podem ser ativados, o primeiro é quando a promessa for resolvida e o segundo é quando a promessa for rejeitada.
const promise1 = new Promise((resolve, reject) => {
  resolve("Resolvido."); // Retorna a promise resolvida em objeto(PromiseResult) e retorna um resultado com o que foi definido dentro.
  // reject(Error("Não resolvido.")); // Retorna a promise rejeitada, sendo assim retorna um erro contendo a mensagem definida.
});

console.log(promise1); // Retorna o resultado da promise no console.

//* Método then do prototype Promise.

// O then é um método que sempre fica monitorando a promise até ela ter sucesso e enviando o resultado para o callback(parâmetro do método) da arrow function. O argumento do callback será o valor passado na função resolve.
promise1.then((argument) => {
  console.log(argument); // Mostra o valor do parâmetro argument(no caso o valor presente dentro do resolve).
});

//* > Promise com Async(Assíncrono).

// Criado uma nova promise chamada promise2 que recebe uma arrow function contendo 2 parâmetros que podem ser ativados, o primeiro é quando a promessa for resolvida e o segundo é quando a promessa for rejeitada.
const promise2 = new Promise((resolve, reject) => {
  // As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.
  setTimeout(() => {
    resolve({ study: true }); // Retorna a promise resolvida em objeto e retorna um resultado com o que foi definido dentro.
  }, 1000); // Executa depois de 1 segundo.
});

//* > then atrás de then.

// O then vai ficar esperando uma resposta da Promise, sendo assim só irá executar quando o setTimeout tiver acabado.
promise2
  .then((argument) => {
    argument.profession = "Programador"; // Está adicionando uma propriedade chamada profession no objeto argument.
    return argument; // Mostra o valor do parâmetro argument(no caso o valor presente dentro do resolve) depois de 1 segundo.
  })
  .then((argument) => {
    console.log(argument); // Retorna no console o argument, que no caso é o resultado do then anterior.
  });

//* Método catch do prototype Promise.

// Criado uma nova promise chamada promise3 que recebe uma arrow function contendo 2 parâmetros que podem ser ativados, o primeiro é quando a promessa for resolvida e o segundo é quando a promessa for rejeitada.
const promise3 = new Promise((resolve, reject) => {
  const condition = false; // Criado uma constante chamada condition que armazena um valor boolean.

  // Se condition for verdadeira vai executar o if.
  if (condition) {
    resolve({ name: "Luiz", age: 19 }); // Retorna a promise resolvida em objeto(PromiseResult) e retorna um resultado com o que foi definido dentro.
  } // Se for false executa o else.
  else {
    reject(Error("Um erro ocorreu.")); // Retorna a promise rejeita em um objeto(PromiseResult) e retorna um erro contendo uma mensagem.
  }
});

// O then é um método que sempre fica monitorando a promise até ela ter sucesso e enviando o resultado para o callback(parâmetro do método) da arrow function. O argumento do callback será o valor passado na função resolve do promise3.
promise3
  .then((resolve) => {
    console.log(resolve);
  })
  // O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada. O argumento do callback será o valor passado na função reject do promise3.
  .catch((reject) => {
    console.log(reject);
  })

  //* Método finally.

  // O método finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada. Nesse caso não importa o resultado(then ou catch) do promises3 ele irá executar mesmo assim.
  .finally(() => {
    console.log("Finalizado"); // Mostra uma string no console.
  });

//* Método all.

// Criado uma nova promise chamada login que recebe uma arrow function contendo apenas 1 parâmetro de resolve.
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login efetuado."); // Retorna a promise resolvida em um objeto(PromiseResult) e retorna um resultado com o que foi definido dentro.
  }, 1000); // Resolve depois de 1 segundo.
});

// Criado uma nova promise chamada data que recebe uma arrow function contendo apenas 1 parâmetro de resolve.
const data = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados."); // Retorna a promise resolvida em um objeto(PromiseResult) e retorna um resultado com o que foi definido dentro.
  }, 1500); // Resolve depois de 1.5 segundos.
});

// O método all retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.
const allLoaded = Promise.all([login, data]); // Criado um novo object Promise que recebe o método all que espera dentro de uma array todas as promessas serem resolvidas e após isso resolve a Promise.all.

// O then é um método que sempre fica monitorando a promise até ela ter sucesso e enviando o resultado para o callback(parâmetro do método) da arrow function. O argumento do callback será o valor passado na função resolve do allLoaded após ter o método all resolvido.
allLoaded.then((result) => {
  console.log(result); // Mostra no console uma array com as duas respostas.
});

//* Método race.

// O método race retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.
const loadedFirst = Promise.race([login, data]); // Criado um novo object Promise que recebe o método race que espera dentro de uma array a primeira promessa resolvida e retorna ela.

// O then é um método que sempre fica monitorando a promise até ela ter sucesso e enviando o resultado para o callback(parâmetro do método) da arrow function. O argumento do callback será o valor passado na função resolve do loadedFirst após ter o método all resolvido.
loadedFirst.then((result) => {
  console.log(result); // Mostra no console uma array com as duas respostas.
});
