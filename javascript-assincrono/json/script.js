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

//* > Método JSON.parse.

const textJSON = '{"id": 1, "title": "JavaScript", "time": "25min"}'; // Criado uma string chamada textJSON em formato JSON.

// O método JSON.parse irá transformar um texto JSON em um objeto JavaScript
const textObject = JSON.parse(textJSON); // Armazena na constante textObject um JSON(em texto/string) que está sendo transformado pelo parse em um objeto.
console.log(textObject); // Mostra o objeto no console.

//* > Método JSON.stringify.

// Criado um objeto chamado addressObject que contém 4 propriedades.
const addressObject = {
  cidade: "São Paulo",
  rua: "Ali Perto",
  pais: "Brasil",
  numero: 190,
};

// O método JSON.stringify irá transformar um objeto JavaScript em uma string no formato JSON.
const addressJSON = JSON.stringify(addressObject); // Transforma o objeto addressObject em uma string com o formato JSON e armazena na constante stringConfigs.
console.log(addressJSON); // Mostra a string no console.

//* > Exemplo real.

// Criado um objeto chamado configs que contém 3 propriedades.
const configs = {
  player: "Google",
  time: 25.5,
  course: "2.1 - Javascript",
};

localStorage.config = JSON.stringify(configs); // Cria e armazena no localStorage uma nova propriedade chamada config que recebe como seu valor a transformação de um objeto para uma string que segue o formato JSON.
console.log(localStorage.config); // Puxa os valores armazenados no localStorage e mostra no console.

const pullConfigsJSON = JSON.parse(localStorage.config); // Criado uma constante chamada ... que converte o texto de formato JSON presente no valor da propriedade config do localStorage em um objeto normal novamente.
console.log(pullConfigsJSON); // Mostra no console o objeto.
