
let isMobile = false;
let col = 9;

if(innerWidth < 800){
    isMobile = true;
    col = 5;
}


const main = document.querySelectorAll("main")[0];

// console.log(main);
let land = {
    1:  {
        type : "img",
        content : "https://imgr.search.brave.com/ICyGN86VWoz3lOlCu8d61AZzTKkK5fNU9sNXJ-Pf6_Y/fit/583/700/ce/1/aHR0cHM6Ly93YWhv/b2FydC5jb20vQXJ0/Lm5zZi9PLzhYWTRE/Si8kRmlsZS9HZW9y/Z2lhLU9fa2VlZmZl/LUxlYXZlcy1vZi1h/LVBsYW50LkpQRw"
    },
    2:  {
        type : "img",
        content : "https://imgr.search.brave.com/ICyGN86VWoz3lOlCu8d61AZzTKkK5fNU9sNXJ-Pf6_Y/fit/583/700/ce/1/aHR0cHM6Ly93YWhv/b2FydC5jb20vQXJ0/Lm5zZi9PLzhYWTRE/Si8kRmlsZS9HZW9y/Z2lhLU9fa2VlZmZl/LUxlYXZlcy1vZi1h/LVBsYW50LkpQRw"
    }
}
const img = document.querySelectorAll("img");
const a = [];
let preContent = [];
function init(){

for(let i = 0 ; i < col*6; i++){
    
    preContent[i] = document.createElement("div");
    preContent[i].classList.toggle("placeholder");
    if(isMobile){
    preContent[i].style.width = innerWidth/5 + "px";
    preContent[i].style.height = innerWidth/5 + "px";
    }
    else{
        preContent[i].style.width = innerWidth/9 + "px";
        preContent[i].style.height = innerWidth/9 + "px";
    }


    // --- In case MI text has to flow in with content
    // if(i == 0){
    //     preContent[i].innerHTML="<p>multiple-identities</p>";
    // }


    document.body.insertBefore(preContent[i],main);
    preContent[i].addEventListener("mouseenter", function( event ) {
        // on met l'accent sur la cible de mouseenter
        event.target.classList.toggle("hovered");
        // console.log(event.target.classList);  
        // on réinitialise la couleur après quelques instants
       
      }, false);
}

for(let i = 0; i < img.length; i++){
    let coeff = 1+Math.round(Math.random()*3);
    if(isMobile){
    img[i].style.width = innerWidth/5 * coeff + "px";
    // img[i].style.height = "calc(100vw / 5.09 * " + coeff + ")";
    }
    else {
        img[i].style.width = innerWidth/9 * coeff + "px";
        // img[i].style.height = "calc(100vw / 9.09 * " + coeff + ")";
        
    }
    // console.log(img[i]);
    // a[i]=document.createElement("img");
    // if(Math.random()<.3){
    // a[i].src = land[1].content;
    // }
    // else if(Math.random()<.3){
    // a[i].src = land[2].content;

    // }
    // else{
    //     a[i].src = null;
    // }
    // a[i].style.width = " calc(100vw / 5.09) ";
    // a[i].style.height = " calc(100vw / 5.09) ";
    // main.appendChild (a[i]);

    img[i].addEventListener("mouseenter", function( event ) {
        // on met l'accent sur la cible de mouseenter
        event.target.classList.toggle("hovered");
        // console.log(event.target.classList);  
        // on réinitialise la couleur après quelques instants
       
      }, false);
}
document.body.style.backgroundSize = "calc(" + innerWidth + "px / 9) calc(" + innerWidth + "px / 9)";
console.log(document.body.style.backgroundSize);
}
init();