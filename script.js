// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 3000);

});


// =========================
// TYPING EFFECT
// =========================

const message = "Dear USHMA PAL ✨";

let index = 0;

function typeWriter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,120);

    }

}

setTimeout(typeWriter,3200);


// =========================
// CREATE STARS
// =========================

for(let i=0;i<180;i++){

    let star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    document.body.appendChild(star);

}


// =========================
// SHOOTING STAR
// =========================

let shooting=document.createElement("div");

shooting.className="shooting-star";

document.body.appendChild(shooting);
// =========================
// GIFT CLICK
// =========================

document.getElementById("gift").addEventListener("click", function () {

    // MUSIC
    const music = document.getElementById("bgMusic");

    if (music) {
        music.currentTime = 0;
        music.play().catch(err => console.log(err));
    }

    // HIDE MAIN SCREEN
    document.getElementById("main").style.display = "none";

    // SHOW BIRTHDAY SCREEN
    document.getElementById("birthday").style.display = "block";

    // SPARKLES
    const icons = ["✨","⭐","🌟","💫"];

    for(let i=0;i<150;i++){

        let spark=document.createElement("div");

        spark.className="sparkle";

        spark.innerHTML=icons[Math.floor(Math.random()*icons.length)];

        spark.style.left=Math.random()*100+"vw";

        spark.style.bottom="-40px";

        spark.style.fontSize=(18+Math.random()*28)+"px";

        spark.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(spark);

    }

});
// =========================
// FIREWORKS + BALLOONS
// =========================

// Balloons
const balloonColors = [
"#ff4d4d",
"#4da6ff",
"#66ff66",
"#ffff66",
"#ff66ff",
"#ffa64d"
];

function createBalloon(){

    const b = document.createElement("div");

    b.innerHTML = "🎈";

    b.style.position = "fixed";

    b.style.left = Math.random()*100+"vw";

    b.style.bottom = "-80px";

    b.style.fontSize = (35+Math.random()*30)+"px";

    b.style.transition = "transform 12s linear";

    document.body.appendChild(b);

    setTimeout(()=>{

        b.style.transform =
        `translateY(-120vh)
         translateX(${Math.random()*200-100}px)`;

    },100);

    setTimeout(()=>{

        b.remove();

    },12000);

}

// Fireworks
const fireworks = ["🎆","✨","💥","🌟","⭐"];

function fireworkBlast(){

    for(let i=0;i<30;i++){

        let f=document.createElement("div");

        f.innerHTML =
        fireworks[Math.floor(Math.random()*fireworks.length)];

        f.style.position="fixed";

        f.style.left=(40+Math.random()*20)+"vw";

        f.style.top=(20+Math.random()*40)+"vh";

        f.style.fontSize=(25+Math.random()*25)+"px";

        f.style.pointerEvents="none";

        f.style.transition="all 2s ease-out";

        document.body.appendChild(f);

        setTimeout(()=>{

            f.style.left=Math.random()*100+"vw";

            f.style.top=Math.random()*100+"vh";

            f.style.opacity="0";

            f.style.transform=
            `scale(${2+Math.random()*2})
             rotate(${Math.random()*360}deg)`;

        },50);

        setTimeout(()=>{

            f.remove();

        },2200);

    }

}

// Start celebration after gift click
document.getElementById("gift").addEventListener("click",()=>{

    // Balloons
    for(let i=0;i<20;i++){

        setTimeout(createBalloon,i*400);

    }

    // Fireworks
    fireworkBlast();

    setInterval(fireworkBlast,4000);

});