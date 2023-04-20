// Liste 5 objetos nativos.
Object;
Array;
Number;
String;
Function;

// Liste 5 objetos do browser.
Window;
Document;
HTMLCollection;
NodeList;
Element;

// Liste 2 métodos, propriedades ou objetos presentes no Chrome que não existem no Firefox.
if (typeof document.webkitHidden !== "undefined") {
  console.log("Esse objeto existe.");
} else {
  console.log("Esse objeto não existe.");
}

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Esse objeto existe.");
} else {
  console.log("Esse objeto não existe.");
}
