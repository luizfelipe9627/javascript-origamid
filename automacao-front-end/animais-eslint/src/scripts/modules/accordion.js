// Função responsável por fazer o accordion list do faq funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  ); // Está pegando no DOM todos so DT presente dentro do elemento com a classe js-accordion.

  const activeClass = "ativo"; // Criado uma variável que contém a classe ativo, pois repete muito no código.

  // Função responsável por adicionar e remover as classes que faz o accordion funcionar quando for disparado o evento de clique.
  function activeAccordion() {
    // O toggle está adicionando a classe ativo caso ela não exista no elemento, e removendo a classe quando já existir.
    // O this faz sempre referência ao elemento principal, nesse caso o accordionList.
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass); // O nextElementSibling está pegando o elemento abaixo do item(dt).
  }

  // Se o faqList for true(no caso se não existir vai ser false pois retorna 0), então irá executar o escopo do if.
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass); // Por padrão adiciona a classe ativo ao primeiro DT.
    accordionList[0].nextElementSibling.classList.add(activeClass); // Por padrão adiciona a classe ativo ao primeiro DD.

    // Percorre por cada item (DT e DD) da lista faq.
    accordionList.forEach((item) => {
      // Ao clicar em qualquer elemento do accordionList executa a função activeAccordion.
      item.addEventListener("click", activeAccordion);
    });
  }
}
