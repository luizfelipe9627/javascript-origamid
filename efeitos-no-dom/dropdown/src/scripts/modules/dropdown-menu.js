// Função responsável por abrir e fechar o dropdown aparecer ao clicar com o mouse no menu.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initDropdownMenu() {
  // Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  // Para evitar dar erro primeiro o if verifica se os elementos existem na página, se existir ele torna as funções e métodos criados existentes.
  if (dropdownMenus) {
    // O forEach passa por cada elemento do dropdownMenus, está recebendo um parâmetro que é cada menu.
    dropdownMenus.forEach((menu) => {
      // Criado uma array que contém dois eventos de escuta, o forEach passa percorre por cada evento(nomeado com userEvent).
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick); // No menu atual do forEach anterior pega o evento disparado e aciona a função handleClick criada.
      });
    });

    // Criado uma função chamada handleClick que tem como intuito abrir e fechar o dropdown ao clique, recebe um parâmetro chamado de event.
    function handleClick(event) {
      event.preventDefault(); // Impede o carregamento da página.
      // O this está referenciando o menu do forEach passado.
      this.classList.toggle("ativo"); // Adiciona uma classe(se já não tiver) e remove a classe(se já tiver) no menu chamado ativo.
    }

    function outsideClick() {
      
    }
  }
}
