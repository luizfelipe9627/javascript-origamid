// * Objeto{}.

// Criado um objeto("{}") chamado person(pessoa).
let person = {
  // Criou várias propriedades de tipos diferentes no objeto.
  name: "Luiz",
  age: 19,
};

console.log(person.age); // Para pegar uma propriedade de um objeto, chamamos o objeto e em seguida a propriedade.

console.log(person); // Para retornar o objeto inteiro basta chama-lo.

// * Método dentro de um objeto.

// Podemos criar um método ou função dentro de um objeto.
let square = {
  sides: 4,
  // Criado um método/função chamado area, que tem um parâmetro chamado side(lado).
  area(side) {
    return side * side; // Retorna o lado multiplicado pelo lado.
  },
  perimeters(side) {
    // Para acessar a variável sides(lados), temos que primeiro fazer o caminho pelo o objeto, ou utilizar o this, que é o objeto em si também.
    return this.sides * side; // Retorna o método perimeters.side multiplicado pelo lado.
  },
};

// Está acessando o objeto e em seguida o objeto assim atribuindo argumento no parâmetro.
console.log(square.area(5)); // Retorna 25 no console.
console.log(square.perimeters(5)); // Retorna 20 no console.

// * Função dentro de um objeto.

// Criado um objeto, contendo uma função.
let height = 100;
let menu = {
  width: 800,
  height: 50,
  backgroundColor: "#707070",

  halfHeight() {
    return this.height / 2; // O this é o objeto pai, no caso o menu e o que vier a seguir é propriedade do objeto. Sem o this ele vai pegar o height definido fora do objeto e não dentro.
  },
};

menu.backgroundColor = "#404040"; // Podemos alterar o valor de uma propriedade.
menu.color = "blue"; // Também é possível adicionar(set) novas propriedades no objeto menu.
console.log(menu); // Irá mostrar no console que o color virou propriedade do objeto menu.

let backgroundColor = menu.backgroundColor; // Para pegar(get) uma propriedade de um objeto utilizamos o ponto(.) seguido do nome da propriedade.
console.log(backgroundColor);

console.log(menu.halfHeight()); // Executa a função criada dentro do objeto menu.
console.log(menu.hasOwnProperty("color")); // Diz por true ou false existe tal propriedade no objeto.
