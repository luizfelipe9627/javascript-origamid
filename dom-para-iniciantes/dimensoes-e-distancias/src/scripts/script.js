// * Altura e largura de elementos.

const listAnimals = document.querySelector(".animais-lista");
console.log(listAnimals);

const heightScroll = listAnimals.scrollHeight; // O scrollHeight é usado para retornar a altura do scroll.
console.log(heightScroll);

const widthScroll = listAnimals.scrollWidth;
console.log(widthScroll); // O scrollHeight é usado para retornar a largura do scroll.

const heightClient = listAnimals.clientHeight; // O clientHeight é usado para retornar a altura do elemento.
console.log(heightClient);

const widthClient = listAnimals.clientWidth; // O clientWidth é usado para retornar a largura do elemento.
console.log(widthClient);

const offSetTop = listAnimals.offsetTop; // O offsetTop é responsável por dizer a distancia do topo até o elemento.
console.log(offSetTop);

const firstH2 = document.querySelector("h2");

const offSetLeft = firstH2.offsetLeft; // O offsetTop é responsável por dizer a distancia da direita até a esquerda no elemento.
console.log(offSetLeft);

const rectH2 = firstH2.getBoundingClientRect(); // O getBoundingClientRect é um método usado para mostrar por objeto a posição exata do elemento.
console.log(rectH2);

if (rectH2.top < 0) {
  console.log("Passei do elemento.");
}

// * Altura e largura da janela do navegador.

console.log(
  window.innerWidth, // Mostra a largura da página.
  window.innerHeight, // Mostra a altura da página.
  window.outerWidth, // Mostra a largura da janela do navegador contando com o dev tools(se estiver aberto).
  window.outerHeight, // Mostra a altura da janela do navegador contando com a barra de endereço(se estiver mostrando).
  window.pageYOffset, // Mostra a distância total do scroll vertical.
  window.pageXOffset // Mostra a distância total do scroll horizontal.
);

// * matchMedia() para saber largura do browser.

const windowSmall = window.matchMedia("(max-width: 600px").matches; // o matchMedia é usado para verificar a condição de tela aplicada. O matches é uma propriedade do matchMedia, que é responsável por dizer se a condição é false ou true.

if (windowSmall) {
  console.log("Usuário mobile.");
} else {
  console.log('Usuário desktop.')
}

console.log(windowSmall);
