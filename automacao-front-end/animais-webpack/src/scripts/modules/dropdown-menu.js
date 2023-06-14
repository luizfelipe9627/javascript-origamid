// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import outsideClick from "./outsideclick.js";

// Função responsável por abrir e fechar o dropdown aparecer ao clicar com o mouse no menu.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initDropdownMenu() {
  // Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  // Criado uma função chamada handleClick que tem como intuito abrir e fechar o dropdown ao clique, recebe um parâmetro chamado de event.
  function handleClick(event) {
    event.preventDefault(); // Impede o carregamento da página.
    // O this está referenciando o menu do forEach passado.
    this.classList.add("ativo"); // Adiciona uma classe no menu chamado ativo.

    // Executa a função outsideClick que tem o this referenciando o element(data-dropdown) da função, a array referenciando o eve,ts e a função anonima referenciando o callback.
    outsideClick(this, ["click", "touchstart"], () => {
      // Escopo do parâmetro callback criado na função.
      this.classList.remove("ativo"); // Remove do element(data-dropdown) a classe ativo.
    });
  }

  // Para evitar dar erro primeiro o if verifica se os elementos existem na página, se existir ele torna as funções e métodos criados existentes.
  if (dropdownMenus) {
    // O forEach passa por cada elemento do dropdownMenus, está recebendo um parâmetro que é cada menu.
    dropdownMenus.forEach((menu) => {
      // Criado uma array que contém dois eventos de escuta, o forEach passa percorre por cada evento(nomeado com userEvent).
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick); // No menu atual do forEach anterior pega o evento disparado e aciona a função handleClick criada.
      });
    });
  }
}
