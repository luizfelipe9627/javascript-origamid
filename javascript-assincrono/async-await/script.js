//* > Introdução ao async await.

// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
async function pullData1() {
  console.log("Estou executando primeiro que o await."); // Executa primeiro que o await pois o await aguarda a resposta resolvida do fetch e depois retorna essa resposta.

  // O fetch faz a requisição para o JSON criado e quando tiver o status de ok(carregado com sucesso) retorna a promise. O await indica que a promise só pode ser retornada caso seja resolvida.
  const responseData = await fetch("./dados.json"); // Armazena na constante responseData a resposta do fetch somente quando a promise for resolvida(cumprida).
  console.log(responseData); // Mostra a resposta armazenada na constante responseData.

  const JsonData = await responseData.json(); // O await está retornando na constante JsonData o resultado em formato JSON da promessa anterior resolvida.
  console.log(JsonData); // Mostra a resposta armazenada na constante JsonData.
}

pullData1(); // Está executando a função.

//* > Diferença entre o then e o async.

function initFetch() {
  // O fetch faz a requisição para a api de cep e quando tiver o status de ok(carregado com sucesso) o then executa.
  fetch("./dados.json")
    // O parâmetro dataResponse é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
    .then((dataResponse) => {
      return dataResponse.json(); // Retorna uma promise que tem como PromiseResult a transformação para JSON(objeto) do arquivo dados.
    })
    // O then está acessando o resultado/resposta do then anterior(no caso o JSON) e aplicando ao parâmetro dataJSON criado.
    .then((dataJSON) => {
      document.body.innerText = dataJSON.course; // Está inserindo no body a JSON puxando a propriedade course.
    });
}
initFetch(); // Executa a função.

async function iniciarAsync() {
  const dataResponse = await fetch("./dados.json"); // Armazena na constante dataResponse a resposta do fetch somente quando a promise for resolvida(cumprida).
  const dataJSON = await dataResponse.json(); // O await está retornando na constante JsonData o resultado em formato JSON da promessa anterior cumprida.
  document.body.innerText += dataJSON.course; // Está acrescentando(+=) no body a JSON puxando a propriedade course.
}
iniciarAsync(); // Executa a função.

//* > Utilizando try e catch.

// Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.
async function pullData2() {
  // O try é literalmente "tentar", caso tenha sucesso executa o bloco de comandos.
  try {
    const dadosResponse = await fetch("./dados.json"); // Armazena na constante dadosResponse a resposta do fetch somente quando a promise for resolvida(cumprida).
    const dadosJSON = await dadosResponse.json(); // O await está retornando na constante JsonData o resultado em formato JSON da promessa anterior cumprida.
    document.body.innerText += dadosJSON.course; // Está acrescentando(+=) no body a JSON puxando a propriedade course.

    // Caso ocorra qualquer erro no bloco do try é executado o bloco do catch.
  } catch (erro) {
    console.log(erro); // Retorna um erro no console.
  }
}
pullData2(); // Executa a função.

//* > Iniciar Fetch ao mesmo tempo utilizando async await.

// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
async function initAsync() {
  // O fetch faz a requisição nos arquivos JSON e quando tiver o status de ok(carregado com sucesso) armazena a Response nas constantes.
  const dataResponse = fetch("./dados.json");
  const clientsResponse = fetch("./clientes.json");

  // O await espera o que está dentro da expressão () ocorrer primeiro, depois executa o await do json e quando a promise for cumprida armazena as respostas em formato JSON nas constantes.
  const dadosJSON = await (await dataResponse).json();
  const clientsJSON = await (await clientsResponse).json();
  console.log(dadosJSON, clientsJSON); // Mostra as respostas das constantes no console.
}
initAsync(); // Executa a função.

//* > Promise.

// O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.
async function noAsyncResponse() {
  // Sem a promise o setTimeout não irá esperar/executar o await, sendo assim não faz sentido utilizar ele.
  await setTimeout(() => console.log("Depois de 1s"), 1000); // Após 1s executa o console.log contendo uma string.
  console.log("Acabou"); // Retorna um texto no console após 1s.
}
noAsyncResponse(); // Executa a função.

async function initAsync() {
  // Criado uma nova promise que tem o objeto Response nomeado como resolve.
  await new Promise((resolve) => {
    setTimeout(() => resolve, 1000); // Irá retornar o objeto Response depois de 1s.
  });
  console.log("Depois de 1s"); // Retorna um texto no console depois de 1s.
}
initAsync(); // Executa a função.
