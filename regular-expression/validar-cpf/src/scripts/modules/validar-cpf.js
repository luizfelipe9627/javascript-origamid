// Função responsável por fazer a validação do CPF.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default class validateCPF {
  // O constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(element) {
    this.element = element; // O this é usado para referenciar o elemento.
  }

  // Cria uma function express responsável por limpar o CPF e que recebe um CPF como argumento.
  clean(CPF) {
    return CPF.replace(/\D/g, ""); // O replace substitui todos os caracteres não numéricos por uma string vazia e retorna o resultado.
  }

  // Cria uma function express responsável por formatar o CPF e que recebe um CPF como argumento.
  format(CPF) {
    return CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4"); // O replace seleciona todos os grupos de 3 dígitos e 2 dígitos e substitui os grupos de 3 por "." e o grupo de 2 por "-" e retorna o resultado.
  }

  // Cria uma function express responsável por formatar e limpar o CPF e que recebe um CPF como argumento.
  result(CPF) {
    const resultCPF = this.clean(CPF); // Cria uma constante cpf que recebe o retorno da function clean que recebe como argumento o CPF.
    return this.format(resultCPF); // Retorna o resultCPF formatado.
  }

  // Cria uma function express responsável por validar o CPF e que recebe um CPF como argumento.
  validate(CPF) {
    const matchCPF = CPF.match(/(?:\d{3}[-.\s]?){3}\d{2}/g); // Cria uma constante matchCPF que recebe o retorno da função match que recebe como argumento uma expressão regular que valida o CPF. O match retorna uma array com o resultado da validação.
    return matchCPF && matchCPF[0] === CPF; // Retorna um valor boolean com base na verificação do matchCPF ser verdadeiro e se o primeiro item da array é igual ao CPF.
  }

  // Cria uma function express responsável por fazer a validação do CPF e que recebe um CPF como argumento.
  handleChange(CPFElement) {
    // Se o valor do input do CPF chamado de CPFElement for válido executa o bloco de código, se não executa o else.
    if (this.validate(CPFElement.value)) {
      CPFElement.value = this.result(CPFElement.value); // O value do CPFElement(input CPF) recebe o retorno da function result que formata o CPF e que recebe como argumento o valor do CPFElement.

      CPFElement.classList.add("valid"); // Adiciona uma classe ao CPFElement(o input CPF).
      CPFElement.classList.remove("erro"); // Remove a classe do CPFElement(o input CPF).
      CPFElement.nextElementSibling.classList.remove("active"); // Remove a classe do irmão do CPFElement(o input CPF) no caso o Span.
    } else {
      CPFElement.classList.add("erro"); // Adiciona uma classe ao CPFElement(o input CPF).
      CPFElement.classList.remove("valid"); // Remove a classe do CPFElement(o input CPF).
      CPFElement.nextElementSibling.classList.add("active"); // Adiciona uma classe ao irmão do CPFElement(o input CPF) no caso o Span
    }

    return this.validate(CPFElement.value); // Retorna o resultado da function validate que recebe como argumento o valor do CPFElement.
  }

  // Cria uma function express responsável por adicionar um evento e que recebe um evento como argumento.
  addEvent() {
    // Está adicionando um evento de mudança no elemento(parâmetro) da class que ao ser ativado executa a função.
    this.element.addEventListener("change", () => {
      this.handleChange(this.element); // Executa a função handleChange que recebe como argumento o elemento da class.
    });
  }

  // Cria uma function express responsável por adicionar uma mensagem de erro no input e que recebe um elemento como argumento.
  addErrorSpan() {
    const errorSpan = document.createElement("span"); // Cria uma constante errorSpan que armazena a criação de um elemento HTML.
    errorSpan.classList.add("error-text"); // Adiciona uma classe ao elemento HTML.
    errorSpan.innerText = "CPF inválido"; // Adiciona um texto ao elemento HTML.

    this.element.parentElement.insertBefore(
      errorSpan,
      this.element.nextSibling
    ); // O parentElement é o elemento pai do elemento da class e o insertBefore insere o elemento HTML antes do elemento da class.
  }

  init() {
    this.addEvent(); // Chama a function addEvent.
    this.addErrorSpan(); // Chama a function addErrorSpan.
    return this; // Retorna a própria classe, sem o return irá retornar undefined.
  }
}
