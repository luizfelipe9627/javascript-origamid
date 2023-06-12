const CPFsList = document.querySelectorAll(".cpf li"); // Seleciona todos os elementos li dentro do elemento com a classe cpf e retorna um NodeList na constante cpfs.

// Cria uma function express que recebe a desestruturação(cada elemento) de uma array como argumento que está sendo chamado de elements.
const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText); // Retorna uma array com o innerText de cada elemento.
};

// Cria uma function express responsável por limpar o CPF e que recebe um CPF como argumento.
const cleanCPF = (CPF) => {
  return CPF.replace(/\D/g, ""); // O replace substitui todos os caracteres não numéricos por uma string vazia e retorna o resultado.
};

// Cria uma function express responsável por formatar o CPF e que recebe um CPF como argumento.
const formatCPF = (CPF) => {
  return CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4"); // O replace seleciona todos os grupos de 3 dígitos e 2 dígitos e substitui os grupos de 3 por "." e o grupo de 2 por "-" e retorna o resultado.
};

// Cria uma function express responsável por formatar uma array de CPFsList e que recebe uma array de CPFs como argumento.
const formatArraytoCPF = (CPFs) => {
  return CPFs.map(cleanCPF).map(formatCPF); // Retorna uma array com os CPFsList limpos e formatados.
};

const replaceCPF = (CPFElements) => {
  const CPFs = elementsInnerText(CPFElements); // Cria uma constante CPFs que recebe o retorno da function elementsInnerText que recebe como argumento a array de elementos li.

  const CPFsFormated = formatArraytoCPF(CPFs); // Cria uma constante CPFsFormated que recebe o retorno da function formatArraytoCPF que recebe como argumento a array de CPFs.

  // Percorre cada elemento da array CPFElements.
  CPFElements.forEach((element, index) => {
    element.innerText = CPFsFormated[index]; // Substitui o innerText de cada elemento pelo CPFsFormated na posição index.
  });
};

replaceCPF(CPFsList); // Chama a function replaceCPF que recebe como argumento a array de CPFsList.
