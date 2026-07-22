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