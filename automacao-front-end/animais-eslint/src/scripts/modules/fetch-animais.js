import initAnimaNumero from "./anima-numeros.js"; // O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.

// Função responsável por adicionar os nomes das espécies e total delas.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initFetchAnimais() {
  // Função responsável por criar as divs que contém as espécies e o total delas.
  function createAnimal(animal) {
    const div = document.createElement("div"); // Criado um elemento div e armazena na constante div.
    div.classList.add("numero-animal"); // Adiciona uma classe chamada numero-animal na div criada.
    // Está inserindo um código HTML no elemento div, que é passado cada especie no h3 e o total dela no span de cada uma das divs.
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;

    return div; // Retorna a div.
  }

  // A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
  async function fetchAnimais(url) {
    // O try é literalmente "tentar", caso tenha sucesso executa o seu bloco de comando.
    try {
      // O fetch faz a requisição do arquivo JSON(definido no parâmetro url) e quando tiver o status de ok(carregado com sucesso) armazena a Response nas constante animaisResponse.
      const animaisResponse = await fetch(url); // Armazena na constante animaisResponse a resposta do fetch somente quando a promise for resolvida(cumprida).
      const animaisJSON = await animaisResponse.json(); // O await está retornando na constante animaisJSON o resultado em formato JSON da promessa anterior cumprida.

      const numbersGrid = document.querySelector(".numeros-grid"); // Está puxando do DOM o primeiro elemento que contém a classe numeros-grid e armazenando na constante numbersGrid.

      // O forEach passa por cada item do animaisJSON e armazena no parâmetro chamada animal, o item atual.
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal); // Executa a função várias vezes e passa como parâmetro o item atual do forEach e assim vai sendo até não tiver mais nada para o forEach percorrer.

        numbersGrid.appendChild(divAnimal); // Adiciona as divs como filhos do elemento numbersGrid.
      });

      initAnimaNumero(); // Executa a função que anima os números.
    } catch (erro) {
      // Caso ocorra qualquer erro no código acima o bloco do catch é executado.
      console.log(Error(erro)); // Retorna um erro no console.
    }
  }

  // Está executando a função e passando como parâmetro a URL do arquivo json.
  fetchAnimais("https://luizfelipe9627.github.io/apis/animais.json");
}
