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
console.log(car); // Retorna o objeto com os mesmos valores do colocado no honda.

//* Usando constructor function para criar um novo objeto baseado no anterior sem modifica-lo.

// Em uma constructor function geralmente o nome da função começa sempre com letra maiúscula. As propriedades criadas dentro da função não podem ser acessadas ou alteradas a não ser que sejam parâmetros da função.
function Car(brand, price) {
  // O this referencia o próprio objeto e cria o elemento dentro dele, no caso dentro do Car.
  this.brand = brand;
  this.price = price;
}

// O new agora está criando um novo objeto chamado fiat e outro chamado mercedes baseado na function Car, sendo assim irá puxar os filhos do objeto anterior.
const fiat = new Car(); 

// Estão sendo definidos e atribuídos somente ao objeto fiat.
fiat.title = "Fiat a venda"; // Adiciona uma nova propriedade no objeto fiat.
// Também podemos adicionar um método no objeto.
fiat.condition = () => {
  return console.log("Estado de novo."); // Retorna Andou no console.
};

console.log(fiat); // Retorna o objeto fiat, vai estar undefined em alguns elementos caso não for passado o valor do parâmetro da função Car.
fiat.condition(); // Executa a função criada no objeto fiat.

// Criado um novo objeto chamada mercedes que se baseia na constructor function chamada Car.
const mercedes = new Car('Mercedez', 5000); // Podemos atribuir novos valores aos elementos da função Car ja criados a partir do parâmetro da função.

console.log(mercedes); // Retorna o objeto mercedes.
