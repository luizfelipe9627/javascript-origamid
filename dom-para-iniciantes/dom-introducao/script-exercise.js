// Retorne o url da página atual utilizando o objeto window.
const url = window.location.href;
console.log(url); // Retorna http://127.0.0.1:5500/dom-para-iniciantes/dom-introducao/ no console.

// Seleciona o primeiro elemento da página que possua a classe ativo.
const firstElement = document.querySelector(".active");
console.log(firstElement); // Retorna <h1 class="h1-title active" id="h1-title">This is the title.</h1> no console.

// Retorne a linguagem do navegador.
const languageNavigator = window.navigator.language;
console.log(languageNavigator); // Retorna pt-BR no console.

// Retorne a largura da janela.
const widthWindow = window.innerWidth;
console.log(widthWindow); // Retorna 1086 no console.
