//* > Object history.

// É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history
console.log(window.history); // O history é um objeto que contém diferentes métodos e propriedades para se trabalhar com o histórico do browser do usuário.

// window.history.back(); // Vai para a página anterior acessando o histórico.
// window.history.forward(); // Vai para a próxima página acessando o histórico.

//* > Método pushState.

// A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url). Em obj podemos enviar um objeto com dados mas o seu uso é restrito por isso geralmente utilizamos null. O title ainda é ignorado por alguns browsers, também utilizamos null nele. O url que é parte importante.
window.history.pushState(null, null, "home.html"); // Modifica o URL padrão do site e adiciona no histórico.

//* > Evento popstate.

// Está adicionando na window(janela do navegador) um evento do tipo popstate, que é acionado sempre que for clicado no botão de voltar e próximo. Quando acionado executa o callback criado.
window.addEventListener("popstate", () => {
  console.log("Evento acionado."); // Mostra uma string no console.
});

//* > Fetch em conjunto com o history.

const links = document.querySelectorAll("a"); // Está puxando do DOM todos os elementos a href e armazenando na constante links.

// Função que é executada quando tem um evento de clique nos links, responsável por modificar a URL da página.
function handleClick(event) {
  event.preventDefault(); // Impede o recarregamento da página.
  fetchPage(event.target.href); // Executa a função e atribui como valor do parâmetro o HREF do elemento que acionou o evento.

  window.history.pushState(null, null, event.target.href); // Modifica o URL padrão do site para o link clicado e adiciona no histórico.
}

// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
// Função responsável por fazer o fetch dos arquivos HTML.
async function fetchPage(url) {
  // O fetch faz a requisição para o arquivo criado e quando tiver o status de ok(carregado com sucesso) retorna a promise.
  const pageResponse = await fetch(url); // Armazena na constante pageResponse a resposta do fetch e por conta do await retorna a resposta somente quando a promise for resolvida(cumprida).
  const pageText = await pageResponse.text(); // Converte a resposta do fetch em texto e armazena na constante pageText. O await faz esperar até a promise for cumprida.

  replaceContent(pageText); // Executa a função e coloca como seu parâmetro o valor presente dentro da constante pageText.
}

// Função responsável por mudar os textos dos contents e do title sem precisar recarregar a página.
function replaceContent(newTest) {
  const newHTML = document.createElement("div"); // Está criando um novo elemento div e armazenando na constante newHTML.
  newHTML.innerHTML = newTest; // Está inserindo a estrutura HTML presente no newTest dentro do newHTML.

  const oldContent = document.querySelector(".content"); // Está selecionando o elemento HTML que possui a classe content e armazenando na constante chamada oldContent.
  const newContent = newHTML.querySelector(".content"); // Está selecionando dentro do newHTML o elemento que possui a classe content e armazenando na constante newContent.

  oldContent.innerHTML = newContent.innerHTML; // Muda o texto do oldContent para o texto do newContent.
  document.title = newHTML.querySelector("title").innerText; // Responsável por pegar e mudar o title da página para o title do newHTML.
}

// Adiciona um evento popstate na janela do navegador, o evento do tipo popstate  é acionado sempre que for clicado no botão de voltar e próximo. Quando acionado executa o callback criado.
window.addEventListener("popstate", () => {
  const oldUrl = window.location.pathname; // Através do window acessa o location que é um objeto que contém informações sobre a URL e depois dentro do location pega o pathname que armazena a URL depois do host(000.0.0.0:0000).
  console.log(oldUrl);
  //fetchPage(); // Executa a função fetchPage novamente e como seu parâmetro a url
});

// O forEach percorre cada link armazenado na constante links.
links.forEach((link) => {
  link.addEventListener("click", handleClick); // Adiciona um evento de clique ao link que ao ser clicado executa a função handleClick.
});
