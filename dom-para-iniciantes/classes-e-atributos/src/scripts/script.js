const menu = document.querySelector('.menu'); // Está puxando do DOM o elemento com a classe menu.
console.log(menu);

const menuClass = menu.classList; // O classList é uma propriedade responsável por mostrar as classes do elemento.
console.log(menuClass);

menu.classList.add('ativo', 'desativado'); // O add é um método usado para adicionar novas classes no elemento.
console.log(menu);

menu.classList.remove('desativado'); // O remove é um método usado para remover classes do elemento.
console.log(menu);

menu.classList.toggle('ativo') // O toggle cria uma classe caso ela não exista e caso existir ela remove.
console.log(menu)

if(menu.classList.contains('menu')) {
  menu.classList.add('contem'); // O add é um método usado para adicionar novas classes no elemento.
  console.log(menu);
} else {
  menu.classList.add('nao-contem'); // O add é um método usado para adicionar novas classes no elemento.
  console.log(menu);
}