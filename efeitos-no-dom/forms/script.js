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
const span = document.querySelector(".texto"); // Está selecionando no DOM o primeiro elemento encontrado com a classe texto e armazenando na constante chamada span.

// Função responsável por puxar o texto que o usuário digitar no input, para assim não precisar botar um value diretamente no HTML.
function handleChange1(event) {
  const target = event.target; // Armazena na constante target o evento do elemento que está recebendo a interação.

  console.log(target.value); // Mostra no console o que foi escrito no elemento que está sendo interagido.
  span.innerText = `Sua interação resultou em: ${target.value}`; // Atribui ao span HTML uma string e o que foi escrito no elemento que está sendo interagido.
}

form.addEventListener("change", handleChange1); // A cada vez que houver uma mudança(change) de input no form ele irá executar a função handleChange1.

//* > Validação.

function handleChange2(event) {
  const target = event.target; // Armazena na constante target o evento do elemento que está recebendo a interação.

  // Se o método checkValidity retornar false("!") executa o if.
  if (!target.checkValidity()) {
    target.classList.add("invalido"); // Adiciona uma classe chamada invalido no elemento que está recebendo a interação.

    // target.setCustomValidity("Esse campo é super importante!"); // A partir do elemento que está sendo interagido muda a mensagem nativa de validação para a definida no método setCustomValidity(não recomendado pois fica muito restrito a apenas uma mensagem).

    formContatoFilter1.setCustomValidity("O nome é super necessário!"); // A partir do elemento que está sendo interagido muda a mensagem nativa de validação para a definida no método setCustomValidity(mais recomendado pois está alterando apenas o aviso de um input).

    target.nextElementSibling.innerText = target.validationMessage; // A partir do elemento que está sendo interagido pega o próximo elemento após ele(o span) e muda o texto dele para a mensagem nativa de validação.
  } // Se não, se for true ele executa o else.
  else {
    target.classList.remove("invalido"); // Remove a classe chamada invalido no elemento que está recebendo a interação.
  }

  console.log(target.checkValidity()); // Usamos O método checkValidity para verificar se um input com o atributo required é válido ou não.
}

form.addEventListener("change", handleChange2); // A cada vez que houver uma mudança(change) de input no form ele irá executar a função handleChange2.

//* > Select.

function handleChange3(event) {
  const targetValue = event.target.value; // Armazena na constante target o valor do evento do elemento que está recebendo a interação.

  document.body.style.backgroundColor = targetValue; // Altera o estilo do background-color do body para o elemento que foi selecionado no select.
}

form.addEventListener("change", handleChange3); // A cada vez que houver uma mudança(change) de input no form ele irá executar a função handleChange3.

//* > Inputs diferentes.

//* Checkbox.

//* Radio.

//* Pegando todos os valores.