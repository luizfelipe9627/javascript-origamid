//* > Método setTimeout.

// Criado uma função chamada wait, que contém um parâmetro chamado de text.
function wait(text) {
  console.log(text); // Mostra no console o texto definido no parâmetro da função.
}

// O setTimeout é método assíncrono que ativa o callback após um determinado tempo.
setTimeout(wait, 1000, "Depois de 1s"); // Pode receber até três parâmetros, o primeiro a função a ser executada, o segundo o tempo determinado para executar a função e o terceiro o valor do parâmetro da função.

// Podemos também definir uma função anonima ao método setTimeout ao invés de separado, e antes de fechar a sintaxe colocar o tempo para ser executado.
setTimeout(() => {
  console.log("Depois de 2s");
}, 2000);

//* > Execução imediata.

// Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento.
setTimeout(() => {
  console.log("Depois de 0s"); // Retorna uma string no console.
});

//* > Loops e setTimeout.

// Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.
for (let i = 0; i < 5; i++) {
  // O setTimeout executa seu escopo após 3 milissegundos.
  setTimeout(() => {
    console.log(i); // Mostra no console o número atual do inicializador.
  }, 300);
}

//* > Corrigindo o Loop.

// Agora ele está multiplicando o tempo por i. Assim o primeiro aparecerá em 0ms, o segundo em 300ms, o terceiro em 600ms e assim em diante.
for (let i = 0; i < 5; i++) {
  // O setTimeout executa seu escopo a cada 3 milissegundos multiplicado pelo inicializador.
  setTimeout(() => {
    console.log(i); // Mostra no console o número atual do inicializador.
  }, 300 * i);
}

// * > This e Window.

// O setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.
const btn1 = document.querySelector(".button1"); // Puxa do DOM o primeiro elemento button com a classe button1 que encontrar.
btn1.addEventListener("click", handleClick1); // Adiciona um evento de clique no btn1 que ao ser disparada executa a função handleClick.

function handleClick1() {
  // O setTimeout executa seu escopo após 1 segundo.
  setTimeout(function () {
    // Quando usado uma função vazia o this referencia o pai do setTimeout, sendo assim o window.
    this.classList.add("ativo"); // Retorna um erro pois window.classList não existe.
  }, 1000);
}

//* > Arrow function.

// Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.
const btn2 = document.querySelector(".button2"); // Puxa do DOM o primeiro elemento button com a classe button2 que encontrar.
btn2.addEventListener("click", handleClick2); // Adiciona um evento de clique no btn2 que ao ser disparada executa a função handleClick.

function handleClick2() {
  // O setTimeout executa seu escopo após 1 segundo.
  setTimeout(() => {
    // This agora é btn.
    this.classList.add("ativo"); // Adiciona no botão a classe ativo.
  }, 1000);
}

//* > Método setInterval.

// Criado uma função chamada loop, que contém um parâmetro chamado de text.
function loop(text) {
  console.log(text); // Mostra no console a string atribuída ao parâmetro text.
}

// O método setInterval irá ativar o callback toda vez que a quantidade de tempo passar.
setInterval(loop, 1000, "Passou 1s"); // Pode receber até três parâmetros, o primeiro a função a ser executada, o segundo o tempo determinado para executar a função e o terceiro o valor do parâmetro da função.

let i = 0; // Contador que irá aumentar de valor a cada loop do setInterval.

// Podemos também definir uma função anonima ao método setTimeout ao invés de separado, e antes de fechar a sintaxe colocar o tempo para ser executado, nesse caso executa o loop a cada 1 segundo.
setInterval(() => {
  console.log(i++); // Atribui 1 numero a mais no contador.
}, 1000);

//* > Método clearInterval.

// O método clearInterval é usado para parar um intervalo. Para isso precisamos atribuir o setInterval a uma variável.
const countTo10 = setInterval(callback, 1000); // Criado uma constante chamada countTo10 que armazena um setInterval que executa uma função chamada callback a cada 1 segundo.

let cont = 0; // Contador que irá aumentar de valor a cada loop do setInterval.

// Criado uma função chamada callback.
function callback() {
  console.log(i++); // Atribui 1 numero a mais no contador a cada loop.
  // Se o contador for maior que 10 ele executa o bloco de comando do if.
  if (i > 10) {
    clearInterval(countTo10); // O clearInterval está parando o loop do setInterval definido no countTo10.
  }
}
