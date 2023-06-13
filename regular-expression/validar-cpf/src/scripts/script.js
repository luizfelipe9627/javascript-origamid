import ValidateCPF from "./modules/validar-cpf.js"; // Importando a classe.

const CPF = document.querySelector("#cpf"); // Seleciona o elemento com o id cpf e armazena na constante CPF.

const validateCPF = new ValidateCPF(CPF).init(); // Cria uma constante que recebe um novo objeto criado a partir da classe ValidateCPF e executa a função init.

const validateTest = new ValidateCPF(); // Cria uma constante que recebe um novo objeto criado a partir da classe validateCPF.
console.log(validateTest.validate("12345678900")); // Mostra no console através de um valor boolean se o CPF passado no parâmetro da função validate é válido ou não.
console.log(validateTest.format("11123482000")); // Mostra no console o CPF formatado através do retorno da função format que recebe como argumento o CPF.
console.log(validateTest.result("333-23 48 20.00")); // Mostra no console o CPF limpo e formatado através do retorno da função result que recebe como argumento o CPF.
console.log(validateTest.clean("423 948 212 09")); // Mostra no console o CPF limpo através do retorno da função clean que recebe como argumento o CPF.
