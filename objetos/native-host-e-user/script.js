//* > Objetos nativos(natives).

// Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host. Temos 4 tipos de construtores de objetos nativos do browser(pelo menos no chrome).
Object;
String;
Array;
Function;

//* > Objetos host.

// Objetos do host são aqueles implementados pelo próprio ambiente. Temos 3 tipos de objetos do browser(pelo menos no chrome).
NodeList;
HTMLCollection;
Element;

//* Objetos user.

// São os objetos que são criados por biblioteca, ou manualmente.
const Person = {
  firstname: "Luiz",
  lastname: "Silva",
};

//* > Verificar se existe o objeto ou não.

// Sabemos que o typeof retorna o tipo de dado, se esse dado não existir ou não estiver sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
if (typeof Array.from !== "undefined") {
  console.log("Esse objeto existe.");
} else {
  console.log("Esse objeto não existe.");
}

if (typeof NodeList !== "undefined") {
  console.log("Esse objeto existe.");
} else {
  console.log("Esse objeto não existe.");
}
