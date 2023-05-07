// O import é usado para permitir importar para outro arquivo JS.
import initScrollToSection from "./modules/scroll-suave.js";
initScrollToSection(); // Está executando a função.

import initAnimationScroll from "./modules/scroll-animacao.js";
initAnimationScroll(); // Está executando a função.

import initAccordion from "./modules/accordion.js";
initAccordion(); // Está executando a função.

import initTabNav from "./modules/tab-nav.js";
initTabNav(); // Está executando a função.

//* > Named exports.

// Para invocarmos mais de um método por module do mesmo arquivo, utilizamos os "{}" e passamos os nomes atribuídos ao elemento export.
import { teste1, teste2 } from "./modules/teste.js";
teste1();
teste2();

// Podemos renomear o nome original utilizando "as" e em seguida passando o novo nome a ser atribuído.
import { teste3 as testeNovo } from "./modules/teste.js";
testeNovo();

// Existe a possibilidade de importar todos os valores de um arquivo utilizando "*" e depois atribuir um nome a ele.
import * as teste from "./modules/teste.js";
console.log(teste); // Retorna um objeto do tipo module que contém todas as funções presentes no teste.js.
// Sendo assim podemos acessar cada teste.
teste.teste1(); // Executa a função teste1 presente dentro do arquivo teste.js.

//* > Valores do export.