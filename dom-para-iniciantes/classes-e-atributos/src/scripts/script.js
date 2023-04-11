// * Classes e manipulação de classes.

const menu = document.querySelector(".menu"); // Está puxando do DOM o elemento com a classe menu.
console.log(menu);

const menuClass = menu.classList; // O classList é uma propriedade responsável por mostrar as classes do elemento.
console.log(menuClass);

menu.classList.add("ativo", "desativado"); // O add é um método usado para adicionar novas classes no elemento.
console.log(menu);

menu.classList.remove("desativado"); // O remove é um método usado para remover classes do elemento.
console.log(menu);

menu.classList.toggle("ativo"); // O toggle cria uma classe caso ela não exista e caso existir ela remove.
console.log(menu);

// O contains serve para dizer através de um valor boolean se existe tal classe ou não no elemento.
if (menu.classList.contains("menu")) {
  menu.classList.add("contem"); // O add é um método usado para adicionar novas classes no elemento.
  console.log(menu);
} else {
  menu.classList.add("nao-contem"); // O add é um método usado para adicionar novas classes no elemento.
  console.log(menu);
}

menu.className += " teste"; // O className é usado para retornar as classes do elemento, mas quando quer manter as classes atuais e concatenar/adicionando uma nova classe) podemos utilizar o "+=".
console.log(menu);

// * Atributos e manipulação de atributos.

const animals = document.querySelector(".animais");

const animalsAttributes = animals.attributes; // O attributes é responsável por mostrar os atributos do elemento, retorna uma Array like.
console.log(animalsAttributes);
console.log(animalsAttributes[0]); // Retorna o primeiro atributo.

const img = document.querySelector("img"); // o querySelector é usado para puxar um elemento do DOM.

const getAttribute = img.getAttribute("src"); // O getAttribute é um método usado para puxar um atributo, nesse caso o src.
console.log(getAttribute);

const setAttribute = img.setAttribute("alt", "Texto Alternativo"); // O setAttribute é um método usado para mudar o atributo, nesse caso está alterando o alt mas pode ser qualquer outro atributo HTML.
console.log(img);

const hasAttribute = img.hasAttribute("id"); // O hasAttribute é usado para dizer através de valor boolean se existe um atributo igual no elemento.
console.log(hasAttribute);

// const removeAttribute = img.removeAttribute("alt"); // O removeAttribute é usado para remover atributos, nesse caso o alt.
// console.log(removeAttribute);

const hasAttributes = img.hasAttributes(); // O hasAttributes é usado para dizer através de valor boolean se existe qualquer atributo no elemento.
console.log(hasAttributes);

// * Somente leitura vs Gravável.

const className = animals.className; // Retorna uma string contendo os nome das classes.
console.log(className);

const classReadOnly = animals.className = 'azul'; // Substitui completamente a string.
console.log(classReadOnly);

const classWritable = animals.className += ' vermelho'; // Adiciona vermelho à string.
console.log(classWritable);

animals.attributes = 'class="ativo"'; // Não funciona, read-only.