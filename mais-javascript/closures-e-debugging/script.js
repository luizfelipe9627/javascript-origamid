//* > Escopo e Closures.

// Quando criamos uma função, a mesma possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. A mesma coisa acontece para funções dentro de funções.

const item1 = 1; // Está armazenando um valor do tipo number na constante item1.

function funcao1() {
  const item2 = 2; // Está armazenando um valor do tipo number na constante item2.

  console.log(item1); // Tem acesso ao escopo global.
  console.log(item2); // Tem acesso ao seu próprio escopo.
  // console.log(item3); // Não tem acesso ao escopo de outra função.

  // A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3. O segundo escopo dá acesso ao item2, esse escopo é chamado de Clojure (funcao1) (escopo de função dentro de função). O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.
  function funcao2() {
    const item3 = 3; // Está armazenando um valor do tipo number na constante item3.

    console.log(item1); // Tem acesso ao escopo global.
    console.log(item2); // Tem acesso ao escopo do seu pai.
    console.log(item3); // Tem acesso ao seu próprio escopo.
  }

  funcao2(); // Está executando a função.
}

funcao1(); // Está executando a função.

//* > Debugging.

debugger; // É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code. Se o código possuir qualquer Web API, o processo deve ser feito no Browser. Plugins podem interferir no debug dentro do browser.

const num1 = 1; // Está armazenando um valor do tipo number na constante num1.

function funcaoDebugger1() {
  const num2 = 2; // Está armazenando um valor do tipo number na constante num2.

  console.log(num1); // Tem acesso ao escopo global.
  console.log(num2); // Tem acesso ao seu próprio escopo.
  // console.log(num3); // Não tem acesso ao escopo de outra função.

  function funcaoDebugger2() {
    const num3 = 3; // Está armazenando um valor do tipo number na constante num3.

    console.log(num1); // Tem acesso ao escopo global.
    console.log(num2); // Tem acesso ao escopo do seu pai.
    console.log(num3); // Tem acesso ao seu próprio escopo.
  }

  funcaoDebugger2(); // Está executando a função.
}

funcaoDebugger1(); // Está executando a função.

//* > Caso clássico.

// Um dos casos mais clássicos para a demonstração de closures é através da criação de uma função de incremento. É como se a função incrementar carregasse uma mochila chamada contagem, onde uma referência para as suas variáveis estão contidas na mesma.
function count() {
  let total = 0; // Criado uma variável inicializadora chamada total que começa com o valor 0.

  // Retorna e executa uma função chamada increment.
  return function increment() {
    total++; // Incrementa 1 na variável contadora.
    console.log(total); // Mostra no console o valor armazenado na variável.
  };
}

const activeIncrement = count(); // Criado uma constante chamada activeIncrement que recebe a função count.

activeIncrement(); // Ativa a função, fazendo aparecer o número 1 no console.
activeIncrement(); // Ativa a função, fazendo aparecer o número 2 no console.
activeIncrement(); // Ativa a função, fazendo aparecer o número 3 no console.
