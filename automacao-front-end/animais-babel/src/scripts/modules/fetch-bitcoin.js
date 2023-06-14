// Função responsável por retornar o valor atual do BTC através de uma API.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initFetchBitcoin() {
  // O fetch faz a requisição para a API e quando tiver o status de ok(carregado com sucesso) o then executa.
  fetch("https://blockchain.info/ticker")
    // O parâmetro response é um objeto que possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado response métodos do protótipo do objeto Response. Estes retornam outras promises.
    .then((response) => response.json()) // Retorna uma promise que tem como PromiseResult a transformação para JSON(objeto) da API.
    
    // O then está acessando o resultado do then anterior(no caso o JSON) e aplicando ao parâmetro bitcoin criado.
    .then((bitcoin) => {
      const btc = document.querySelector(".btc-preco"); // Está puxando do DOM o primeiro elemento que contém a classe btc-preco e armazenando na constante btc.

      btc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4); // Pega o elemento btc e bota como conteúdo o preço de venda do bitcoin extraído da API, dividido por 1000 para retornar 1000 reais em bitcoin. O toFixed vai fazer mostrar 4 casas decimais após a virgula/ponto.
    })
    // Caso ocorra qualquer erro no código acima o bloco do catch é executado.
    .catch((erro) => {
      console.log(Error(erro)); // Retorna um erro no console.
    });
}
