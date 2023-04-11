// Adicione a classe ativo a todos os itens do menu.
const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach((index) => {
  index.classList.add("ativo");
});
console.log(menuLinks);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro.
menuLinks.forEach((index) => {
  index.classList.remove("ativo");
});
menuLinks[0].classList.add("ativo");
console.log(menuLinks);

// Verifique se as imagens possuem o atributo alt.
const siteImgs = document.querySelectorAll("img");
siteImgs.forEach((index) => {
  const hasAlt = index.hasAttribute("alt");
  console.log(index, hasAlt);
});

// Modifique o href do link externo no menu.
const linkExtern = document.querySelector("a[href^='https']");
linkExtern.setAttribute("href", "www.teste.com.br");
console.log(linkExtern);
