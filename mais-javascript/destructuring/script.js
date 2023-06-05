//* > Destructuring.

// Criado um objeto chamado car contendo 3 propriedades.
const car = {
  brand: "Fiat",
  year: 2018,
  doors: 4,
};

// Está fazendo a desestruturação do objeto. Atribuindo suas propriedades à nova constante.
const { brand, year } = car;

console.log(brand); // Acessa a constante brand e mostra no console o valor dentro dela.
console.log(year); // Acessa a constante year e mostra no console o valor dentro dela.

//* > Destructuring objects.

// Criado um objeto chamado client contendo diversas propriedades.
const client = {
  name: "Luiz",
  shopping: {
    digital: {
      books: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    physical: {
      notebooks: ["Caderno 1"],
    },
  },
};

// Acessa o objeto pai de todos(client) depois passa pelo objeto shopping e dentro dele pelo digital e seleciona seus filhos array e mostra no console. Sem a desestruturação fica muito extenso percorrer até a propriedade desejada.
console.log(client.shopping.digital.books);
console.log(client.shopping.digital.videos);

// Para tornar menos poluente podemos fazer a desestruturação do objeto para que tenha armazenado somente os acessos desejados, nesse caso as arrays books e videos presente dentro do objeto digital, tendo como pai o objeto shopping.
const { books, videos } = client.shopping.digital;

// Mostra no console o valor armazenado nas constantes.
console.log(books);
console.log(videos);

//* > Nesting.

// Criado um objeto chamado movies contendo diversas propriedades.
const movies = {
  city: "São Paulo",
  movieTheater: {
    today: {
      horror: ["Pânico 6"],
      action: ["Velozes e Furiosos 10"],
    },
    tomorrow: {
      adventure: ["Pantera Negra"],
    },
  },
};

// É possível aninhar uma desestruturação dentro de outra, nesse caso foi feita uma outra desestruturação que dá acesso a propriedade horror e action.
const {
  tomorrow,
  today,
  today: { horror, action },
} = movies.movieTheater;

// Mostra no console os valores presentes dentro de cada constante .
console.log(tomorrow); // Mostra no console o objeto tomorrow definido e seu filho array.
console.log(horror); // Mostra no console a array armazenada na propriedade horror.
console.log(action); // Mostra no console a array armazenada na propriedade action.
console.log(today); // Mostra no console o objeto today definido e seus filhos arrays.

//* > Nome das variáveis.

// Criado um objeto chamado person1.
const person = {
  firstName: "Luiz",
  secondName: "Felipe",
};

// Quando não é passado um nome para a propriedade ela coloca como padrão o nome definido na propriedade do objeto.
const { firstName, secondName } = person;

// Acessamos as constantes pelo nome definido no objeto.
console.log(firstName);
console.log(secondName);

// Podemos colocar um novo nome de constante que armazena o resultado da propriedade chamada.
const { firstName: personFirstName, secondName: personSecondName } = person;

// Nesse caso acessamos as constantes pelo nome definido.
console.log(personFirstName);
console.log(personSecondName);

//* > Valor inicial.

// Criado um objeto chamado fruitsColor.
const fruitsColor = {
  red: "Maça",
  green: "Melancia",
};

// Caso a propriedade não exista o valor padrão dela será undefined. É possível colocar um valor como padrão, adicionando ele.
const { red, green, yellow = "Banana", purple } = fruitsColor;

console.log(red); // Mostra o valor presente da propriedade do objeto fruitsColor no console.
console.log(green); // Mostra o valor presente da propriedade do objeto fruitsColor no console.
console.log(yellow); // Mostra o valor padrão definido no console.
console.log(purple); // Mostra undefined no console pois o valor não existe no objeto e nem está sendo criado.

//* > Destructuring arrays.

const numbers = [9627, 7269]; // Criado uma array chamada numbers que contém propriedades do tipo number.

// Foi armazenado em uma constante o index de cada number da array.
const firstNumber = numbers[0]; // Está armazenando o primeiro index da array numbers.
const secondNumber = numbers[1]; // Está armazenando o segundo index da array numbers.

// Para desestruturar array's você deve colocar as variáveis entre [] colchetes, e não {} pois não fazem parte de um objeto.
const [first, second] = numbers; // Armazena o valor através do índice da array, por isso é importante seguir a ordem da array, é uma forma mais limpa da alternativa anterior.

// Mostra no console os valores armazenados nas constantes.
console.log(first); // Mostra no console o que está armazenado no primeiro index.
console.log(second); // Mostra no console o que está armazenado no segundo index.

//* > Declaração de variáveis.

// Podemos definir variáveis do jeito tradicional 1 por 1.
const first1 = "Item 1";
const second1 = "Item 2";
const third1 = "Item 3";

// Ou podemos definir varias variáveis ao mesmo tempo com o destructuring, o que torna o código mais limpo.
const [first2, second2, third2] = ["Item 1", "Item 2", "Item 3"]; // Criado 3 constantes que recebe seus valores conforme suas posições.

//* > Argumento desestruturado.

// Criado uma função chamada handleKeyboard que recebe um parâmetro chamado event.
function handleKeyboard(event) {
  console.log(event); // Mostra no console a tecla que disparou o evento.
}

// Com destructuring pegamos somente a propriedade do objeto event(por isso os {}) diretamente, sendo assim queremos o key então passamos como parâmetro da função.
function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode); // Mostra no console a tecla que disparou o evento acessando diretamente o objeto event.
}

document.addEventListener("keyup", handleKeyboard); // Adiciona um evento de tecla ao document, que ao ser acionado executa a função handleKeyboard.
