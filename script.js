// Loader
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 3000);

// Typing Effect
const text = "Dear USHMA PAL ✨";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 120);
  }
}

setTimeout(type, 3200);

// Stars Background
for (let i = 0; i < 180; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.animationDelay = Math.random() * 3 + "s";
  document.body.appendChild(star);
}

// Gift Click
const music = document.getElementById("bgMusic");
music.play().catch(() => {
  console.log("Music will start after user interaction.");
});
document.getElementById("gift").onclick = function () {

  document.getElementById("container").style.display = "none";

  document.getElementById("birthday").style.display = "block";

  let icons = ["✨","⭐","🌟","💫"];

  for (let i = 0; i < 150; i++) {

    let s = document.createElement("div");

    s.className = "sparkle";

    s.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    s.style.left = Math.random()*100+"vw";

    s.style.bottom = "-50px";

    s.style.fontSize = (20+Math.random()*25)+"px";

    s.style.animationDuration=(3+Math.random()*4)+"s";

    document.body.appendChild(s);

  }

};