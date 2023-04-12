// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links.
const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();

  links.forEach((link) => {
    link.classList.remove("ativo");
  });

  event.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.
const allElements = document.querySelectorAll("body *");

function handleTarget(event) {
  // console.log(event.currentTarget);
  // Agora ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento.
  event.currentTarget.remove();
}

allElements.forEach((element) => {
  element.addEventListener("click", handleTarget);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function hundleKeyT(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("texto-maior");
  }
}

window.addEventListener("keydown", hundleKeyT);
