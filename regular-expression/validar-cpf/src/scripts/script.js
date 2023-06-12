import ValidateCPF from "./modules/validar-cpf.js"; // Importando a classe.

const CPF = document.querySelector("#cpf"); // Seleciona o elemento com o id cpf e armazena na constante CPF.
const validateCPF = new ValidateCPF(CPF).init(); // Cria uma constante que recebe um novo objeto criado a partir da classe ValidateCPF e executa a função init.

