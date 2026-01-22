const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 130;
let y = 300;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 40, 40);

  requestAnimationFrame(draw);
}

draw();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;
});
