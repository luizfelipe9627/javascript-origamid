//* > Regular expression.
// Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

const regexp1 = /J/; // Procura pelo primeiro J. Depois armazena o resultado na constante.
const newText1 = "JavaScript".replace(regexp1, "B"); // Pega a string "JavaScript" e troca o J por B e armazena o resultado na constante.
console.log(newText1); // Mostra "BavaScript" no console.

//* > Literal.
// Utilizar um caracter literal irá realizar uma busca específica deste caracter.

const regexp2 = /Java/; // Procura pelo J seguido de a,v e a. Depois armazena o resultado na constante
const newText2 = "JavaScript".replace(regexp2, "Type"); // Pega a string "JavaScript" e troca o Java por Type e armazena o resultado na constante.
console.log(newText2); // Mostra "TypeScript" no console.

//* > Flag: g.
// As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

const regexp3 = /a/g; // Procura por todos os "a". Depois armazena o resultado na constante.
const newText3 = "JavaScript".replace(regexp3, "i"); // Pega a string "JavaScript" e troca todos os "a" por "i" e armazena o resultado na constante.
console.log(newText3); // Mostra "JiviScript" no console.

//* > Flag: i.
// Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A..

const regexp4 = /Pe/gi; // Procura por todos os "PE", "Pe", "pE" e "pe". Depois armazena o resultado na constante.
const newText4 = "Perdeu perdido".replace(regexp4, "Ba"); // Pega a string "Perdeu perdido" e troca todos os "PE", "Pe", "pE" e "pe" por "Ba" e armazena o resultado na constante.
console.log(newText4); // Mostra "Bardeu Bardido" no console.

//* > Character class.
// Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.

const regexp5 = /[ai]/gi; // Procura por todos os "a", "A", "i" e "I". Depois armazena o resultado na constante.
const newText5 = "JavaScript".replace(regexp5, "u"); // Pega a string JavaScript e troca todos os "a", "A", "i" e "I" por "u" e armazena o resultado na constante.
console.log(newText5); // Mostra "JuvuScrupt" no console.

//* > Character class e Especiais.
// Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

const regexp6 = /[-.]/g; // Procura por todos os caractere "-" e ".". Depois armazena o resultado na constante.
const newText6 = "111.222-333-44".replace(regexp6, ""); // Pega a string "111.222-333-44" e troca todos os caractere "-" e "." por nenhum elemento e armazena o resultado na constante.
console.log(newText6); // Mostra "11122233344" no console.

//* > Um ou Outro.
// Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.

const regexp7 = /Bra[sz]il/g; // Procura por todos os "B", seguido de "r", "a" seguido de "s" ou "z", seguido de "i" e "l". Depois armazena o resultado na constante.
const newText7 = "Brasil é com z: Brazil".replace(regexp7, "Prazer"); // Pega a string "Brasil é com z: Brazil" e troca todos os "B", seguido de "r", "a" seguido de "s" ou "z", seguido de "i" e "l" por "Prazer" e armazena o resultado na constante.
console.log(newText7); // Mostra "Prazer é com z: Prazer" no console.

//* > De A à Z.
// O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

const regexp8 = /[a-z]/g; // Procura por todos os itens de "a" até "z". Depois armazena o resultado na constante.
const newText8 = "JavaScript é a linguagem.".replace(regexp8, "0"); // Pega a string "JavaScript é a linguagem." e troca os itens de "a" até "z" pelo número "0" e armazena o resultado na constante.
console.log(newText8); // Mostra "J000S00000 é 0 000000000" no console.

const regexp9 = /[a-zA-Z]/g; // Procura por itens de "a" até "z" e "A" até "Z". Depois armazena o resultado na constante.
const newText9 = "JavaScript é a linguagem.".replace(regexp9, "1"); // Pega a string "JavaScript é a linguagem." e troca todos os itens de "a" até "z" e "A" até "Z" pelo número "1" e armazena o resultado na constante.
console.log(newText9); // Mostra "1111111111 é 1 111111111." no console.

const regexp10 = /[0-9]/g; // Procura por todos os números de "0" até "9".
const newText10 = "123.333.333-33".replace(regexp10, "X"); // Pega a string "123.333.333-33" e troca todos os números de "0" até "9" por "X" e armazena o resultado na constante.
console.log(newText10); // Mostra "XXX.XXX.XXX-XX" no console.

//* > Negar(^).
// Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a].

const regexp11 = /[^a-z]/g; // Procura por tudo que não estiver entre "a" e "z". Depois armazena o resultado na constante.
const newText11 = "Brasil é com z: Brazil".replace(regexp11, " "); // Pega a string "Brasil é com z: Brazil" e troca todos os itens que não estiverem entre "a" e "z" por espaço e armazena o resultado na constante.
console.log(newText11); // Mostra " rasil   com z   razil" no console.

//* > Ponto(.).
// O ponto . irá selecionar qualquer caractere, menos quebras de linha.

const regexp12 = /./g; // Procura por todos os caracteres menos quebra de linha. Depois armazena o resultado na constante.
const newText12 = "JavaScript é a linguagem.".replace(regexp12, "0"); // Pega a string "JavaScript é a linguagem." e troca todos os caracteres menos quebra de linha pelo número "0" e armazena o resultado na constante.
console.log(newText12); // Mostra "0000000000000000000000000" no console.

//* > Escapar especiais(+*?^$\.[]{}()|/).
// Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/.

const regexp13 = /\./g; // Procura por todos os pontos(.). Depois armazena o resultado na constante.
const regexp13Alternativa = /[.]/g; // Forma alternativa para procurar por todos os pontos.
const newText13 = "999.222.222.11".replace(regexp13, "-"); // Pega a string "999.222.222.11" e troca todos os pontos(.) pelo caractere "-" e armazena o resultado na constante.
console.log(newText13); // Mostra "999-222-222-11" no console.

//* > Word.
// O \w irá selecionar qualquer caractere alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].

const regexp14 = /\w/g; // Procura por todos os alfanuméricos(letras e números). Depois armazena o resultado na constante.
const newText14 = "Guarda-chuva R$ 23,00.".replace(regexp14, "-"); // Pega a string "Guarda-chuva R$ 23,00." e troca todos os alfanuméricos pelo caractere "-" e armazena o resultado na constante.
console.log(newText14); // Mostra "------------ -$ --,--." no console.

//* > Not word.
// O \W irá selecionar tudo o que não for caractere alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_].

const regexp15 = /\W/g; // Procura por todos os que não forem caractere alfanuméricos(letras e números). Depois armazena o resultado na constante.

const newText15 = "Guarda-chuva R$ 23,00.".replace(regexp15, "-"); // Pega a string "Guarda-chuva R$ 23,00." e troca todos os que não forem alfanuméricos pelo caractere "-" e armazena o resultado na constante.
console.log(newText15); // Mostra "Guarda-chuva-R--23-00-" no console.

//* > Digit.
// O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].

const regexp16 = /\d/g; // Procura por todos os dígitos(números).
const newText16 = "+55 (21) 2222-2222".replace(regexp16, "X"); // Pega a string "+55 (21) 2222-2222" e troca todos os dígitos pela letra "X" e armazena o resultado.
console.log(newText16); // Mostra "+XX (XX) XXXX-XXXX" no console.

//* > Not digit.
// O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].

const regexp17 = /\D/g; // Procura por todos que não forem dígitos(números).
const newText17 = "+55 (21) 2222-2222".replace(regexp17, ""); // Pega a string "+55 (21) 2222-2222" e remove todos os dígitos e armazena o resultado.
console.log(newText17); // Mostra "552122222222" no console.

//* > Whitespace
// O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.

const regexp18 = /\s/g; // Procura por todos espaços em branco.
const newText18 = "+55 (21) 2222-  2222  ".replace(regexp18, ""); // Pega a string "+55 (21) 2222-  2222" e remove todos os espaços e armazena o resultado.
console.log(newText18); // Mostra "+55(21)2222-2222" no console.

//* > Not whitespace.
// O \S irá selecionar qualquer caractere que não for espaço em branco.

const regexp19 = /\S/g; // Procura por todos o que não forem espaço em branco.

const newText19 = "+55 (21) 2222-  2222  ".replace(regexp19, "X"); // Pega a string "+55 (21) 2222-  2222  " e troca todos os que não forem espaços pelo "X" e armazena o resultado.
console.log(newText19); // Mostra "XXX XXXX XXXXX  XXXX  " no console.

//* > Quantificador
// É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caractere por caractere.

const regexp20 = /aaaa/g; // Procura todos os que tiverem 4 "a" seguidos.
const regexp20Alternativo = /a{4}/g; // Forma alternativa para procurar todos que tiverem 4 "a" seguidos.
const newText20 = "Vaaaai ali por favor.".replace(regexp20, "a"); // Pega a string "Vaaaai ali por favor." e troca todos os que tiverem 4 a seguidos por "a" e armazena o resultado.
console.log(newText20); // Mostra "Vai ali por favor." no console.

//* > Quantificador min e max.
// Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.

const regexp21 = /\d{2,3}/g; // Procura por todos os dígitos seguidos de "2" até "3".
const newText21 = "222.333.222.42".replace(regexp21, "X"); // Pega a string "222.333.222.42" e troca todos os dígitos seguidos de 2 até 3 por "X" e armazena o resultado.
console.log(newText21); // Mostra "X.X.X.X" no console.

const regexp22 = /\w{1,}/g; // Procura por todas as letras seguidos com 1 carácter ou mais.
const newText22 = "A melhor linguagem é JavaScript".replace(regexp22, "X"); // Pega a string "A melhor linguagem é JavaScript" e troca todos as letras seguidos de 1 carácter ou mais por "X" e armazena o resultado.
console.log(newText22); // Mostra "X X X é X" no console.

//* > Mais(+).
// O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

//* > Asterisco(*).
// O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.

//* > Opcional(?).
// O sinal ? significa que o caractere é opcional, pode ou não existir.

//* > Alternado(|).
// O sinal | irá selecionar um ou outro. java|php.

//* > Word boundary \b.
// O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

//* > Not word boundary \B.
// É o contrário do \b.

//* > Anchor beginning.
// Com o ^ é possível informar que a busca deve ser iniciada no início da linha.

//* > Anchor end.
// Com o $ é possível informar que a busca deve ser iniciada no final da linha.

//* > Flag: m.
// Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.

//* > Line feed \n.
// O \n irá selecionar o final de uma linha, quando criamos uma nova.

//* > Unicode \u.
// O \u irá selecionar o respectivo caractere unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.
