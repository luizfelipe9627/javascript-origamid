// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import outsideClick from "./outsideclick.js";

// Função responsável por abrir e fechar o menu mobile.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initMenuMobile() {
  // Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  const events = ["click", "touchstart"]; // Criado uma constante que contém uma array que armazena os eventos que vão ser utilizados no menu.

  // Função openMenu responsável por abrir e fechar o menu mobile.
  function openMenu() {
    menuList.classList.add("ativo"); // Está adicionando uma classe chamada ativo no menuList.
    menuButton.classList.add("ativo"); // Está adicionando uma classe chamada ativo no menuButton.

    // Função chamada outsideClick responsável por fazer o menu mobile sumir ao clicar fora dele, recebe três parâmetros, um sendo o element(menuList), o outro sendo os eventos de escuta e o outro o callback(transformada em uma função) que vai ser executada após o evento ser disparado.
    outsideClick(menuList, events, () => {
      menuList.classList.remove("ativo"); // Está removendo a classe chamada ativo no menuList.
      menuButton.classList.remove("ativo"); // Está removendo a classe chamada ativo no menuButton.
    });
  }

  // Para evitar dar erro primeiro o if verifica se os elementos existem na página, se existir ele torna as funções e métodos criados existentes.
  if (menuButton) {
    // O forEach passa por cada evento(nomeado como userEvent) e executa o escopo caso algum dos eventos definidos sejam disparados.
    events.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu); // Está adicionando um evento de click e de touch no menuButton, que ao ser acionado executa a função openMenu.
    });
  }
}
