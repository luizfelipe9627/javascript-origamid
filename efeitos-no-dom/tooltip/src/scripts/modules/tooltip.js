// Função responsável por fazer o tooltips funcionar, que são textos informativos exibidos em pequenas caixas flutuantes junto aos elementos (inputs, labels, menus, etc.) quando o usuário para o cursor do mouse sobre eles.
// O export é usado para permitir que o código seja usado em outro arquivo JS.
// O default é geralmente usado para quando só tem que exportar um único valor no mesmo arquivo.
export default function initTooltip() {}

// Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
const tooltips = document.querySelectorAll("[data-tooltip]");

// Para evitar dar erro primeiro o if verifica se os elementos são true, se for existem na página, então se existir ele torna as funções e métodos criados existentes.
if (tooltips) {
  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this); // O this faz referencia ao item que está sendo adicionado o evento, no caso o tooltips.
  }

  // O forEach passa por cada elemento tooltips e executa o escopo definido.
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver); // A cada tooltip adiciona um evento de mouse quando for passado o mouse por cima do elemento que executa a função onMouseOver.
  });

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); // Cria um elemento div que é armazena na constante tooltipBox.
    const text = element.getAttribute("aria-label"); // Obtém o texto criado no elemento aria-label no HTML e armazena na constante text.

    tooltipBox.classList.add("tooltip"); // Adiciona a classe tooltip na div criada.
    tooltipBox.innerText = text; // Adiciona a div tooltipBox o texto criado no aria-label no HTML.
    
    document.body.appendChild(tooltipBox); // No final do body adiciona(torna filho) o elemento tooltipBox passado.

    return tooltipBox; // Retorna a constante tooltipBox presente dentro da função onMouseOver.
  }
}
