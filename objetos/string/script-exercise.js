// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de recebimento.
const transacoes1 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes1.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.startsWith("Taxa")) {
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo.
const transportes1 = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes1.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's.
const html = `<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
</ul>`;
const htmlArray = html.split("span");
const htmlNew = htmlArray.join("a");
console.log(htmlNew);

// Retorne o último caractere da frase.
const frase = "Melhor do ano!";
const ultimoCaractere = frase.slice(-1);
console.log(ultimoCaractere);

// Retorne o total de taxas.
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let contadorTaxas = 0;
transacoes2.forEach((item) => {
  const stringLimpa = item.trim().toLowerCase();
  if (stringLimpa.startsWith("taxa")) {
    contadorTaxas++;
  }
});
console.log(contadorTaxas);
