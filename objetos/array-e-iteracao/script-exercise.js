// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso.
const cursos = document.querySelectorAll(".curso");
const cursosArray = Array.from(cursos);

const objetosCursos = cursosArray.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = +curso.querySelector(".aulas").innerText;
  const horas = +curso.querySelector(".horas").innerText;

  return {
    // Quando se tem o mesmo nome, pode ser passado apenas o nome da variável que por padrão ira definir esse nome na propriedade do objeto.
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetosCursos);

// Retorne uma lista com os números maiores que 100.
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((num) => num > 100);
console.log(maioresQue100);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true.
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const possuiBaixo = instrumentos.some((item) => item === "Baixo");
console.log(possuiBaixo);

// Retorne o valor total das compras.
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);

// Mesmo resultado mas com solução diferente:
let precoTotal = 0;

const precoCompras = compras.map((item) => {
  item = +item.preco.replace("R$ ", "").replace(",", ".");
  return (precoTotal += item);
});

console.log(precoTotal);
