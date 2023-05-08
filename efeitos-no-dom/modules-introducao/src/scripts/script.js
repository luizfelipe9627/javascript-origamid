//* > Modules na prática.

// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import initScrollToSection from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";

// Está executando as funções.
initScrollToSection();
initAnimationScroll();
initAccordion();
initTabNav();

//* > Named exports.

// Para invocarmos mais de um método por module do mesmo arquivo, utilizamos os "{}" e passamos os nomes atribuídos ao elemento export.
import { test1, test2 } from "./modules/teste.js";
test1();
test2();

// Podemos renomear o nome original utilizando "as" e em seguida passando o novo nome a ser atribuído.
import { test3 as newTest } from "./modules/teste.js";
newTest();

// Existe a possibilidade de importar todos os valores de um arquivo utilizando "*" e depois atribuir um nome a ele.
import * as test from "./modules/teste.js";
console.log(test); // Retorna um objeto do tipo module que contém todas as funções presentes no teste.js.
// Sendo assim podemos acessar cada teste.
test.test1(); // Executa a função test1 presente dentro do arquivo teste.js.

//* > Valores do export.

// Podemos exportar objetos, funções, classes, números, strings e mais.

// Retorna no console através do objeto teste(nome dado ao module global) o valor atribuído as propriedades criadas.
console.log(test.year); // Retorna 2000 no console.
console.log(test.obj); // Retorna {name: 'Ford'} no console.
console.log(test.str); // Retorna Frase no console.
console.log(test.Car); // Retorna class Car {} no console.
