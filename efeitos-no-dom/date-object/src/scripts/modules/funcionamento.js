// Função responsável por fazer o funcionamento do relógio.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initFuncionamento() {}

//* > Object constructor Date.

const timeNow = new Date(); // Criado um construtor Date que gera dados de horário e data conforme o computador.
console.log(timeNow); // Retorna no console a data baseada no relógio interno do computador.

//* Métodos do Date.

// O método getDate é usado para obter o dia do object Date.
const getDate = timeNow.getDate();
console.log(getDate); // Retorna o dia no console.

// O método getDay é usado para obter o dia da semana.
const getDay = timeNow.getDay();
console.log(getDay); // Retorna no console o número da semana, sendo 0 Domingo até 6 que é Sexta-feira.

// O método getMonth é usado para obter o número do mês.
const getMonth = timeNow.getMonth();
console.log(getMonth); // Retorna no console o número da mês, sendo 0 Janeiro até 11 que é Dezembro.

// O método getFullYear é usado para obter o ano.
const getFullYear = timeNow.getFullYear();
console.log(getFullYear); // Retorna no console o ano.

// O método getHours é usado para obter as horas.
const getHours = timeNow.getHours();
console.log(getHours); // Retorna no console as horas.

// O método getMinutes é usado para obter os minutos.
const getMinutes = timeNow.getMinutes();
console.log(getMinutes); // Retorna no console os minutos.

// O método getTime é usado para obter os ms(milissegundos) desde 1970.
const pastDays = timeNow.getTime() / (24 * 60 * 60 * 1000); // Total de dias desde 1 de janeiro de 1970.
console.log(pastDays); // Retorna no console os milissegundos.

// !O método getUTCHours é usado para obter o número de horas de acordo com o horário universal.
const getUTCHours = timeNow.getUTCHours() - 3;
console.log(getUTCHours); // Retorna no console o fuso horário de Brasília.

//* > Utilizando Date na prática.
