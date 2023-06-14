// Função responsável por fazer o tooltips funcionar, que são textos informativos exibidos em pequenas caixas flutuantes junto aos elementos (inputs, labels, menus, etc.) quando o usuário para o cursor do mouse sobre eles.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initTooltip() {
  // Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
  const tooltips = document.querySelectorAll("[data-tooltip]");

  // Criado um objeto que é chamado quando o evento de mousemove é acionado.
  const onMouseMove = {
    handleEvent(event) {
      // O this referencia a função pai(onMouseOver) e pega o elemento tooltipBox é adiciona 20px ao left(absoluto) e adiciona 20px ao top(absoluto) conforme a posição do mouse no elemento.
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  // Criado um objeto que é chamado quando o evento de mouseleave é acionado.
  const onMouseLeave = {
    // Criado um método chamado handleEvent(só pode ser esse nome) que é responsável por remover o tooltipBox da tela.
    handleEvent() {
      // O this está referenciando a função onMouseOver.
      this.tooltipBox.remove(); // Está removendo o tooltipBox da tela.

      // O this e o element está referenciando a função onMouseOver e está removendo o evento quando ele já tiver sido executado.
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  // Função criarTooltipBox responsável pela criação do tooltipBox, que recebe como seu parâmetro uma propriedade chamada element.
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); // Cria um elemento div que é armazena na constante tooltipBox.
    const text = element.getAttribute("aria-label"); // Obtém o texto criado no elemento aria-label no HTML e armazena na constante text.

    tooltipBox.classList.add("tooltip"); // Adiciona a classe tooltip na div criada.
    tooltipBox.innerText = text; // Adiciona a div tooltipBox o texto criado no aria-label no HTML.

    document.body.appendChild(tooltipBox); // No final do body adiciona(torna filho) o elemento tooltipBox passado.

    return tooltipBox; // Retorna a constante tooltipBox presente dentro da função onMouseOver.
  }

  // Função onMouseOver responsável pelo o que ocorre quando o mouse for passado por cima do elemento tooltipBox.
  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this); // O this faz referencia ao item que está sendo adicionado o evento, no caso o tooltips.

    onMouseLeave.tooltipBox = tooltipBox; // No objeto onMouseLeave está criando uma propriedade chamada tooltipBox que recebe o criarTooltipBox.
    onMouseLeave.element = this; // No objeto onMouseLeave está criando uma propriedade chamada element que recebe a função onMouseOver.
    // Está criando um evento de escuta na função(this referencia a função onMouseOver) e chamando o objeto onMouseLeave.
    this.addEventListener("mouseleave", onMouseLeave); // Criado um evento que ocorre quando o mouse sai do elemento pai(no caso a função onMouseOver) e executa o objeto onMouseLeave criado.

    onMouseMove.tooltipBox = tooltipBox; // No objeto onMouseMove está criando uma propriedade chamada tooltipBox que recebe o criarTooltipBox.
    this.addEventListener("mousemove", onMouseMove); // Criado um evento que ocorre a movimentação do o mouse no elemento pai(no caso a função onMouseOver) ele executa o objeto onMouseMove.
  }

  // Para evitar dar erro primeiro o if verifica se os elementos são true, se for existem na página, então se existir ele torna as funções e métodos criados existentes.
  if (tooltips) {
    // O forEach passa por cada elemento tooltips e executa o escopo definido.
    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver); // A cada tooltip adiciona um evento de mouse quando for passado o mouse por cima do elemento que executa a função onMouseOver.
    });
  }
}
