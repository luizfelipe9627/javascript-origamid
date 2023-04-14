// Duplique o menu e adicione ele em copy.
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copyright");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq.
const faq = document.querySelector(".faq");
const firstDT = faq.querySelector("dt");
console.log(firstDT);

// Selecione o DD referente ao primeiro DT.
const firstDD = firstDT.nextElementSibling;
console.log(firstDD);

// Substitua o conteúdo html de .faq pelo de .animais.
const animals = document.querySelector(".animais");
faq.innerHTML = animals.innerHTML;
