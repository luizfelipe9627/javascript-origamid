// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import outsideClick from "./outsideclick.js";

// Função responsável por abrir e fechar o menu mobile.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initMenuMobile() {
  // Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  // Para evitar dar erro primeiro o if verifica se os elementos existem na página, se existir ele torna as funções e métodos criados existentes.
  if (menuButton && menuList) {
    function openMenu() {}
  }
}
