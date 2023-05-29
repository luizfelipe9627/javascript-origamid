//* Protocolo HTTP

// Hypertext Transfer Protocol é o protocolo utilizando para enviarmos/recebermos arquivos e dados na Web, temos como exemplo uma api, que pode ser usada para enviar dados.
fetch("https://pokeapi.co/api/v2/pokemon/")
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => response.json())
  // No parâmetro pokemon é colocado como valor o retorno do then anterior(no caso a JSON da API).
  .then((pokemon) => {
    console.log(pokemon); // Mostra no console a API em formato JSON.
  });

//* Url e Method.

// Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

const url1 = "https://jsonplaceholder.typicode.com/posts"; // A api armazenada na constante url está fazendo uma requisição HTTP.
const options = {
  method: "POST", // Tipo de método usado para criar/inserir uma informação nova.
  body: '{"aula": "JavaScript"}', // Corpo do POST, que é os dados que estão sendo enviados, tem que seguir o formato JSON.
  headers: {
    "Content-Type": "application/json; charset=utf-8", // Está definindo o tipo de conteúdo que está sendo enviado como JSON no charset PT-BR(usado para caracteres, acentos do BR etc.)
  },
};

// O fetch está recebendo dois parâmetros, a url e o método a ser usado. O method post não necessita de then, a não ser que queira ver a resposta enviada ao servidor.
fetch(url1, options);

//* Método GET.

// O fetch está recebendo dois parâmetros, a url e o método a ser usado através de um objeto.
fetch(url1, {
  // O método GET irá puxar as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão.
  method: "GET", // O method é usado para definir o tipo de método a ser utilizado.
})
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.json();
  })
  // No parâmetro JSON é colocado como valor o retorno do then anterior(no caso a JSON).
  .then((json) => {
    console.log(json); // Irá mostrar no console o que seria enviado no servidor dessa API conforme seu método.
  });

//* Método POST.

// O fetch está recebendo dois parâmetros, a url e o método a ser usado através de um objeto. O method post não necessita de then, a não ser que queira ver a resposta que foi enviada ao servidor.
fetch(url1, {
  // O método POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body.
  method: "POST", // O method é usado para definir o tipo de método a ser utilizado.
  body: '{"title": "JavaScript"}', // Corpo do POST, que é os dados que estão sendo enviados, tem que seguir o formato JSON.
  headers: {
    "Content-Type": "application/json; charset=utf-8", // Está definindo o tipo de conteúdo que está sendo enviado como JSON no charset PT-BR(usado para caracteres, acentos do BR etc.)
  },
})
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.json();
  })
  // No parâmetro JSON é colocado como valor o retorno do then anterior(no caso a JSON).
  .then((json) => {
    console.log(json); // Irá mostrar no console o que seria enviado no servidor dessa API conforme seu método.
  });

//* > Método PUT.

const url2 = "https://jsonplaceholder.typicode.com/posts/2";
// O fetch está recebendo dois parâmetros, a url e o método a ser usado através de um objeto.
fetch(url2, {
  // O método PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.
  method: "PUT", // O method é usado para definir o tipo de método a ser utilizado.
  body: '{"title": "React"}', // Corpo do POST, que é os dados que estão sendo enviados, tem que seguir o formato JSON.
  headers: {
    "Content-Type": "application/json; charset=utf-8", // Está definindo o tipo de conteúdo que está sendo enviado como JSON no charset PT-BR(usado para caracteres, acentos do BR etc.)
  },
})
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.json();
  })
  // No parâmetro JSON é colocado como valor o retorno do then anterior(no caso a JSON).
  .then((json) => {
    console.log(json); // Irá mostrar no console o que seria enviado no servidor dessa API conforme seu método.
  });

//* > HEAD.

// O fetch está recebendo dois parâmetros, a url e o método a ser usado através de um objeto.
fetch(url2, {
  // O HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body.
  method: "HEAD", // O method é usado para definir o tipo de método a ser utilizado.
})
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    response.headers.forEach(console.log); // Está acessando a propriedade headers do objeto Response, e passando por cada elemento do headers através do forEach, e por fim o forEach retorna essa iteração no console.

    console.log(response.headers.get("Content-Type")); // Através do objeto Response acessa o headers e executa a função get que obtém e retorna algo, nesse caso o Content-Type(tipo de conteúdo) do objeto Response e mostra no console.
  });
