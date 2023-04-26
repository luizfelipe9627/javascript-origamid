// Retorne um número aleatório entre 1050 e 2000.
const min = 1050,
  max = 2000;
const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const numerosArray = numeros.split(", ");
const numeroMaximo = Math.max(...numerosArray); // Os "..." passa por cada index da array como argumento.
console.log(numeroMaximo);

// Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total.
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limpaPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let somaTotal = 0;
listaPrecos.forEach((preco) => {
  somaTotal += limpaPreco(preco);
});

console.log(
  somaTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
