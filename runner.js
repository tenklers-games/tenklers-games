const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.focus();

// OYUNCU
let y = 300;
let vy = 0;

// SKOR
let score = 0;

// OYUN DÖNGÜSÜ
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // yerçekimi
  vy += 0.5;
  y += vy;

  if (y > 300) {
    y = 300;
    vy = 0;
  }

  // karakter
  ctx.fillStyle = "cyan";
  ctx.fillRect(130, y, 40, 40);

  // skor yazısı
  score++;
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Skor: " + score, 10, 20);

  requestAnimationFrame(loop);
}

loop();

// ZIPLAMA
canvas.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    vy = -10;
  }
});
