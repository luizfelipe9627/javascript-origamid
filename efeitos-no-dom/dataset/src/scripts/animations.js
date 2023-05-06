// Função responsável por fazer o menu  de animais em conjunto com a descrição funcionar.
function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li"); // Está puxando todos os elementos LI do dataset tab="menu".
  const tabContent = document.querySelectorAll("[data-tab='content'] section"); // Está puxando todos os elementos section do dataset tab="content".

  // Se o tabMenu e o tabContent for true(no caso se não existir vai ser false pois retorna 0), então irá executar o escopo do if.
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo"); // Adiciona a classe ativo ao primeiro elemento do tabContent para quando entrar no site não ficar sem o texto do primeiro item da lista de animais.

    function activeTag(index) {
      // o forEach está passando por cada elemento do tabContent e executando seu escopo.
      tabContent.forEach((section) => {
        section.classList.remove("ativo"); // Remove a classe ativo de cada um dos elementos.
      });
      const directionAnime = tabContent[index].dataset.anime; // Criado uma constante responsável por armazenar o valor do dataset data-anime.
      console.log(directionAnime);
      tabContent[index].classList.add("ativo", directionAnime); // Adiciona a classe ativo e o dataset anime ao número da posição do elemento passado no index.
    }

    // Está fazendo um loop para cada li, tendo dois argumentos, o que passa por cada item e o segundo que armazena o index/posição do elemento.
    tabMenu.forEach((itemMenu, itemIndex) => {
      // Quando houver um click em qualquer item li irá executar a função anônima.
      itemMenu.addEventListener("click", () => {
        activeTag(itemIndex); // Está invocando a função activeTag e atribuindo na função o index da imagem clicada.
      });
    });
  }
}
initTabNav(); // Está executando a função.

// Função responsável por fazer o accordion list do faq funcionar.
function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  ); // Está pegando no DOM todos so DT presente dentro do elemento com a classe js-accordion.

  const activeClass = "ativo"; // Criado uma variável que contém a classe ativo, pois repete muito no código.

  // Se o faqList for true(no caso se não existir vai ser false pois retorna 0), então irá executar o escopo do if.
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass); // Por padrão adiciona a classe ativo ao primeiro DT.
    accordionList[0].nextElementSibling.classList.add(activeClass); // Por padrão adiciona a classe ativo ao primeiro DD.

    // Função responsável por adicionar e remover as classes que faz o accordion funcionar quando for disparado o evento de clique.
    function activeAccordion() {
      // O toggle está adicionando a classe ativo caso ela não exista no elemento, e removendo a classe quando já existir.
      // O this faz sempre referência ao elemento principal, nesse caso o accordionList.
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass); // O nextElementSibling está pegando o elemento abaixo do item(dt).
    }

    // Percorre por cada item (DT e DD) da lista faq.
    accordionList.forEach((item) => {
      // Ao clicar em qualquer elemento do accordionList executa a função activeAccordion.
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion(); // Está executando a função.

// Função responsável por fazer o scroll suave para as section funcionar.
function initScrollToSection() {
  const internsLinks = document.querySelectorAll(
    "[data-menu='smooth'] a[href^='#']"
  ); // Está pegando no DOM todos os links que começam com hash(#) e contenham o dataset menu="smooth"

  function scrollToSection(e) {
    e.preventDefault(); // Usado para impedir que ao clicar no menu seja levado até a sessão correspondente.

    const href = e.currentTarget.getAttribute("href"); // Está pegando o atributo(valor) presente dentro do href clicado.
    const section = document.querySelector(href); // Está associando o HREF extraindo com a section que possui o mesmo HREF.

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    // * Forma alternativa.
    const sectionTop = section.offsetTop; // Pega quanto de altura tem do topo da página até o elemento.

    //window.scrollTo({
    //  top: sectionTop, // Leva até a section do item clicado no menu.
    //  behavior: 'smooth', // Anima o scroll.
    //});
  }

  // O forEach percorre por cada link do js-menu.
  internsLinks.forEach((link) => {
    // Ao clicar em qualquer link do internsLinks executa a função scrollToSection.
    link.addEventListener("click", scrollToSection);
  });
}
initScrollToSection(); // Está executando a função.

function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']"); // Está pegando no DOM todos os elementos que contenham o dataset anime="scroll".

  // Se o sections for true(no caso se não existir vai ser false pois retorna 0), então irá executar o escopo do if.
  if (sections.length) {
    function animationScroll() {
      const windowHalf = window.innerHeight * 0.6; // Está pegando 60% da altura da tela do usuário.

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; // o getBoundingClientRect é um método usado para retornar valores em relação ao posicionamento do elemento na tela.

        const isSectionVisible = sectionTop - windowHalf < 0; // Está pegando o valor do topo da tela no momento de scroll e subtraindo por 60% da tela do usuário.

        // Se isSectionVisible for menor que 0 irá executar o escopo do if.
        if (isSectionVisible) {
          section.classList.add("ativo"); // Adiciona a classe ativo a section que tiver sua altura negativada.
        }
      });
    }

    animationScroll(); // Está executando a função para que assim que o site carregue não fique tudo em branco.

    window.addEventListener("scroll", animationScroll);
  }
}
initAnimationScroll(); // Está executando a função.
