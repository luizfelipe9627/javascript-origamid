//* Prototype.

function Person(name,age) {
  // O this referencia a própria função e cria o elemento dentro dela.
  this.name = name;
  this.age = age;
}
console.log(Person.prototype); // Mostra no console o objeto adicionado quando a função foi criada, o prototype é um objeto que funciona apenas em funções/métodos.

const newPerson = new Person('André', 28); // Criado um novo objeto chamado newPerson, que está preenchendo dois parâmetros da função Person.
console.log(newPerson.prototype); // Mostra undefined no console pois newPerson é um objeto e não uma propriedade.

//* Adicionando novas propriedades usando o prototype.

// Adiciona um novo método chamado toWalk na função Person.
Person.prototype.toWalk = function() {
  // Está acessando direto da função Person.
  return `${this.name} andou 10km.`;
};
console.log(Person.prototype); // Mostra no console o método criado e o constructor já adicionado por padrão.
console.log(newPerson);
console.log(newPerson.toWalk()); // O prototype permite executar o método criado, mesmo não estando dentro do newPerson e sim do __proto__.
