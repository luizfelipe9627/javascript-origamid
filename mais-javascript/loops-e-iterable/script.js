//* > Iterable.
// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.

//* > For...of.
// É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.

//* > Spread e For...of.
// Com o for loop podemos manipular cada um dos elementos do objeto iterável.

//* > Apenas iteráveis.
// O for...of não irá funcionar em um objeto comum que não seja iterável.

//* > For...in.
// Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

//* > Arrays e For...in.
// Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.

//* > Chave e Valor.
// Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.

//* > Do / While.
// Outro tipo de loop é o Do / While. Não é muito utilizado.
