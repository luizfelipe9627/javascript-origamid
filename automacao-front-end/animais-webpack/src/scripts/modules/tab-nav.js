// Função responsável por fazer o menu  de animais em conjunto com a descrição funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li"); // Está puxando todos os elementos LI do dataset tab="menu".
  const tabContent = document.querySelectorAll("[data-tab='content'] section"); // Está puxando todos os elementos section do dataset tab="content".

  // Função responsável por adicionar a classe ativo e o dataset data-anime ao elemento.
  function activeTag(index) {
    // o forEach está passando por cada elemento do tabContent e executando seu escopo.
    tabContent.forEach((section) => {
      section.classList.remove("ativo"); // Remove a classe ativo de cada um dos elementos.
    });

    const directionAnime = tabContent[index].dataset.anime; // Criado uma constante responsável por armazenar o valor do dataset data-anime.

    tabContent[index].classList.add("ativo", directionAnime); // Adiciona a classe ativo e o dataset anime ao número da posição do elemento passado no index.
  }

  // Se o tabMenu e o tabContent for true(no caso se não existir vai ser false pois retorna 0), então irá executar o escopo do if.
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo"); // Adiciona a classe ativo ao primeiro elemento do tabContent para quando entrar no site não ficar sem o texto do primeiro item da lista de animais.

    // Está fazendo um loop para cada li, tendo dois argumentos, o que passa por cada item e o segundo que armazena o index/posição do elemento.
    tabMenu.forEach((itemMenu, itemIndex) => {
      // Quando houver um click em qualquer item li irá executar a função anônima.
      itemMenu.addEventListener("click", () => {
        activeTag(itemIndex); // Está invocando a função activeTag e atribuindo na função o index da imagem clicada.
      });
    });
  }
}
