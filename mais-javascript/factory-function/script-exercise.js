// Criado uma função com o nome $$ baseada no jQuery contendo um parâmetro.
function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements); // Armazena na constante elements todos os elementos puxados conforme o que estiver no parâmetro da função.

  // Criado uma função chamada hideElements responsável por esconder os elementos.
  function hideElements() {
    // O forEach percorre cada elemento e armazena o elemento atual no parâmetro definido.
    elements.forEach((element) => {
      element.style.display = "none"; // Coloca como display none o elemento fazendo assim ele sumir da tela.
    });

    return this; // Retorna a função pai(this), esse retorno pode ser usado para continuar tendo acesso ao escopo da função $$ quando o hideElements for executado, caso contrário ele retorna undefined.
  }

  // Criado uma função chamada hideElements responsável por mostrar os elementos.
  function showElements() {
    // O forEach percorre cada elemento e armazena o elemento atual no parâmetro definido.
    elements.forEach((element) => {
      element.style.display = "initial"; // Coloca como display do elemento o valor inicial dele, fazendo aparecer na tela novamente.
    });

    return this; // Retorna a função pai(this), esse retorno pode ser usado para continuar tendo acesso ao escopo da função $$ quando o showElements for executado, caso contrário ele retorna undefined.
  }

  // Criado uma função chamada onEvent responsável atribuir eventos de escuta nos elementos, recebe dois parâmetros, o tipo do evento e o que ocorre quando executado(callback).
  function onEvent(event, callback) {
    // O forEach percorre cada elemento e armazena o elemento atual no parâmetro definido.
    elements.forEach((element) => {
      element.addEventListener(event, callback); // Adiciona um evento de escuta no elemento atual, que é definido pelo parâmetro da função onEvent.
    });

    return this; // Retorna a função pai(this), esse retorno pode ser usado para continuar tendo acesso ao escopo da função $$ quando o onEvent for executado, caso contrário ele retorna undefined.
  }

  // Criado uma função chamada addClass responsável por adicionar classes no elemento, como parâmetro recebe a classe que deseja adicionar.
  function addClass(className) {
    // O forEach percorre cada elemento e armazena o elemento atual no parâmetro definido.
    elements.forEach((element) => {
      element.classList.add(className); // Adiciona como class do elemento o valor armazenado no parâmetro da função addClass.
    });

    return this; // Retorna a função pai(this), esse retorno pode ser usado para continuar tendo acesso ao escopo da função $$ quando o addClass for executado, caso contrário ele retorna undefined.
  }

  // Criado uma função chamada removeClass responsável por remover classes no elemento, como parâmetro recebe a classe que deseja remover.
  function removeClass(className) {
    // O forEach percorre cada elemento e armazena o elemento atual no parâmetro definido.
    elements.forEach((element) => {
      element.classList.remove(className); // Remove como class do elemento o valor armazenado no parâmetro da função removeClass.
    });

    return this; // Retorna a função pai(this), esse retorno pode ser usado para continuar tendo acesso ao escopo da função $$ quando o removeClass for executado, caso contrário ele retorna undefined.
  }

  // Retorna um objeto final contendo o nome do método e o valor dele em seguida.
  return {
    elements, // Elementos tendo seu tipo definido pelo parâmetro da função.
    // Mostra as funções criadas.
    hideElements,
    showElements,
    onEvent,
    addClass,
    removeClass,
  };
}

const buttons = $$("button"); // Está armazenando na constante buttons a execução da função $$ passando como parâmetro um elemento desejado.

buttons.hideElements(); // Ativa o método hideElements presente dentro da função $$ que faz os botões sumirem.
buttons.showElements(); // Ativa o método showElements presente dentro da função $$ que faz os botões aparecerem.

// Acessa a função $$ pela constante buttons e executa o método onEvent, passando como parâmetro uma string(tipo do evento), e um callback(que vai definir o que acontece quando o evento for acionado).
buttons.onEvent("click", (event) => {
  console.log(event.target); // Pega o elemento que disparou o evento e mostra no console o target(referencia do elemento).
});

// Ativa o método addClass presente dentro da função $$ que adiciona classe nos elementos e passa como parâmetro uma string(no caso a classe que vai ser adicionada).
buttons.addClass("blue");
buttons.addClass("red");

// Ativa o método removeClass presente dentro da função $$ que remove a classe desejada dos elementos e passa como parâmetro uma string(no caso a classe que vai ser removida).
buttons.removeClass("blue");
