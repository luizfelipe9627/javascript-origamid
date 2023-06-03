// Remova o erro.
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo de qualquer código JS.
const firstName = "Felipe";

(() => {
  const firstName = "Luiz";
  console.log(firstName);
})();

console.log(firstName);

// Como podemos utilizar a função abaixo.
const active = (callback) => callback();

active(() => {
  console.log("Sou um callback!");
});
