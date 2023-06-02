// Função responsável por fazer o countdown funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função ou classe do mesmo arquivo.
export default class Countdown {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(futureDate) {
    this.futureDate = futureDate; // O this está referenciando o parâmetro futureDate criado no constructor.
  }

  // Criado um get que contém um método chamado _futureDate usado para retornar a data futura.
  // O get é usado para obter informações e não pode ser alterado.
  get _futureDate() {
    return new Date(this.futureDate); // Retorna um novo objeto de data contendo como resultado a data definida no futureDate do constructor.
  }

  // Criado um get que contém um método chamado _actualDate usado para retornar a data atual.
  // O get é usado para obter informações e não pode ser alterado.
  get _actualDate() {
    return new Date(); // Retorna um objeto contendo a data atual(conforme a máquina).
  }

  // Criado um get que contém um método chamado _timeStampDiff usado para retornar a diferença das datas em ms.
  // O get é usado para obter informações e não pode ser alterado.
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime(); // Retorna a diferença da data atual até a data futura em milissegundos.
  }

  get days() {
    // Para fazer esse calculo pegamos o total de horas no dia(24h) multiplicado por 60m que resulta em 1 hora e multiplicado por 60s que é 1m e por fim multiplicado por 1000ms que é 1s.
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); // Pega os milissegundos e converte em dias e por fim retorna os números arredondados(para baixo).
  }

  get hours() {
    // Para fazer esse calculo pegamos 60m que resulta em 1 hora e multiplicado por 60s que é 1m e por fim multiplicado por 1000ms que é 1s.
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000)); // Pega os milissegundos e converte em horas e por fim retorna os números arredondados(para baixo).
  }

  get minutes() {
    // Para fazer esse calculo pegamos 60s que é 1m e por fim multiplicado por 1000ms que é 1s.
    return Math.floor(this._timeStampDiff / (60 * 1000)); // Pega os milissegundos e converte em minutos e por fim retorna os números arredondados(para baixo).
  }

  get seconds() {
    // Para fazer esse calculo pegamos 1000ms que é 1s.
    return Math.floor(this._timeStampDiff / 1000); // Pega os milissegundos e converte em segundos e por fim retorna os números arredondados(para baixo).
  }

  get total() {
    // Está acessando os métodos get(pelo this que referencia a class) e armazenando as informações do tempo até o natal convertidas e formatadas(usando o %) nas constantes.
    const days = this.days;
    const hours = this.hours % 24; // Está pegando as horas convertidas e dividindo esse valor por 24 e pegando o valor restante no divisor.
    const minutes = this.minutes % 60; // Está pegando os minutos convertidas e dividindo esse valor por 60 e pegando o valor restante no divisor.
    const seconds = this.seconds % 60; // Está pegando os minutos convertidas e dividindo esse valor por 60 e pegando o valor restante no divisor.

    // Retorna um objeto contendo o nome do método e o valor dele em seguida.
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
