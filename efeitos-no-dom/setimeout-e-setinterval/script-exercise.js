// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function changeClass() {
  document.body.classList.toggle("red");
}
// setInterval(changeClass, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let time = document.querySelector(".time");

play.addEventListener("click", playTime);
pause.addEventListener("click", pauseTime);
pause.addEventListener("dblclick", resetTime);

let i = 0;
let timer;

function playTime() {
  timer = setInterval(() => {
    time.innerText = i++;
  }, 100);
  play.setAttribute("disabled", ""); // Está desabilitando o botão.
}

function pauseTime() {
  clearInterval(timer);
  play.removeAttribute("disabled", ""); // Está ativando o botão novamente.
}

function resetTime() {
  i = 0;
  time.innerText = 0;
}
