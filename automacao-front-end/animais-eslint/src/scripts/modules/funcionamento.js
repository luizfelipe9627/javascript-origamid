// Função responsável por aplicar o horário e dias de funcionamento.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]"); // Está puxando do DOM o elemento dataset definido no HTML para serem usamos no JS.
  
  // Para evitar dar erro primeiro o if verifica se o elemento existe na página, se existir ele torna as funções e métodos criados existentes.
  if (funcionamento) {
    const diasSemana = funcionamento.dataset.semana.split(",").map(Number); // Pega os valores definidos no dataset semana e transforma em uma array, em seguida o map transforma os valores em number.]
    const horariosSemana = funcionamento.dataset.horario.split(",").map(Number); // Pega os valores definidos no dataset horario e transforma em uma array, em seguida o map transforma os valores em number.

    const dataAgora = new Date(); // Criado uma nova data que é baseada no horário interno do computador.
    const diaAgora = dataAgora.getDay(); // Pega a data atual e filtra o dia.
    const horarioAgora = dataAgora.getHours(); // Pega a data atual e filtra a hora.

    const semanaAberta = diasSemana.indexOf(diaAgora) !== -1; // Verifica se na array diasSemana existe o número da semana presente dentro do diaAgora, se existir ele retorna o número(true), se não ele irá retornar -1(false).
    const horarioAberto =
      horarioAgora >= horariosSemana[0] && horarioAgora < horariosSemana[1]; // Verifica se o horário do computador for maior ou igual ao primeiro horario(8) da array horariosSemana e se o hórario do computador for menor que segundo horario(18).

    // Se semanaAberta e horarioAberto for true executa o if.
    if (semanaAberta && horarioAberto) {
      funcionamento.classList.add("aberto");
    } else {
      funcionamento.classList.add("fechado");
    }
  }
}
