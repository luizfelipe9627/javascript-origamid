//* > CEP.

const regexpCEP = /\d{5}[-\s]?\d{3}/g; // Armazena na constante regexpCEP um regexp que irá procurar por 5 dígitos seguido de um "-" ou espaço e mais 3 dígitos.

const ceps = ["00000-000", "00000 000", "00000000"]; // Criado uma constante chamada ceps armazenando uma array que contém propriedades do tipo string.

// O for of passa por cada item da array ceps executa o loop a cada passada e armazena o item atual na constante cep e assim vai sendo até não ter mais itens na array.
for (const cep of ceps) {
  console.log(cep, cep.match(regexpCEP)); // Mostra no console o cep atual armazenado na constante e mostra se deu match com o regexp criado para CEP.
}

//* > CPF.

const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g; // Armazena na constante regexpCPF um regexp que irá procurar por 3 dígitos seguido de um "-" ou "." e mais 3 dígitos seguido de um "-" ou "." e mais 3 dígitos seguido de um "-" ou "." e mais 2 dígitos.

// Criado uma constante chamada cpfs armazenando uma array que contém propriedades do tipo string.
const cpfs = [
  "000.000.000-00",
  "000-000-000-00",
  "000.000.000.00",
  "000000000-00",
  "00000000000",
];

// O for of passa por cada item da array cpfs executa o loop a cada passada e armazena o item atual na constante cpf e assim vai sendo até não ter mais itens na array.
for (const cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF)); // Mostra no console o cpf atual armazenado na constante e mostra se deu match com o regexp criado para CPF.
}

//* > CNPJ.

const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g; // Armazena na constante regexpCNPJ um regexp que irá procurar por 2 dígitos seguido de um "-" ou "." e mais 3 dígitos seguido de um "-" ou "." e mais 3 dígitos seguido de um "-" ou "." e mais 4 dígitos seguido de um "-" ou "/" e mais 2 dígitos.

// Criado uma constante chamada cnpjs armazenando uma array que contém propriedades do tipo string.
const cnpjs = [
  "00.000.000/0000-00",
  "00000000000000",
  "00-000-000-0000-00",
  "00.000.000/000000",
  "00.000.000.000000",
  "00.000.000.0000.00",
];

// O for of passa por cada item da array cnpjs executa o loop a cada passada e armazena o item atual na constante cnpj e assim vai sendo até não ter mais itens na array.
for (const cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ)); // Mostra no console o cnpj atual armazenado na constante e mostra se deu match com o regexp criado para CNPJ.
}

//* > Telefone.

const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g; // Armazena na constante regexpTELEFONE um regexp que irá procurar por 2 dígitos seguido de um "-" ou "." e mais 3 dígitos seguido de um "-" ou "." e mais 3 dígitos seguido de um "-" ou "." e mais 4 dígitos seguido de um "-" ou "/" e mais 2 dígitos.

// Criado uma constante chamada telefones armazenando uma array que contém propriedades do tipo string.
const telefones = [
  "+55 11 98888-8888",
  "+55 11 98888 8888",
  "+55 11 988888888",
  "+55 11988888888",
  "+5511988888888",
  "5511988888888",
  "11 98888-8888",
  "11 98888 8888",
  "(11) 98888 8888",
  "(11) 98888-8888",
  "11-98888-8888",
  "11 98888 8888",
  "11988888888",
  "11988888888",
  "988888888",
  "(11)988888888",
  "98888 8888",
  "8888 8888",
];

// O for of passa por cada item da array telefones executa o loop a cada passada e armazena o item atual na constante telefone e assim vai sendo até não ter mais itens na array.
for (const telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE)); // Mostra no console o telefone atual armazenado na constante e mostra se deu match com o regexp criado para telefone.
}

//* > Email.

const regexpEMAIL1 = /[\w.-]+@[\w-]+\.[\w-.]+/gi; // Armazena na constante regexpEMAIL1 um regexp que irá procurar por 1 ou mais caracteres alfanuméricos ou "-" ou "." ou "+" seguido de um "@" seguido de 1 ou mais caracteres alfanuméricos ou "-" seguido de um "." seguido de 1 ou mais caracteres alfanuméricos ou "-" ou ".".

// Criado uma constante chamada emails1 armazenando uma array que contém propriedades do tipo string.
const emails1 = [
  "email@email.com",
  "email@email.com.org",
  "email-email@email.com",
  "email_email@email.com",
  "email.email23@email.com.br",
  "email.email23@empresa-sua.com.br",
  "c@contato.cc",
];

// O for of passa por cada item da array emails1 executa o loop a cada passada e armazena o item atual na constante email e assim vai sendo até não ter mais itens na array.
for (const email of emails1) {
  console.log(email, email.match(regexpEMAIL1)); // Mostra no console o email atual armazenado na constante e mostra se deu match com o regexp criado para email.
}

//* > Tag.

const regexpTag1 = /<\/?[\w\s="']+\/?>/gi; // Armazena na constante regexpTAG um regexp que irá procurar por 1 ou mais caracteres alfanuméricos ou espaço ou "=" ou "'" seguido de um ">" ou "<" ou "/" ou ">".

// Criado uma constante chamada tags1 armazenando uma array que contém propriedades do tipo string.
const tags1 = [
  "<div>Isso é uma div</div>",
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  "<li>Essa está ativa</li>",
  "</ul>",
];

// O for of passa por cada item da array tags1 executa o loop a cada passada e armazena o item atual na constante email e assim vai sendo até não ter mais itens na array.
for (const tag of tags1) {
  console.log(tag, tag.match(regexpTag1)); // Mostra no console o tag atual armazenado na constante e mostra se deu match com o regexp criado para tag.
}

//* > Tag apenas o nome.

const regexpTag2 = /(?<=<\/?)[\w]+/gi; // Armazena na constante regexpTAG um regexp que irá procurar por 1 ou mais caracteres alfanuméricos que estejam entre "<" e ">".

// Criado uma constante chamada tags2 armazenando uma array que contém propriedades do tipo string.
const tags2 = [
  "<div>Isso é uma div</div>",
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  "<li>Essa está ativa</li>",
  "</ul>",
];

// O for of passa por cada item da array tags2 executa o loop a cada passada e armazena o item atual na constante tag e assim vai sendo até não ter mais itens na array.
for (const tag of tags2) {
  console.log(tag, tag.match(regexpTag2)); // Mostra no console a tag atual armazenado na constante e mostra se deu match com o regexp criado para tag.
}
