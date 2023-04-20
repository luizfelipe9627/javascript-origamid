//* > Prototype.

function Person(name, age) {
  // O this referencia a própria função e cria o elemento dentro dela.
  this.name = name;
  this.age = age;
}
console.log(Person.prototype); // Mostra no console o objeto adicionado quando a função foi criada, o prototype é um objeto que funciona apenas em funções/métodos.

const newPerson = new Person("André", 28); // Criado um novo objeto chamado newPerson, que está preenchendo dois parâmetros da função Person.
console.log(newPerson.prototype); // Mostra undefined no console pois newPerson é um objeto e não uma propriedade.

//* > Adicionando novas propriedades usando o prototype.

// Adiciona um novo método/função chamado toWalk na função Person, que não pode ser herdado em outros objetos.
Person.prototype.toWalk = function () {
  // Está acessando o name direto da função Person.
  return `${this.name} andou 10km.`;
};
console.log(Person.prototype); // Mostra no console o método criado e o constructor já adicionado por padrão.
console.log(newPerson);

// Temos acesso tanto aos elementos da função Person quanto das criadas a parti dele.
console.log(newPerson.toWalk()); // O prototype permite executar o método criado, mesmo não estando dentro do newPerson e sim dentro do objeto [prototype].
console.log(newPerson.name); // Retorna no console o valor do name armazenado no parâmetro da função Person.
console.log(newPerson.age); // Retorna no console o valor do age armazenado no parâmetro da função Person.

//* > __proto__.

// Acessam o mesmo método mas __proto__ não terá acesso ao this.nome.
console.log(newPerson.toWalk()); // Jeito certo de fazer, retorna com o elemento pois o navegador pegou fora do __proto__ e depois executou o __proto__.
console.log(newPerson.__proto__.toWalk()); // Retorna undefined no name pois como foi acessado direto o navegador não conseguio pegar o valor necessário fora do __proto__.

//* > Construtores nativos.

const country = "Brazil"; // Criado uma constante armazenando uma string.
const city = new String("São Paulo"); // Cria um novo objeto de string chamada city.

console.log(city); // Retorna um objeto que tem um construtor sendo ele a String(), os métodos ou propriedades como length vem do __proto__ dentro dele.

const cityUpperCase = city.toUpperCase(); // Exemplo de um método que foi puxado do __proto__ usado para deixar todas as letras maiúsculas.
console.log(cityUpperCase); // Retorna no console as letras maiúsculas.

console.log(String.prototype); // Mostra no console todos os métodos/funções que podem ser usadas envolvendo o objeto String.

//* > Acessar função do protótipo.

const listAnimals = ["Cachorro", "Gato", "Cavalo"]; // Criado uma array chamada listAnimals contendo 3 elementos.
console.log(listAnimals);

// Tem dois jeitos de mostrar no console todos os métodos de uma array, acessando o objeto __proto__(ou prototype) dentro da Array.
console.log(listAnimals.__proto__);
console.log(Array.prototype);

const list = document.querySelectorAll("li"); // Está atribuindo a variável constante todas as LI presentes no DOM.
console.log(list); // Retorna uma Nodelist no console, e a Nodelist não tem métodos que uma Array tem.

const listArray1 = Array.prototype.slice.call(list); // Transforma a lista em uma array, acessando o método direto do prototype.
console.log(listArray1);

// O método from está linkado diretamente com a Array e não ao prototype.
const listArray2 = Array.from(list); // Outra forma e o jeito mais recomendado de transforma a lista em uma array é utilizando o método from.
console.log(listArray2);

//* > Método do objeto vs Protótipo.

// Retorna uma lista com os métodos/propriedades que o objeto ou elemento tem.
console.log(Object.getOwnPropertyNames(Array)); // Mostra no console os métodos linkados diretamente na Array.
console.log(Object.getOwnPropertyNames(Array.prototype)); // Mostra no console os métodos linkados no prototype da Array.

//* > Apenas os métodos do protótipo são herdados.

// [1, 2, 3].slice; // Existe pois o método faz parte do objeto prototype.
// [1, 2, 3].from(); // Não existe pois é um método direto da Array.

//* > Entenda o que está sendo retornado.

// Está criando um objeto chamado car que tem 3 elementos, sendo uma delas um método.
const Car = {
  brand: "Ford",
  price: 2000,
  acelerar() {
    return true;
  },
};

/* O que importa é o que é retornado. */
console.log(typeof Car); // Car retorna um object.
console.log(Car.brand); // Brand retorna uma string.
console.log(Car.price); // Price retorna um number.
console.log(Car.acelerar); // Acelerar retorna uma function.
console.log(Car.acelerar()); // Acelerar() retorna um boolean pois está sendo executada e recebendo um retorno.
console.log(Car.brand.charAt); // brand.charAt retorna uma function.
console.log(Car.brand.charAt(0)); // brand.charAt(0) retorna uma string.
