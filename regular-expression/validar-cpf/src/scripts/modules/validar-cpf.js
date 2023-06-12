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

  validate(CPF) {
    const matchCPF = CPF.match(/(?:\d{3}[-.\s]?){3}\d{2}/g); // Cria uma constante matchCPF que recebe o retorno da função match que recebe como argumento uma expressão regular que valida o CPF. O match retorna uma array com o resultado da validação.
    console.log(matchCPF)
    return (matchCPF[0] === CPF); // Retorna o resultado da comparação entre o primeiro elemento do array matchCPF e o CPF.
  }

  // Cria uma function express responsável por fazer a validação do CPF e que recebe um CPF como argumento.
  handleChange(CPFElement) {
    return this.validate(CPFElement.value); // Retorna o resultado da function validate que recebe como argumento o valor do CPFElement.
  }

  // Cria uma function express responsável por adicionar um evento e que recebe um evento como argumento.
  addEvent() {
    // Está adicionando um evento de mudança no elemento(parâmetro) da class que ao ser ativado executa a função.
    this.element.addEventListener("change", () => {
      this.handleChange(this.element); // Executa a função handleChange que recebe como argumento o elemento da class.
    });
  }

  init() {
    this.addEvent(); // Chama a function addEvent.
    return this; // Retorna a própria classe, sem o return irá retornar undefined.
  }
}
