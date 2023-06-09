//* > Regexp constructor.
// Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.

const regexp1 = /\w+/gi; // Procura por todas as sequências alfanuméricas. Depois armazena o resultado na constante.

// Se passarmos uma string, não precisamos dos // e devemos utilizar \\ para meta characters, pois é necessário // escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp("\\w+", "gi");
const regexpObj2 = new RegExp(/\w+/, "gi");

const newText1 = "JavaScript Linguagem 101".replace(regexpObj1, "X"); // Pega a string "JavaScript Linguagem 101" e substitui todas as sequências alfanuméricas por "X" e armazena o resultado na constante.
console.log(newText1); // Mostra "X X X" no console.

// Procura por qualquer sequência de números que possuírem o padrão de formato de telefone. Depois armazena o resultado na constante.
const regexpTELEFONE1 =
  /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp(
  "(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}",
  "g"
);

//* > Propriedades.
// Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma.

const regexp2 = /\w+/gi; // Procura por todas as sequências alfanuméricas. Depois armazena o resultado na constante.

console.log(regexp2.flags); // Mostra no console a flag que está sendo usada do regexp nesse caso "gi".
console.log(regexp2.global); // Mostra no console se é um regexp global se sim mostra "true".
console.log(regexp2.ignoreCase); // Mostra no console se é um regexp ignoreCase(ignora letras maiúsculas) se sim mostra "true".
console.log(regexp2.multiline); // Mostra no console se é um regexp multiline(acessa mais de uma linha), nesse caso é "false".
console.log(regexp2.source); // Mostra no console a source(texto entre as duas barras literal) do regexp, nesse caso "\w+".

//* > regexp.test().
// O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

const regexp3 = /Java/g; // Procura por todas as sequências "Java". Depois armazena o resultado na constante.
const phrase1 = "JavaScript e Java"; // Armazena a string criada na constante phrase1.

console.log(regexp3.lastIndex); // Mostra "0" no console.
console.log(regexp3.test(phrase1)); // Mostra "true" no console.
console.log(regexp3.lastIndex); // Mostra "4" no console.))
console.log(regexp3.test(phrase1)); // Mostra "true" no console.
console.log(regexp3.lastIndex); // Mostra "17" no console.
console.log(regexp3.test(phrase1)); // Mostra "false" no console.
console.log(regexp3.lastIndex); // Mostra "0" no console.
console.log(regexp3.test(phrase1)); // Mostra "true" no console.
console.log(regexp3.lastIndex); // Mostra "4" no console.

//* > test() em loop.
// Podemos utilizar o while loop, para mostrar enquanto a condição for verdadeira. Assim retornamos a quantidade de match's.

const regexp4 = /Script/g; // Procura por todas as sequências "Script". Depois armazena o resultado na constante.
const phrase2 = "JavaScript, TypeScript e CoffeeScript"; // Armazena a string criada na constante phrase2.

let i = 1; // Cria a variável i e atribui o valor 1.

// Enquanto o método test() for verdadeiro irá executar o escopo.
while (regexp4.test(phrase2)) {
  console.log(i++, regexp4.lastIndex); // Mostra no console o valor de i e o valor do lastIndex.
}

//* > regexp.exec().
// O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.

const regexp5 = /\w{2,}/g; // Procura por todas as sequências alfanuméricas com 2 ou mais caracteres. Depois armazena o resultado na constante.
const frase = "JavaScript, TypeScript e CoffeeScript"; // Armazena a string criada na constante frase.

console.log(regexp5.exec(frase)); // O método excec executa a busca por um padrão em uma determinada string e mostra ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined] no console.

console.log(regexp5.exec(frase)); // O método excec executa a busca por um padrão em uma determinada string e mostra ["TypeScript", index: 12, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined] no console.

console.log(regexp5.exec(frase)); // O método excec executa a busca por um padrão em uma determinada string e mostra ["CoffeeScript", index: 25, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined] no console.

console.log(regexp5.exec(frase)); // O método excec executa a busca por um padrão em uma determinada string e mostra "null" no console.

console.log(regexp5.exec(frase)); // O método excec executa a busca por um padrão em uma determinada string e mostra ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined] no console.

//* > Loop com exec().
// Podemos fazer um loop com exec e parar o mesmo no momento que encontre o null.

const regexp6 = /\w{2,}/g; // Procura por todas as sequências alfanuméricas com 2 ou mais caracteres. Depois armazena o resultado na constante.
const phrase3 = "JavaScript, TypeScript e CoffeeScript"; // Armazena a string criada na constante phrase3.
let regexpResult; // Cria a variável regexpResult.

// Enquanto o método exec() for diferente de null irá executar o escopo.
while ((regexpResult = regexp.exec(frase)) !== null) {
  console.log(regexpResult[0]); // Mostra no console o valor do index 0.
}

//* > str.match().
// O match() é um método de strings que pode receber como argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não.

const regexp7 = /\w{2,}/g; // Procura por todas as sequências alfanuméricas com 2 ou mais caracteres. Depois armazena o resultado na constante.
const regexpSemG = /\w{2,}/; // Procura pela primeira sequência alfanumérica com 2 ou mais caracteres. Depois armazena o resultado na constante.
const phrase4 = "JavaScript, TypeScript e CoffeeScript";

console.log(phrase4.match(regexp7)); // O método match() procura por um padrão em uma determinada string e retorna uma array com os resultados da busca e depois mostra no console ["JavaScript", "TypeScript", "CoffeeScript"].

console.log(phrase4.match(regexpSemG)); // O método match() procura por um padrão em uma determinada string e retorna uma array com os resultados da busca e depois mostra no console ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined].

console.log(phrase4.match(regexp7)); // O método match() procura por um padrão em uma determinada string e retorna uma array com os resultados da busca e depois mostra no console ["JavaScript", "TypeScript", "CoffeeScript"].

console.log(phrase4.match(regexpSemG)); // O método match() procura por um padrão em uma determinada string e retorna uma array com os resultados da busca e depois mostra no console ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined].

//* > str.split().
// O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o match da array final.

const phrase5 = "JavaScript, TypeScript, CoffeeScript"; // Armazena a string criada na constante phrase5.

console.log(phrase5.split(", ")); // O método split divide uma string em uma array de strings e depois mostra no console ["JavaScript", "TypeScript", "CoffeeScript"].

console.log(phrase5.split(/Script/g)); // O método split divide uma string em uma array de strings e depois mostra no console ["Java", ", Type", ", Coffee", ""].

console.log(phrase5.split(/Script/gi)); // O método split divide uma string em uma array de strings e depois mostra no console ["Java", ", Type", ", Coffee", ""].

// Armazena a string criada na constante tags1.
const tags1 = ` 
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(tags1.split(/(?<=<\/?)\w+/g).join("div")); // O método split divide uma string em uma array de strings e depois mostra no console ["<div>", "<li>", "<li>", "</div>"].

//* > str.replace().
// O método replace é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp.

// Armazena a string criada na constante tags2.
const tags2 = ` 
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(tags2.replace(/(?<=<\/?)\w+/g, "div")); // O método replace procura por um padrão em uma determinada string e retorna uma nova string com os valores da busca substituídos e depois mostra no console "<div>", "<div>", "<div>", "</div>".

//* > Captura.
// É possível fazer uma referência ao grupo de captura dentro do argumento do replace. Então podemos utilizar $&, $1 e mais.

// Armazena a string criada na constante tags3.
const tags3 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(tags3.replace(/<li/g, "$& class='ativo'")); // O método replace procura por um padrão em uma determinada string e retorna uma nova string com os valores da busca substituídos e depois mostra no console "<ul>", "<li class='ativo'>", "<li class='ativo'>", "</ul>".

//* > Grupos de captura.
// É possível definirmos quantos grupos de captura quisermos.

// Armazena a string criada na constante emails.
const emails1 = `
  empresa@email.com
  contato@email.com
  suporte@email.com
`;

console.log(emails1.replace(/(\w+@)[\w.]+/g, "$1gmail.com")); // O método replace procura por um padrão em uma determinada string e retorna uma nova string com os valores da busca substituídos e depois mostra no console "empresa@gmail.com", "contato@gmail.com", "suporte@gmail.com".

//* > Callback.
// Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. O valor do return será o que irá substituir cada match.

// Armazena a string criada na constante emails2.
const emails2 = `
empresa@email.com
contato@email.com
suporte@email.com
`;

console.log(emails2.replace(/(\w+@)[\w.]+/g, "$1gmail.com")); // O método replace procura por um padrão em uma determinada string e retorna uma nova string com os valores da busca substituídos e depois mostra no console "empresa@gmail.com", "contato@gmail.com", "suporte@gmail.com".
