const tabMenu = document.querySelectorAll(".js-tabmenu li"); // Está puxando todos os elementos LI da classe js-tabmenu.
const tabContent = document.querySelectorAll(".js-tabcontent section"); // Está puxando todos os elementos Section da classe js-tabcontent.

// Se o tabMenu e o tabContent for true(no caso se não existir vai ser false pois retorna 0), então irá executar o escopo do if.
if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo"); // Adiciona a classe ativo ao primeiro elemento do tabContent para quando entrar no site não ficar sem o texto do primeiro item da lista de animais.

  function activeTag(index) {
    // o forEach está passando por cada elemento do tabContent e executando seu escopo.
    tabContent.forEach((section) => {
      section.classList.remove("ativo"); // Remove a classe ativo de cada um dos elementos.
    });

    tabContent[index].classList.add("ativo"); // Adiciona a classe ativo ao número da posição do elemento passado no index.
  }

  // Está fazendo um loop para cada li, tendo dois argumentos, o que passa por cada item e o segundo que armazena o index/posição do elemento.
  tabMenu.forEach((itemMenu, itemIndex) => {
    // Quando houver um click em qualquer item li irá executar a função anônima.
    itemMenu.addEventListener("click", () => {
      activeTag(itemIndex); // Está invocando a função activeTag e atribuindo na função o index da imagem clicada.
    });
  });
}
