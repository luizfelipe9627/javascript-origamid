// Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades, sendo nome e sobrenome.
let personalData = {
  name: "Luiz Felipe",
  lastname: "Silva",
  age: 18,
  country: "Brazil",
  city: "São Paulo",
};
console.log(personalData);

// Crie um método no objeto anterior, que mostre o seu nome completo.
personalData.fullName = function () {
  return `${this.name} ${this.lastname}`;
};
console.log(personalData.fullName());

// Modifique o valor da propriedade preco para 3000.
let carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.
let dog = {
  race: "Labrador",
  color: "Preto",
  age: 10,
  bark(person) {
    if (person === "Man") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
console.log(dog);
console.log(dog.bark('Man'));
