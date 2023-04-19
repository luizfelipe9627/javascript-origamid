//* Criando objetos.

// Criado uma constante contendo um objeto chamado car.
const car = {
  // Criou várias propriedades de tipos diferentes no objeto.
  brand: "Genérica",
  price: 0,
};

const honda = car; // Está armazenando o objeto car em uma variável.
honda.brand = "Honda"; // Está modificando a propriedade brand dentro do objeto car.
honda.price = 4000; // Está modificando a propriedade price dentro do objeto car.

console.log(honda); // Retorna o objeto car modificado com os novos valores.
console.log(car); // Retorna o objeto com os mesmos valores do colocado no Honda.

//* Usando constructor function para criar um novo objeto baseado no anterior sem modifica-lo.

// Em uma constructor function geralmente o nome da função começa sempre com letra maiúscula. As propriedades criadas dentro da função não podem ser acessadas ou alteradas a não ser que sejam parâmetros da função.
function Car(brand, price) {
  // O this referencia a própria função e cria o elemento dentro dela.
  this.brand = brand;
  this.price = price;
}

// O new agora está criando um novo objeto chamado fiat e outro chamado Mercedes baseado na function Car, sendo assim irá puxar os filhos do objeto anterior.
const fiat = new Car();

// Estão sendo definidos e atribuídos somente ao objeto fiat.
fiat.title = "Fiat a venda"; // Adiciona uma nova propriedade no objeto fiat.
// Também podemos adicionar um método no objeto.
fiat.condition = () => {
  return console.log("Estado de novo."); // Retorna Andou no console.
};

console.log(fiat); // Retorna o objeto fiat, vai estar undefined em alguns elementos caso não for passado o valor do parâmetro da função Car.
fiat.condition(); // Executa a função criada no objeto fiat.

// Criado um novo objeto chamada Mercedes que se baseia na constructor function chamada Car.
const mercedes = new Car("Mercedez", 5000); // Podemos atribuir novos valores aos elementos da função Car ja criados a partir do parâmetro da função.

console.log(mercedes); // Retorna o objeto Mercedes.

//* this Keywork.

// Em uma constructor function geralmente o nome da função começa sempre com letra maiúscula. As propriedades criadas dentro da função não podem ser acessadas ou alteradas a não ser que sejam parâmetros da função.
function Car2(brand, initialPrice) {
  // As constantes não podem ser acessadas fora do escopo da função, pois não estão utilizando this.
  const taxa = 1.2; // Cria uma constante chamada taxa contendo um valor number.
  const finalPrice = initialPrice * taxa; // Cria uma constante chamada finalPrice que recebe o valor atribuído ao parâmetro e multiplica pela taxa.

  // O this referencia a própria função e cria o elemento dentro dele, no caso dentro do Car, sendo assim eles podem ser acessados fora do escopo.
  this.price = finalPrice; // Está atribuindo o finalPrice ao elemento price do objeto.
  this.brand = brand; // Está atribuindo o brand ao elemento price do objeto.

  console.log(this); // Retorna o objeto.
}

// Cria um novo objeto chamado Mazda que recebe os filhos da função Car2.
const mazda = new Car2("Mazda", 2000); // Dentro da função Car2 está atribuindo o valor do brand e o initialPrice.
mazda.price = 4000; // Como foi utilizado o this no price ele pode ser acessado e modificado fora do escopo da função.
console.log(mazda); // Retorna o objeto Mazda no console.
