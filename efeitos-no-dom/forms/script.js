//* > Propriedade forms.

// O forms retorna uma uma HTMLCollection que contém todos os formulários do HTML.
const forms = document.forms;
console.log(forms);

// Como o forms é uma HTMLCollection podemos filtrar um form pelo número do index.
const formsIndex = document.forms[0];
console.log(formsIndex);

// Podemos selecionar um form pelo name/id dele.
const formsContato = document.forms.contato;
console.log(formsContato);

// Assim como o forms podemos filtrar pelo name/id ou pelo index do HTMLCollection.
const formContatoFilter1 = document.forms.contato.nome;
const formContatoFilter2 = document.forms.contato[0];
console.log(formContatoFilter1);
console.log(formContatoFilter2);

//* > Propriedade elements.

// O elements é usado para mostrar todos os elementos presente dentro do forms contato(como input ou textarea).
const formsContatoElements = document.forms.contato.elements;
console.log(formsContatoElements);

//* > Propriedade values.

// O value é usado para retornar o elemento value definido dentro do elemento HTML.
const formsContatoValue = document.forms.contato.elements.nome.value;
console.log(formsContatoValue);

const form = document.querySelector("#contato"); // Está selecionando no DOM o primeiro elemento encontrado com o id contato e armazenando na constante chamada form.
const span = document.querySelector('.texto');  // Está selecionando no DOM o primeiro elemento encontrado com a classe texto e armazenando na constante chamada span.

// Função responsável por puxar o texto que o usuário digitar no input, para assim não precisar botar um value diretamente no HTML.
function handleKeyUp(event) {
  // Pega o que é escrito a partir do evento do elemento que está recebendo interação e retorna o value digitado.
  console.log(event.target.value);
  span.innerText = event.target.value;
}

form.addEventListener("change", handleKeyUp); // A cada vez que houver uma mudança(change) de  input ele irá executar a função handleKeyUp.

//* > Validação.

