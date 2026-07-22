// Typing Effect
const text = "Dear USHMA PAL ✨";
let i = 0;
const typing = document.getElementById("typing");

function typeText() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 120);
  }
}

setTimeout(typeText, 3200);

// Create Stars
for (let s = 0; s < 120; s++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 2 + "s";
  document.body.appendChild(star);
}

// Gift Click
const gift = document.getElementById("gift");

gift.addEventListener("click", () => {

  document.getElementById("container").style.display = "none";
  document.getElementById("birthday").style.display = "block";

  const icons = ["✨", "⭐", "🌟", "💫"];

  for (let k = 0; k < 80; k++) {

    let sp = document.createElement("div");
    sp.className = "sparkle";
    sp.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    sp.style.left = Math.random() * 100 + "vw";
    sp.style.bottom = "-20px";
    sp.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(sp);
  }

});