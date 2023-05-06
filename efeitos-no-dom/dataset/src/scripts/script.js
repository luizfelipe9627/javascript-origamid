//* > Introdução ao HTMLElement.

// Qualquer elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.
const div = document.querySelector("div"); // Está puxando do DOM o primeiro elemento DIV encontrado.
console.log(Object.prototype.toString.call(div)); // Retorna o tipo de dado de protótipo no console, no caso [object HTMLHeadingElement].

//* > Propriedade dataset.

// A propriedade dataset é um HTMLElement, essa propriedade é um objeto do tipo DOMStringMap.
// Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.
console.log(div.dataset); // Retorna no console um objeto chamado DOMStringMap contendo os nomes cortados do data- definido no arquivo HTML. Então fica o nome da propriedade e o valor.

//* > Acessar e modificar dataset.

console.log(div.dataset.color); // Retorna Blue no console que é propriedade acessada diretamente do objeto chamado DOMStringMap.

div.dataset.height = 1000; // Definido um novo valor ao dataset div.

delete div.dataset.width; // Delete o elemento width presente dentro do div dataset.

console.log(div.dataset); // Retorna no console o dataset do div com o elemento height adicionado e o width removido.

//* > Seleção de elementos pelo atributo dataset.

const divDataCor = document.querySelector("[data-color]"); // Podemos selecionar um elemento passando apenas o data e o nome atribuído a ele.
console.log(divDataCor);

const divDataCorBlue = document.querySelector('[data-color="blue"]'); // Ou para ser mais especifico pode passar a data, o nome atribuído e seu valor.
console.log(divDataCorBlue);

//* > Data atributes.

const divsDataAnima = document.querySelectorAll("[data-anima]"); // Cria uma NodeList que puxa do DOM todos os elemento que possuem o dataset nomeado como anima.

// o forEach percorre por cada item da nodeList.
divsDataAnima.forEach((div) => {
  // Adiciona em cada div uma classe com o mesmo nome que o valor de data.
  return div.classList.add(div.dataset.anima);
});
console.log(divsDataAnima); // Retorna no console a NodeList com a mesma classe que o definido como valor no data-anima.

//* > Nomenclatura.

// Por padrão o JavaScript não aceita - (traço) como caractere válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

const divAnimaScroll = document.querySelector("[data-anima-scroll]"); // Está puxando do DOM o primeiro elemento DIV com a o dataset anima-scroll encontrado.

console.log(divAnimaScroll.dataset); // Retorna {animaScroll: 'left'} no console.

console.log(divAnimaScroll.dataset.animaScroll); // Retorna left no console que é o valor definido no dataset animaScroll.

divAnimaScroll.dataset.totalTime = 1000; // Na divAnimaScroll adiciona o dataset data-total-time="1000".
console.log(divAnimaScroll.dataset); // Retorna o dataset no console com o totalTime adicionado.

delete divAnimaScroll.dataset.animaScroll; // Remove o atributo animaScroll criado no dataset.
console.log(divAnimaScroll.dataset); // Retorna o dataset no console com o animaScroll deletado.
