let score = 0;
let timer;

function openGame() {
  document.getElementById("gameArea").classList.remove("hidden");
  score = 0;
  document.getElementById("score").innerText = score;

  timer = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
  }, 1000);
}

function closeGame() {
  document.getElementById("gameArea").classList.add("hidden");
  clearInterval(timer);
}
