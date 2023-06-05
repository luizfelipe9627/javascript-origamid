// Extraia o backgroundColor, color e margin do btn.
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn); // O método getComputedStyle retorna um objeto com todos os estilos e seus valores do elemento passado no seu parâmetro.

const { backgroundColor, color, margin } = btnStyles;
console.log(backgroundColor);
console.log(color);
console.log(margin);

// Troque os valores das variáveis abaixo.
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo);
console.log(cursoInativo);

// Corrija o erro abaixo.
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

const { cor: bobCor } = cachorro;
console.log(bobCor);
