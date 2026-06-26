/* =====================================================
   Forever With You
   Premium Romantic Website
   script.js - Part 1
===================================================== */

// ============================
// Element
// ============================

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");

const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");

const letter = document.querySelector(".letter");

const topBtn = document.getElementById("topBtn");

const loader = document.getElementById("loader");

const cursor = document.getElementById("cursorGlow");

// ============================
// Loader
// ============================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },1800);

});

// ============================
// Open My Heart
// ============================

openBtn.addEventListener("click",()=>{

    opening.style.opacity="0";

    opening.style.transform="scale(1.05)";

    setTimeout(()=>{

        opening.style.display="none";

        document
        .getElementById("hero")
        .scrollIntoView({
            behavior:"smooth"
        });

    },900);

});

// ============================
// Music Player
// ============================

let playing=false;

playBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playBtn.innerHTML="❚❚";

        playing=true;

    }else{

        music.pause();

        playBtn.innerHTML="♡";

        playing=false;

    }

});

// ketika lagu selesai

music.addEventListener("ended",()=>{

    playBtn.innerHTML="♡";

    playing=false;

});

// ============================
// Love Letter
// ============================

letter.addEventListener("click",()=>{

    letter.classList.toggle("open");

});
// =====================================================
// Part 2
// Gallery Lightbox
// Scroll Animation
// Scroll To Top
// Cursor Glow
// =====================================================

// ============================
// Gallery Lightbox
// ============================

const photos = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=photo.src;

        document.body.style.overflow="hidden";

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

    document.body.style.overflow="";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

        document.body.style.overflow="";

    }

});

// ============================
// Scroll Animation
// ============================

const fadeItems=document.querySelectorAll(

".opening-card,.hero-content,.letter,.photo-card,.quote-box,.timeline-item,.ending-card,.footer-content"

);

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

fadeItems.forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});

// ============================
// Scroll To Top
// ============================

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ============================
// Cursor Glow
// ============================

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});
// =====================================================
// Part 3
// Premium Effects
// =====================================================

// ============================
// Floating Hearts
// ============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["🤍","❤","💖","💕"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(14+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,700);

// ============================
// Sakura
// ============================

function createSakura(){

    const sakura=document.createElement("div");

    sakura.className="sakura";

    sakura.innerHTML="🌸";

    sakura.style.left=Math.random()*100+"vw";

    sakura.style.fontSize=(12+Math.random()*18)+"px";

    sakura.style.animationDuration=(8+Math.random()*6)+"s";

    document.body.appendChild(sakura);

    setTimeout(()=>{

        sakura.remove();

    },15000);

}

setInterval(createSakura,500);

// ============================
// Stars
// ============================

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}

// ============================
// Auto Play After Opening
// ============================

openBtn.addEventListener("click",()=>{

    setTimeout(()=>{

        music.play();

        playBtn.innerHTML="❚❚";

        playing=true;

    },900);

});

// ============================
// Click Sparkle
// ============================

document.addEventListener("click",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.fontSize="22px";

    sparkle.style.zIndex="999999";

    sparkle.style.transition="1s";

    document.body.appendChild(sparkle);

    requestAnimationFrame(()=>{

        sparkle.style.transform="translateY(-50px) scale(1.8)";

        sparkle.style.opacity="0";

    });

    setTimeout(()=>{

        sparkle.remove();

    },1000);

});

// ============================
// Smooth Reveal
// ============================

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity 1.5s ease";

    document.body.style.opacity="1";

});

console.log("%cForever With You 🤍","font-size:20px;color:#ff7db8;font-weight:bold;");
