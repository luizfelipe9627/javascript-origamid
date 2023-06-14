// Função responsável por fazer conteúdo aparecer animado ao rolar o scroll e abrir o site.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']"); // Está pegando no DOM todos os elementos que contenham o dataset anime="scroll".

  // Função responsável por fazer os elementos aparecerem na tela ao scrollar para cima.
  function animationScroll() {
    const windowHalf = window.innerHeight * 0.6; // Está pegando 60% da altura da tela do usuário.

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // o getBoundingClientRect é um método usado para retornar valores em relação ao posicionamento do elemento na tela.

      const isSectionVisible = sectionTop - windowHalf < 0; // Está pegando o valor do topo da tela no momento de scroll e subtraindo por 60% da tela do usuário.

      // Se isSectionVisible for menor que 0 irá executar o escopo do if que é responsável por fazer os elementos aparecerem na tela ao scrollar para cima.
      if (isSectionVisible) {
        section.classList.add("ativo"); // Adiciona a classe ativo a section que tiver sua altura negativada(de cima para baixo).
      }
      // Se não, se a section conter a classe ativo irá executar o escopo do else if que é responsável por fazer os elementos sumirem da tela ao scrollar para cima.
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo"); // Remove a classe ativo a section que tiver sua altura positiva(de baixo para cima).
      }
    });
  }
  
  // Se o sections for true(no caso se não existir vai ser false pois retorna 0), então irá executar o escopo do if.
  if (sections.length) {
    animationScroll(); // Está executando a função para que assim que o site carregue não fique tudo em branco.

    window.addEventListener("scroll", animationScroll);
  }
}
