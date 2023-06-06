//* > Regular expression.

// Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

// Procura: "J".
const regexp1 = /J/; // Procura pelo primeiro J. Depois armazena o resultado na constante.

const newText1 = "JavaScript".replace(regexp1, "B"); // Pega a string JavaScript e troca o J por B e armazena o resultado na constante.
console.log(newText1); // Mostra "BavaScript" no console.

//* > Literal.

// Procura: "J" seguido de "a", "v" e "a".
const regexp2 = /Java/; // Procura pelo J seguido de a,v e a. Depois armazena o resultado na constante

const newText2 = "JavaScript".replace(regexp2, "Type"); // Pega a string JavaScript e troca o Java por Type e armazena o resultado na constante.
console.log(newText2); // Mostra "TypeScript" no console.

//* > Flag: g.

// As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

// Procura: Todo "a".
const regexp3 = /a/g; // Procura por todos os "a". Depois armazena o resultado na constante.

const newText3 = "JavaScript".replace(regexp3, "i"); // Pega a string JavaScript e troca todos os "a" por "i" e armazena o resultado na constante.
console.log(newText3); // Mostra "JiviScript" no console.

//* > Flag: i.

// Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A..

// Procura: Todo "PE", "Pe", "pE" e "pe".
const regexp4 = /Pe/gi; // Procura por todos os "PE", "Pe", "pE" e "pe" e armazena o resultado na constante.

const newText4 = "Perdeu perdido".replace(regexp4, "Ba"); // Pega a string Perdeu perdido e troca todos os "PE", "Pe", "pE" e "pe" por "Ba" e armazena o resultado na constante.
console.log(newText4); // Mostra "Bardeu Bardido" no console.

//* > Character class.

//* > Character class e Especiais.

//* > Um ou Outro.

//* > De A à Z.

//* > Negar.

//* > Ponto.

//* > Escapar especiais.

//* > Word.

//* > Not word.

//* > Digit.

//* > Not digit.

//* > Whitespace

//* > Not whitespace.

//* > 

//* > 

//* > 

//* > 

//* > 
