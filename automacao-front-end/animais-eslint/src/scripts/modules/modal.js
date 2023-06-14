// Função responsável por fazer o modal aparecer e sumir da tela.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initModal() {
  // Está puxando do DOM elementos dataset definidos no HTML para serem usamos no JS.
  const botaoAbrir = document.querySelector("[data-modal='open']");
  const botaoFechar = document.querySelector("[data-modal='close']");
  const containerModal = document.querySelector("[data-modal='container']");

  // Criado uma função responsável por abrir o modal e que contém um parâmetro chamado event.
  function toggleModal(event) {
    event.preventDefault(); // Evita que ao clicar ele saia da página.
    containerModal.classList.toggle("ativo"); // Adiciona(se não tiver) a classe chamada ativo e remove(caso já tenha) a classe no elemento containerModal.
  }

  // Criado uma função responsável fechar o modal quando for clicado fora dele, a função contém um parâmetro chamado event.
  function cliqueForaModal(event) {
    // Se o event target(faz uma referência ao objeto/elemento que enviou o evento) da função for igual ao elemento pai(containerModal) irá executar o if.
    if (event.target === this) {
      toggleModal(event); // Executa a função fecharModal.
    }
  }

  // Para evitar dar erro primeiro o if verifica se os elementos existem na página, se existir ele torna as eventos criados existentes.
  if (botaoAbrir && botaoFechar && containerModal) {
    // Criado eventos de clique que ao serem acionadas executam funções.
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
