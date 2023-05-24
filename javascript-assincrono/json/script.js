//* > Método e formato JSON.

// O fetch faz a requisição no arquivo JSON criado e quando tiver o status de ok(carregado com sucesso) o then executa.
fetch("./dados.json")
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.json(); // Retorna uma promise que tem como PromiseResult a transformação para JSON(objeto).
  })
  // O then está acessando o resultado do then anterior(no caso o json retornado) e aplicando ao parâmetro json criado.
  .then((json) => {
    console.log(json); // Mostra todo o JSON no console.
    console.log(json[1]); // Como é um objeto podemos acessar cada propriedade pelo index.
    console.log(json[0].time); // Também podemos acessar o elemento dentro.

    // O forEach está sendo usado para passar por cada objeto da array e retornar eles.
    json.forEach((courses) => {
      console.log(courses); // Mostra o objeto presente no arquivo JSON no console.
      console.log(courses.course); // Ou como mostrado anteriormente, filtrar pelo nome da propriedade.
    });
  });

//* > Método JSON.parse e JSON.stringiy.

// O fetch faz a requisição no arquivo JSON criado e quando tiver o status de ok(carregado com sucesso) o then executa.
fetch("./dados.json")
  // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
  .then((response) => {
    return response.text(); // Retorna uma promise que tem como PromiseResult a transformação do que tem no arquivo dados.json para texto(string).
  })
  // O then está acessando o resultado do then anterior(no caso o json retornado) e aplicando ao parâmetro json criado.
  .then((jsonText) => {
    // O método JSON.parse irá transformar um texto JSON em um objeto JavaScript.
    const jsonParse = JSON.parse(jsonText); // Armazena na constante jsonParse um JSON(em texto/string) que está sendo transformado pelo parse em um arquivo JSON.
    console.log(jsonParse); // Mostra o arquivo em formato JSON no console.
  });

// Já o método JSON.stringify irá transformar um objeto JavaScript em uma string no formato JSON.
const configurations = {
  player: "Google",
  time: 25.5,
  course: "2.1 - Javascript",
};
