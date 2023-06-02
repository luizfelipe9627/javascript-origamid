// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import Countdown from "./modules/countdown.js";

const timeToChristmas = new Countdown('24 December 2023 23:59:59 GMT-0300'); // Está preenchendo o parâmetro da class Countdown com uma string seguindo o formato de data do JS e armazenando como objeto na constante timeToChristmas.
console.log(timeToChristmas.total) // Mostra o resultado do método get total no console.

