//* > Referência da seleção.
// É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.

const regexp1 = /Java/g; // Procura por todos os "Java". Depois armazena o resultado na constante.
const newText1 = "PHP e Java são linguagens diferentes".replace(
  regexp1,
  "--$&Script"
); // Pega a string "PHP e Java são linguagens diferentes" e substitui todos os "Java" por "--JavaScript" e armazena o resultado na constante.
console.log(newText1); // Mostra "PHP e --JavaScript são linguagens diferentes" no console.  $& será igual à Java.

//* > Grupo de captura.
// É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.

const regexp2 = /(\w+)@[\w.]+/g; // Procura por todas as sequências alfanumérica, seguida de "@", seguido de alfanumérico ou ".". Depois armazena o resultado na constante.
const newText2 = "andre@email.com.br".replace(regexp2, "$1@gmail.com"); // Pega a string "andre@email.com.br" e substitui todas as sequências alfanumérica, seguida de "@"", seguido de alfanumérico ou "." por "gmail.com" e armazena o resultado na constante.
console.log(); // Mostra "andre@gmail" no console.

//* > Mais de um grupo.
// Podemos definir quantos grupos de captura quisermos.

const regexp3 = /(\w+),\s(\w+)/g; // Procura por todas as sequências alfanumérica, seguida de "," e seguido espaço de sequência alfanumérica. Depois armazena o resultado na constante.
const newText3 = "Rafael, Andre".replace(regexp3, "$2 $1"); // Pega a string "Rafael, Andre" e substitui todas as sequências alfanumérica, seguida de "," e seguido espaço de sequência alfanumérica por $2 $1 e armazena o resultado na constante.
console.log(newText3); // Mostra "Andre Rafael" no console.

//* > Mais do que captura apenas.
// Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.

const regexp4 = /(ta)+/gi; // Procura por qualquer sequência de "ta". Depois armazena o resultado na constante.
const newText4 = "Tatata, tata, ta".replace(regexp4, "Pá"); // Pega a string "Tatata, tata, ta" e substitui todas as sequências de "ta" por "Pá" e armazena o resultado na constante.
console.log(newText4); // Mostra "Pá, Pá, Pá" no console.

//* > Ignorar captura.
// Utilize o (?:) para ignorar a captura.

const regexp5 = /(?:ta)+/gi; // Procura por qualquer sequência de "ta". Depois armazena o resultado na constante.
const newText5 = "Tatata, tata, ta".replace(regexp5, "Pá"); // Pega a string "Tatata, tata, ta" e substitui todas as sequências de "ta" por "Pá" e armazena o resultado na constante.
console.log(newText5); // Mostra "Pá, Pá, Pá" no console.

//* > Positive lookahead.
// Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.

const regexp6 = /\d(?=px)/g; // Procura por todos os dígitos em sequência, que possuírem "px", sem selecionar o "px". Depois armazena o resultado na constante
const newText6 = "2em, 4px, 5%, 2px, 1px".replace(regexp6, "X");
console.log(newText6); // Mostra "2em, Xpx, 5%, Xpx, Xpx" no console.

//* > Negative lookahead.
// Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.

const regexp7 = /\d(?!px)/g; // Procura por todos os dígitos que não possuírem "px" sem selecionar o restante. Depois armazena o resultado na constante.
const newText7 = "2em, 4px, 5%, 5px, 1px".replace(regexp7, "X");
console.log(newText7); // Mostra "Xem, 4px, X%, 5px, 1px" no console.

//* > Positive lookbehind.
// Faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás dos mesmos.

const regexp8 = /(?<=R\$)[\d]+/g; // Procura por todos os dígitos que possuírem "R$"" na frente dos mesmos. Depois armazena o resultado na constante.
const newText8 = "R$99, 100, 200, R$20".replace(regexp8, "X"); // Pega a string "R$99, 100, 200, R$20" e substitui todos os dígitos que possuírem "R$"" na frente dos mesmos por "X" e armazena o resultado na constante.
console.log(newText8); // Mostra "R$X, 100, 200, R$X" no console.
