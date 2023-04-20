// Crie uma função construtora de Pessoas, deve conter nome, sobrenome e idade depois crie um método no protótipo que retorne o nome completo da pessoa.
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return console.log(`${this.nome} ${this.sobrenome}`);
};

const infosPessoa = new Pessoa("Luiz Felipe", "Silva", 19);

infosPessoa.nomeCompleto();

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection e Document.
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

console.log(li); // HTMLLIElement
console.log(li.click); // Function
console.log(li.innerText); // String
console.log(li.value); // Number
console.log(li.hidden); // Boolean
console.log(li.offsetLeft); // Number
console.log(li.click()); // Undefined

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name); // String
