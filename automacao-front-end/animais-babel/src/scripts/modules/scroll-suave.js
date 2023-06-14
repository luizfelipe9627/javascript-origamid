// Função responsável por fazer o scroll suave para as section funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initScrollToSection() {
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
    // const sectionTop = section.offsetTop; // Pega quanto de altura tem do topo da página até o elemento.

    // window.scrollTo({
    //  top: sectionTop, // Leva até a section do item clicado no menu.
    //  behavior: 'smooth', // Anima o scroll.
    // });
  }

  // O forEach percorre por cada link do js-menu.
  internsLinks.forEach((link) => {
    // Ao clicar em qualquer link do internsLinks executa a função scrollToSection.
    link.addEventListener("click", scrollToSection);
  });
}
