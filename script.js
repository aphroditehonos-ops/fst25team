
const text = document.querySelector(".text-container");
const tents = document.querySelector(".tents");

const engine = document.getElementById("engine");
const rainSound = document.getElementById("rainSound");

engine.volume = 0.6;
rainSound.volume = 0.3;

engine.play();
rainSound.play();

setTimeout(() => {
  text.classList.add("show-text");
}, 1800);

setTimeout(() => {
  tents.classList.add("show-tents");
}, 3500);

/* YAĞMUR */
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];
for (let i = 0; i < 300; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 4 + Math.random() * 4,
    length: 10 + Math.random() * 20
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255,255,255,0.4)";
  ctx.lineWidth = 1;

  drops.forEach(d => {
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
    ctx.stroke();

    d.y += d.speed;
    if (d.y > canvas.height) {
      d.y = -20;
      d.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawRain);
}

drawRain();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
