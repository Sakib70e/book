const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const book = document.querySelector(".book");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");

prevBtn.addEventListener("click", prevPage);
nextBtn.addEventListener("click", nextPage);

let currentLocation = 1;
let maxLocation = 7; 

function openBook() {
    book.style.transform = "translateX(50%)";
    nextBtn.style.transform = "translateX(190px)";
    prevBtn.style.transform = "translateX(-190px)";
}

function closeBook(atStart) {
    if (atStart) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    nextBtn.style.transform = "translateX(0px)";
    prevBtn.style.transform = "translateX(0px)";
}

function nextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                p1.classList.add("flipped");
                p1.style.zIndex = 1;
                break;
            case 2:
                p2.classList.add("flipped");
                p2.style.zIndex = 2;
                break;
            case 3:
                p3.classList.add("flipped");
                p3.style.zIndex = 3;
                break;
            case 4:
                p4.classList.add("flipped");
                p4.style.zIndex = 4;
                break;
            case 5:
                p5.classList.add("flipped");
                p5.style.zIndex = 5;
                break;
            case 6:
                
                p6.classList.add("flipped");
                p6.style.zIndex = 6;
                closeBook(false);
                break;
            default:
                break;
        }
        currentLocation++;
    }
}

function prevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                p1.classList.remove("flipped");
                p1.style.zIndex = 6;
                break;
            case 3:
                p2.classList.remove("flipped");
                p2.style.zIndex = 5;
                break;
            case 4:
                p3.classList.remove("flipped");
                p3.style.zIndex = 4;
                break;
            case 5:
                p4.classList.remove("flipped");
                p4.style.zIndex = 3;
                break;
            case 6:
                p5.classList.remove("flipped");
                p5.style.zIndex = 2;
                break;
            case 7:
                p6.classList.remove("flipped");
                p6.style.zIndex = 1;
                openBook();
                break;
            default:
                break;
        }
        currentLocation--;
    }
}

function rain(){
    let amount=150;
    let body =document.querySelector('body');
    let j=0;
    while(j<amount){
        let drop=document.createElement('j');
        let size=Math.random()*5;
        let posXaxis=Math.floor(Math.random()*window.innerWidth);
        let delay=Math.random()*-20;
        let duration=Math.random()*5;
        
        drop.style.width=0.2*size+'px';
        drop.style.left=posXaxis + 'px';
        drop.style.animationDelay=delay+'s';
        drop.style.animationDuration=1+duration+'s';
        body.appendChild(drop);
        j++;
    }
}

rain();


function createLightning() {
    let flash = document.createElement("div");
    flash.classList.add("lightning");
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = 1;
    }, Math.random() * 300); 
    setTimeout(() => {
        flash.style.opacity = 0;
    }, 500); 

    setTimeout(() => {
        flash.remove();
    }, 700); 
}


setInterval(() => {
    if (Math.random() < 0.4) { 
        createLightning();
    }
}, 3000);



