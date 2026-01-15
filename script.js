const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

["mouseover", "touchstart"].forEach(evt => {
  noBtn.addEventListener(evt, () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
});


yesBtn.addEventListener("click", () => {
  document.querySelector(".card").style.display = "none";
  document.getElementById("starMode").style.display = "flex";
});

const music = document.getElementById("music");

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });
