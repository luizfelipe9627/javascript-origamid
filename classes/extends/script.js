//* > Subclasses.

// Criado uma classe chamada Vehicle1.
class Vehicle1 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(wheels) {
    this.wheels = wheels; // O this está referenciando o parâmetro wheels criado no constructor.
  }

  // Criado um método chamado acelerar.
  acelerar() {
    console.log("Acelerou"); // Mostra uma string no console.
  }
}

// É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
// Nesse caso foi criado uma class chamada Motorcycle1 que é estendida(herda tudo do Vehicle1, inclusive o constructor) do Vehicle1.
class Motorcycle1 extends Vehicle1 {
  // Criado um método chamado empinar.
  empinar() {
    console.log("Empinou com " + this.wheels + " rodas"); // Mostra no console uma string.
  }
}

const honda = new Motorcycle1(2); // Está criando um novo objeto chamado honda que contém as propriedades da class Motorcycle1 tendo tudo do Vehicle1 herdado.
honda.empinar(); // Pega o método empinar presente dentro do objeto honda e executa.
honda.acelerar(); // Pega o método acelerar herdado do Vehicle1 presente dentro do prototype do objeto honda e executa.

//* Métodos.

class Vehicle2 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(wheels) {
    this.wheels = wheels; // O this está referenciando o parâmetro wheels criado no constructor.
  }

  // Criado um método chamado acelerar.
  acelerar() {
    console.log("Acelerou"); // Mostra uma string no console.
  }
}

// É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
// Nesse caso foi criado uma class chamada Motorcycle2 que é estendida(herda tudo do Vehicle2, inclusive o constructor) do Vehicle2.
class Motorcycle2 extends Vehicle2 {
  // Criado um método chamado acelerar que será encontrado primeiro que o método acelerar anterior(no caso do Vehicle2), pois o do Vehicle2 está dentro do prototype.
  // Podemos escrever por cima de um método herdado.
  acelerar() {
    console.log("Acelerou muito"); // Mostra uma string no console.
  }
}

const chevette = new Motorcycle2(2); // Está criando um novo objeto chamado chevette que contém as propriedades da class Motorcycle2 tendo tudo do Vehicle2 herdado.
chevette.acelerar(); // Ativa o método acelerar presente dentro do objeto chevette.

//* > Super.

// Criado uma class chamada Vehicle3.
class Vehicle3 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(wheels) {
    this.wheels = wheels; // O this está referenciando o parâmetro wheels criado no constructor.
  }

  // Criado um método chamado acelerar.
  acelerar() {
    console.log("Acelerou"); // Mostra uma string no console.
  }
}

// É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
// Nesse caso foi criado uma class chamada Motorcycle3 que é estendida(herda tudo do Vehicle3, inclusive o constructor) do Vehicle3.
class Motorcycle3 extends Vehicle3 {
  // Criado um método chamado acelerar.
  acelerar() {
    // É possível utilizar a palavra chave super para falarmos com a classe pai e acessarmos os seus métodos e propriedades.
    super.acelerar(); // O super está falando com a classe pai Vehicle3 e acessando e executando o seu método chamado acelerar.
    console.log("Muito"); // Mostra uma string no console.
  }
}

const ferrari = new Motorcycle3(2); // Está criando um novo objeto chamado ferrari que contém as propriedades da class Motorcycle3 tendo tudo do Vehicle3 herdado.
ferrari.acelerar(); // Ativa o método acelerar presente dentro do objeto ferrari.

//* > Super e Constructor.

// Criado uma class chamada Vehicle4.
class Vehicle4 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(wheels, fuel) {
    // O this está referenciando os parâmetros criados no constructor.
    this.wheels = wheels;
    this.fuel = fuel;
  }
}

// É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
// Nesse caso foi criado uma class chamada Motorcycle4 que é estendida(herda tudo do Vehicle4, inclusive o constructor) do Vehicle4.
class Motorcycle4 extends Vehicle4 {
  // O método constructor é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
  constructor(wheels, fuel, helmet) {
    // Podemos utilizar o super para estendermos o método constructor.
    super(wheels, fuel); // O super está puxando todas as classes do constructor pai.
    this.helmet = helmet; // O this está referenciando o parâmetro helmet criado no constructor da class Motorcycle4.
  }
}

const fiat = new Motorcycle4(4, "Gasolina", true); // Está criando um novo objeto chamado fiat que contém as propriedades da class Motorcycle4 tendo tudo do Vehicle4 herdado, e está preenchendo os parâmetros criados na class Motorcycle4.
