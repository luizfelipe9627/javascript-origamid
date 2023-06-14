// Função responsável por abrir contar e animar os números.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initAnimaNumeros() {
  // Função animaNumeros responsável por animar e contar os números.
  function animaNumeros() {
    // Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
    const numbers = document.querySelectorAll("[data-numero]");

    // O forEach passa por cada elemento da nodeList nomeada como numbers.
    numbers.forEach((number) => {
      const numberIndex = number; // Armazena na constante numberIndex o número presente no texto HTML.

      const total = +numberIndex.innerText; // Armazena na constante total o valor number presente no texto HTML.
      const increment = Math.floor(total / 100); // Armazena na constante increment o resultado arredondado do total dividido por 100.

      let i = 0; // Criado uma variável contadora para o setInterval.

      // Criado um setInterval que executa a cada 25 milissegundos multiplicado por um número aleatório.
      const timer = setInterval(() => {
        i += increment; // A cada loop acrescenta 1 número a mais no inicializador.
        numberIndex.innerText = i; // A cada loop vai alterando o número do texto.

        // Se o inicializador for maior que o número presente no total irá executar o if.
        if (i > total) {
          numberIndex.innerText = total; // Altera para o valor original do total ao fim da contagem.
          clearInterval(timer); // Para o setInterval.
        }
      }, 25 * Math.random());
    });
  }

  let observer; // Criado uma variável para armazenar a mutação de observação.

  // Criado uma função chamada handleMutation que tem como parâmetro a mutação(MutationRecord).
  function handleMutation(mutation) {
    // Como o MutationRecord é uma Array-like podemos filtrar e pegar a propriedade que queremos, no caso a mutação. Em seguida pegar o target(o elemento HTML) e verificar se ele possui uma classe chamada ativo.
    // Se retornar true executa o if.
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect(); // Usado para fazer o observer parar de ficar observando.
      animaNumeros(); // Executa a função.
    }
  }

  observer = new MutationObserver(handleMutation); // Criado uma nova mutação de observação que executa o callback(a função passada) toda vez que houver uma mudança.

  const observerTarget = document.querySelector(".numeros"); // Está puxando do DOM o elemento que contém a classe numeros.

  observer.observe(observerTarget, { attributes: true }); // O observe recebe dois parâmetros, o primeiro o elemento a ser observado e o segundo o que deve ser observado desse elemento, nesse caso atributos.
}
