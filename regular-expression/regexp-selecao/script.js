//* > Regular expression.
// Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

const regexp1 = /J/; // Procura pelo primeiro J. Depois armazena o resultado na constante.
const newText1 = "JavaScript".replace(regexp1, "B"); // Pega a string "JavaScript" e troca o J por B e armazena o resultado na constante.
console.log(newText1); // Mostra "BavaScript" no console.

//* > Literal.
// Utilizar um carácter literal irá realizar uma busca específica deste carácter.

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

const regexp16 = /\d/g; // Procura por todos os dígitos(números). Depois armazena o resultado na constante.
const newText16 = "+55 (21) 2222-2222".replace(regexp16, "X"); // Pega a string "+55 (21) 2222-2222" e troca todos os dígitos pela letra "X" e armazena o resultado na constante.
console.log(newText16); // Mostra "+XX (XX) XXXX-XXXX" no console.

//* > Not digit.
// O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].

const regexp17 = /\D/g; // Procura por todos que não forem dígitos(números). Depois armazena o resultado na constante.
const newText17 = "+55 (21) 2222-2222".replace(regexp17, ""); // Pega a string "+55 (21) 2222-2222" e remove todos os dígitos e armazena o resultado na constante.
console.log(newText17); // Mostra "552122222222" no console.

//* > Whitespace
// O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.

const regexp18 = /\s/g; // Procura por todos espaços em branco. Depois armazena o resultado na constante.
const newText18 = "+55 (21) 2222-  2222  ".replace(regexp18, ""); // Pega a string "+55 (21) 2222-  2222" e remove todos os espaços e armazena o resultado na constante.
console.log(newText18); // Mostra "+55(21)2222-2222" no console.

//* > Not whitespace.
// O \S irá selecionar qualquer caractere que não for espaço em branco.

const regexp19 = /\S/g; // Procura por todos o que não forem espaço em branco. Depois armazena o resultado na constante.
const newText19 = "+55 (21) 2222-  2222  ".replace(regexp19, "X"); // Pega a string "+55 (21) 2222-  2222  " e troca todos os que não forem espaços pelo "X" e armazena o resultado na constante.
console.log(newText19); // Mostra "XXX XXXX XXXXX  XXXX  " no console.

//* > Quantificador
// É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caractere por caractere.

const regexp20 = /aaaa/g; // Procura todos os que tiverem 4 "a" seguidos. Depois armazena o resultado na constante.
const regexp20Alternative = /a{4}/g; // Forma alternativa para procurar todos que tiverem 4 "a" seguidos.
const newText20 = "Vaaaai ali por favor.".replace(regexp20, "a"); // Pega a string "Vaaaai ali por favor." e troca todos os que tiverem 4 a seguidos por "a" e armazena o resultado na constante.
console.log(newText20); // Mostra "Vai ali por favor." no console.

//* > Quantificador min e max.
// Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.

const regexp21 = /\d{2,3}/g; // Procura por todos os dígitos seguidos de "2" até "3". Depois armazena o resultado na constante.
const newText21 = "222.333.222.42".replace(regexp21, "X"); // Pega a string "222.333.222.42" e troca todos os dígitos seguidos de 2 até 3 por "X" e armazena o resultado na constante.
console.log(newText21); // Mostra "X.X.X.X" no console.

const regexp22 = /\w{1,}/g; // Procura por todas as letras seguidos com 1 carácter ou mais. Depois armazena o resultado na constante.
const newText22 = "A melhor linguagem é JavaScript".replace(regexp22, "X"); // Pega a string "A melhor linguagem é JavaScript" e troca todos as letras seguidos de 1 carácter ou mais por "X" e armazena o resultado na constante.
console.log(newText22); // Mostra "X X X é X" no console.

//* > Mais(+).
// O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

const regexp23 = /\d+/g; // Procura por todos os dígitos em ocorrência de um ou mais. Depois armazena o resultado na constante.
const newText23 = "222.333.222.42".replace(regexp23, "X"); // Pega a string "222.333.222.42" e troca todos as letras quando existir pelo menos uma ou mais ocorrências por "X" e armazena o resultado na constante.
console.log(newText23); // Mostra "X.X.X.X" no console.

//* > Asterisco(*).
// O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.

const regexp24 = /d\w+/g; // Procura por todos que começa com "d', seguido por uma ou mais letras. Depois armazena o resultado na constante.
const newText24 = "Dígitos, dados, desenhos, Dito, d".replace(regexp24, "X"); // Pega a string "Dígitos, dados, desenhos, Dito, d" e troca todos que começa com d, seguido por uma ou mais letras por "X" e armazena o resultado na constante.
console.log(newText24); // Mostra "Dígitos, X, X, Dito, d" no console.

//* > Opcional(?).
// O sinal ? significa que o caractere é opcional, pode ou não existir.

const regexp25 = /regexp?/g; // Procura por todos os regex com "p" opcional. Depois armazena o resultado na constante.
const newText25 = "Qual é o certo, regexp ou regex?".replace(
  regexp25,
  "Regular Expression"
); // Pega a string "Qual é o certo, regexp ou regex?" e troca todos os regex com p opcional por "Regular Expression" e armazena o resultado na constante.
console.log(newText25); // Mostra " Qual é o certo, Regular Expression ou Regular Expression?" no console.

//* > Alternado(|).
// O sinal | irá selecionar um ou outro. java|php.

const regexp26 = /java|php/gi; // Procura por todos os "java" ou "php" (case insensitive). Depois armazena o resultado na constante.
const newText26 = "PHP e Java são linguagens diferentes".replace(regexp26, "X"); // Pega a string "Qual é o certo, regexp ou regex?" e troca todos os java ou php (case insensitive) por "X" e armazena o resultado na constante.
console.log(newText26); // Mostra "X e X são linguagens diferentes" no console.

//* > Word boundary \b.
// O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

const regexp27 = /java/gi; // Procura por todos os java (case insensitive). Depois armazena o resultado na constante.
const newText27 = "Java não é JavaScript.".replace(regexp27, "X"); // Pega a string "Java não é JavaScript." e troca todos os java (case insensitive) por "X" e armazena o resultado na constante.
console.log(newText27); // Mostra "X não é XScript." no console.

const regexp28 = /\bjava\b/gi; // Procura por todos os java (case insensitive). Depois armazena o resultado na constante.
const newText28 = "Java não é JavaScript.".replace(regexp28, "X"); // Pega a string "Java não é JavaScript." e troca todos os java (case insensitive) por "X" e armazena o resultado na constante.
console.log(newText28); // Mostra "X não é JavaScript" no console.

const regexp29 = /\b\d+\b/gi; // Procura por todos os dígitos em sequência, que estejam isolados. Depois armazena o resultado na constante.
const newText29 = "O Restaurante25 na Rua 3, custa R$ 32,00".replace(
  regexp29,
  "X"
); // Pega a string "O Restaurante25 na Rua 3, custa R$ 32,00" e troca todos os dígitos em sequência, que estejam isolados. por "X" e armazena o resultado na constante.
console.log(newText29); // Mostra "O Restaurante25 na Rua X, custa R$ X,X" no console.
const newText29Alternative = "11_22 33-44 55é66 77e88".replace(regexp29, "X"); // Pega a string "11_22 33-44 55é66 77e88" e troca todos os dígitos em sequência, que estejam isolados. por "X" e armazena o resultado na constante.
console.log(newText29Alternative); // Mostra "11_22 X-X XéX 77e88" no console.

//* > Not word boundary \B.
// É o contrário do \b.

const regex30 = /\B\d+\B/gi; // Procura por todos os dígitos que não estão em sequência, que não estejam isolados. Depois armazena o resultado na constante.
const newText30 = "11_22 33-44 55é66 77e88".replace(regex30, "X"); // Pega a string "11_22 33-44 55é66 77e88" e troca todos os dígitos que não estão em sequência, que não estejam isolados. por "X" e armazena o resultado na constante.
console.log(newText30); // Mostra "1X_X2 33-44 55é66 7XeX8" no console.

//* > Anchor beginning.
// Com o ^ é possível informar que a busca deve ser iniciada no início da linha.

const regex31 = /^\w+/g; // Procura por todas as sequências de alfanuméricos no início da linha. Depois armazena o resultado na constante.
const newText31 = `andre@origamid.com
contato@origamid.com`.replace(regex31, "X"); // Pega a template string "andre@origamid.com contato@origamid.com" e troca todas as sequências de alfanuméricos no início da linha e troca por "X" e armazena o resultado na constante.
console.log(newText31); /*
  Mostra "X@origamid.com
  contato@origamid.com" no console.
*/

//* > Anchor end.
// Com o $ é possível informar que a busca deve ser iniciada no final da linha.

const regex32 = /\w+$/g; // Procura por todas as sequências de alfanuméricos no final da linha. Depois armazena o resultado na constante.
// Pega a template string "andre@origamid.com contato@origamid.com" e troca todas as sequências de alfanuméricos no final da linha e troca por "X" e armazena o resultado na constante.
const newText32 = `andre@origamid.com
contato@origamid.com`.replace(regex32, "X");
console.log(newText32); /*
  Mostra "andre@origamid.com
  contato@origamid.X" no console.
*/

//* > Flag: m.
// Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.

const regexp33 = /\w+$/gm; // Procura por todas as sequências de alfanuméricos no final da linha. Depois armazena o resultado na constante.
const newText33 = `andre@origamid.com
contato@origamid.com`.replace(regexp33, "X"); // Pega a template string "andre@origamid.com contato@origamid.com" e troca todas as sequências de alfanuméricos no final da linha por "X" e armazena o resultado na constante.
console.log(newText33);
/*
  Mostra "andre@origamid.X
  contato@origamid.X" no console.
*/

const regexp34 = /^\w+/gm; // Procura por todas as sequências de alfanuméricos no inicio da linha. Depois armazena o resultado na constante.
const newText34 = `andre@origamid.com
contato@origamid.com`.replace(regexp34, "X"); // Pega a template string "andre@origamid.com contato@origamid.com" e troca todas as sequências de alfanuméricos no inicio da linha por "X" e armazena o resultado na constante.
console.log(newText34);
/*
  Mostra "X@origamid.com
  X@origamid.com" no console.
*/

//* > Line feed \n.
// O \n irá selecionar o final de uma linha, quando criamos uma nova.

const regexp35 = /\n/g; // Procura por todas as quebras de linhas. Depois armazena o resultado na constante.

const newText35 = `andre@origamid.com\ncontato@origamid.com`.replace(
  regexp35,
  "---"
); // Pega a  string "andre@origamid.com\ncontato@origamid.com" e troca todas as quebras de linhas por "---" e armazena o resultado na constante.
console.log(newText35); // Mostra "andre@origamid.com---contato@origamid.com" no console.

const newText35Alternative = `andre@origamid.com
contato@origamid.com`.replace(regexp35, "X"); // Pega a string "andre@origamid.com contato@origamid.com" e troca todas as quebras de linhas por "X" e armazena o resultado na constante.
console.log(newText35Alternative); // Mostra "andre@origamid.comXcontato@origamid.com" no console.

//* > Unicode \u.
// O \u irá selecionar o respectivo caractere unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.

const regexp36 = /\u0040|\u00A9/g; // Procura por todos os "@" ou "©". Depois armazena o resultado na constante.
const newText36 = "andre@origamid.com ©".replace(regexp36, "---"); // Pega a string "andre@origamid.com ©" e troca todos os "@" ou "©" por "---" e armazena o resultado na constante.
console.log(newText35); // Mostra "andre---origamid.com ---" no console.
