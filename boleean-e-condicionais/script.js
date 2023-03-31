// Está criando uma variável que tem como valor um boolean.
let possuiGraduacao = true;
let possuiMBA = false;

// Se o valor for true(verdadeiro) irá executar o primeiro bloco de comando.
if(possuiGraduacao) {
  console.log("Possui graduação.");
} // O else if verifica se a condição anterior é false, se for ele verifica o else if, se não for true ele irá para o else.
 else if(possuiMBA) {
  console.log("Possui MBA.");
} // Se for false ele ira executar o segundo bloco no c else.
else {
  console.log("Não possui nem graduação nem MBA.");
}

// Caso a variável esteja vazia ela é false, se tiver algo ela é true.
let nome = '';
// Se nome existir então ele irá executar o comando dentro do if.
if(nome) {
  console.log(nome)
  // Caso contrario irá executar o comando dentro do else.
} else {
  console.log('Não existe nome.');
}

