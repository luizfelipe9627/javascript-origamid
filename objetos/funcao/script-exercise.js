// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce.
const paragraph = document.querySelectorAll("p");
const paragraphArray = Array.from(paragraph);

const paragraphCaracter = Array.prototype.reduce.call(
  paragraph,
  (acumulador, item) => {
    return (acumulador += item.innerHTML.length);
  },
  0
);
console.log(paragraphCaracter);

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
function retornFunction(tag, classe, conteudo) {
  let newTag = document.createElement(tag);
  classe ? newTag.classList.add(classe) : null;
  classe ? (newTag.innerHTML = conteudo) : null;
  return newTag;
}
console.log(retornFunction("p", "classe", "Texto do Paragrafo"));

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico.
const h1Titulo = retornFunction.bind(null, "h1", "titulo");
console.log(h1Titulo("Texto do H1"));
