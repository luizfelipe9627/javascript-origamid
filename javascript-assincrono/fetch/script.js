//* > Método fetch.

// O método fetch permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.
const doc = fetch("./doc.txt"); // Criado uma constante chamada doc que armazena e puxa as infos do doc.txt.
console.log(doc); // Retorna uma promise que tem como resultado o diretório do doc.txt.

//* > Método fetch com then.

doc
  // O then é um método que sempre fica monitorando a promise até ela ter sucesso e enviando o resultado para o callback(parâmetro do método) da arrow function. O argumento do callback será o valor passado na função resolve.
  .then((resolution) => {
    // O parâmetro resolution é um objeto response que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.
    return resolution.text(); // Retorna uma promise que tem como PromiseResult o texto dentro do doc.txt.
  })
  // O then está acessando o resultado do then anterior(no caso o texto do doc.txt) e aplicando ao parâmetro body criado.
  .then((body) => {
    const divContent1 = document.querySelector(".content1"); // Está puxando o primeiro elemento no DOM que contém a classe content e armazenando na constante divContent1.
    divContent1.innerText = body; // Está atribuindo ao HTML do divContent1 o texto presente no parâmetro body.
  });

//* > Formato e método JSON.

const cep = fetch("https://viacep.com.br/ws/05872070/json/"); // Criado uma constante chamada cep que armazena as infos de um cep passado através de uma api.

// O fetch faz a requisição para a api de cep e quando tiver o status de ok(carregado com sucesso) o then executa.
cep
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.json(); // Retorna uma promise que tem como PromiseResult a transformação para JSON(objeto) da api cep.
  })
  // O then está acessando o resultado do then anterior(no caso o JSON) e aplicando ao parâmetro body criado.
  .then((body) => {
    const divContent2 = document.querySelector(".content2"); // Está puxando o primeiro elemento no DOM que contém a classe content2 e armazenando na constante divContent2.

    console.log(body); // Mostra no console as infos do CEP no formato JSON(objeto).
    console.log(body.bairro); // Mostra no console a propriedade bairro filtrada.

    divContent2.innerText = body.logradouro; // Está atribuindo ao HTML do divContent2 o texto presente no parâmetro body e filtrando para aparecer somente o logradouro.
  });

//* > Método text.

const css = fetch("./style.css"); // Criado uma constante chamada css que armazena as infos do arquivo style.css.

// O fetch faz a requisição no arquivo CSS passado e quando tiver o status de ok(carregado com sucesso) o then executa.
css
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.text(); // O text é usado para transformar ou extrair um texto, podemos utilizar para diferentes formatos como txt, json, html, css, js e mais.
  })
  // O then está acessando o resultado do then anterior(no caso o texto retornado) e aplicando ao parâmetro body criado.
  .then((body) => {
    const divContent3 = document.querySelector(".content3"); // Está puxando o primeiro elemento no DOM que contém a classe content3 e armazenando na constante divContent3.

    const styleElement = document.createElement("style"); // Criado uma constante chamada styleElement que está armazenando um elemento(tag) style.

    styleElement.innerHTML = body; // Está pegando o elemento criado(styleElement) e adicionando no HTML o conteúdo presente dentro do parâmetro style.

    divContent3.appendChild(styleElement); // Está adicionando/injetando o styleElement(código dentro do arquivo CSS) como filho(colocando dentro) do divContent3.
  });

//* > HTML e método text.

// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.

const about = fetch("./sobre.html"); // Criado uma constante chamada css que armazena as infos do arquivo sobre.html.

const div = document.createElement("div"); // Criado uma constante chamada div que está armazenando um elemento(tag) div.

// O fetch faz a requisição no arquivo CSS passado e quando tiver o status de ok(carregado com sucesso) o then executa.
about
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.text(); // Retorna uma promise que tem como PromiseResult o texto dentro do about.html.
  })
  // O then está acessando o resultado do then anterior(no caso o texto retornado) e aplicando ao parâmetro body criado.
  .then((body) => {
    div.innerHTML = body; // Está injetando na div todo o conteúdo do arquivo about.html presente no body.

    const title = div.querySelector("h1"); // Como o HTML todo está na constante div podemos puxar elementos através dela, nesse caso está sendo puxado o primeiro H1 encontra no DOM e depois armazena na constante title.

    console.log(title); // Mostra no console o elemento H1 puxado.
  });

//* > Método blob.

// O método blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.
