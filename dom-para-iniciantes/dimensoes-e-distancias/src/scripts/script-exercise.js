// Verifique a distância da primeira imagem em relação ao topo da página.
const img = document.querySelector("img");
const offSetTopImg = img.offsetTop;
console.log(offSetTopImg);

// Retorne a soma da largura de todas as imagens.

function sumImgs() {
  const imgs = document.querySelectorAll("img");

  let sum = 0;
  imgs.forEach((img) => {
    sum += img.offsetWidth;
  });
  console.log(sum);
}

// Executa a função somente depois de ter carregado toda a página.
window.onload = () => {
  sumImgs();
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google).
const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade.");
  } else {
    console.log(link, "Não possui boa acessibilidade.");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu.
const smallBrowser = window.matchMedia("(max-width: 720px)").matches;

if (smallBrowser) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
