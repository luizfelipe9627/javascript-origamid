//* > Object constructor Date.

const timeNow = new Date(); // Criado um construtor Date que gera dados de horário e data conforme o computador.
console.log(timeNow); // Retorna no console a data baseada no relógio interno do computador.

const timeFuture = new Date("Dec 24 2025 00:00"); // Podemos criar um constructor Date que gera dados futuros.
console.log(timeFuture); // Retorna no console a data definida.

//* Métodos Date.

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

//* Métodos Time.

// O método getTime é usado para obter os ms(milissegundos) desde 1970.
const pastDays = timeNow.getTime() / (24 * 60 * 60 * 1000); // Total de dias desde 1 de janeiro de 1970.
console.log(pastDays); // Retorna no console os milissegundos.

// O método getHours é usado para obter as horas.
const getHours = timeNow.getHours();
console.log(getHours); // Retorna no console as horas.

// O método getMinutes é usado para obter os minutos.
const getMinutes = timeNow.getMinutes();
console.log(getMinutes); // Retorna no console os minutos.

// O método getUTCHours é usado para obter o número de horas de acordo com o horário universal.
const getUTCHours = timeNow.getUTCHours() - 3;
console.log(getUTCHours); // Retorna no console o fuso horário de Brasília.

//* > Utilizando Date na prática.

// Função responsável por transformar os milissegundos em dias.
function transformDays(time) {
  // Para fazer esse calculo pegamos o total de horas no dia(24h) multiplicado por 60m que resulta em 1 hora e multiplicado por 60s que é 1m e por fim multiplicado por 1000milissegundos que é 1s.
  return time / (24 * 60 * 60 * 1000); // Retorna os milissegundos convertidos em dias.
}
console.log(transformDays(timeFuture)); // Retorna 20446 no console, sendo assim falta 20446 dias até a data futura.

const daysNow = transformDays(timeNow.getTime()); // Está transformando a data atual em milissegundos.
const daysFuture = transformDays(timeFuture.getTime()); // Está transformando a data futura em milissegundos.

console.log(daysFuture - daysNow); // Retorna no console quantos dias faltam para chegar na data futura, nesse caso falta 957 dias.