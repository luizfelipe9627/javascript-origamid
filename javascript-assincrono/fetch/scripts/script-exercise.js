//* Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulário onde o usuário pode digitar o cep e o endereço completo é retornado ao clicar em buscar.

// Está puxando do DOM os primeiros elementos encontrados com a classe ou id passados.
const inputCep = document.querySelector("#cep");
const resultCep = document.querySelector(".resultCep");
const buttonCep = document.querySelector(".buttonCep");

buttonCep.addEventListener("click", handleClick); // Está adicionando um evento de clique no button que ao ter seu evento acionada executa a função handleClick.

// Função handleClick que é acionada toda vez que houver o clique no button.
function handleClick(e) {
  e.preventDefault(); // Impede que a página recarregue ao clicar no botão de submit.
  searchCep(inputCep.value); // Pega o valor digitado no input e atribui ao parâmetro cep da função searchCep.
}

// Função searchCep responsável por puxar e retornar a API.
function searchCep(cep) {
  // O fetch faz a requisição no link passado e quando tiver o status de ok(carregado com sucesso) o then executa.
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
    .then((response) => {
      return response.json(); // Retorna uma promise que tem como PromiseResult a transformação para JSON(objeto) da api de cep.
    })
    // O then está acessando o resultado do then anterior(no caso o json retornado) e aplicando ao parâmetro json criado.
    .then((json) => {
      // O innerText está adicionando um texto ao elemento resultCep. Em seguida está sendo passado por template string cada propriedade que deseja ser puxada do JSON da api.
      resultCep.innerText = `
        Endereço: ${json.logradouro}
        Bairro: ${json.bairro}
        CEP: ${json.cep}
        Localidade: ${json.localidade}
        UF: ${json.uf}
      `;
    });
}

//* Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin and reais. Atualize este valor a cada 30s.

const resultBitcoin = document.querySelector(".resultBitcoin"); // Está puxando do DOM oo primeiro elemento encontrado com a classe resultBitcoin.

// Função responsável por retornar e manipular a api.
function fetchBitcoin() {
  // O fetch faz a requisição no link passado e quando tiver o status de ok(carregado com sucesso) o then executa.
  fetch("https://blockchain.info/ticker")
    // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
    .then((response) => {
      return response.json(); // Retorna uma promise que tem como PromiseResult a transformação para JSON(objeto) da api de bitcoin.
    })
    // O then está acessando o resultado do then anterior(no caso o json retornado) e aplicando ao parâmetro json criado.
    .then((json) => {
      resultBitcoin.innerText = `R$ ${json.BRL.buy}`.replace(".", ","); // Está pegando o elemento resultBitcoin e adicionando como texto uma string e o valor presente dentro do buy no JSON da api. Em seguida troca todos os pontos por virgulas.
    });
}

fetchBitcoin(); // Está executando a função.

// Criado um intervalo que executa o seu escopo a cada 30s.
// setInterval(fetchBitcoin, 1000 * 30); // Executa a função fetchBitcoin a cada 30s(tomar cuidado pois tem API que tem uma quantidade limitada de requisição).

//* Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima.

const resultJoke = document.querySelector(".resultJoke");
const buttonJoke = document.querySelector(".buttonJoke");

// Função responsável por retornar e manipular a api.
function pullJoke() {
  // O fetch faz a requisição no link passado e quando tiver o status de ok(carregado com sucesso) o then executa.
  fetch("https://api.chucknorris.io/jokes/random")
    // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
    .then((response) => {
      return response.json(); // Retorna uma promise que tem como PromiseResult a transformação para JSON(objeto) da api de piadas.
    })
    // O then está acessando o resultado do then anterior(no caso o json retornado) e aplicando ao parâmetro json criado.
    .then((json) => {
      resultJoke.innerText = json.value; // Está pegando o elemento resultJoke e adicionando como texto a piada presente dentro do objeto json em value.
    });
}

pullJoke(); // Está executando a função.

buttonJoke.addEventListener("click", pullJoke); // Está adicionando um evento de clique no button que ao ter seu evento acionada executa a função pullJoke.
