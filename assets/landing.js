
let isMobile = false;
let col = 9;

if(innerWidth < innerHeight){
    isMobile = false;
    col = 5;
}


const main = document.querySelectorAll("main")[0];
const mainWidth = innerWidth - getScrollbarWidth();


const img = document.querySelectorAll("img");
const a = [];
let preContent = [];
function init(){

for(let i = 0 ; i < col*24; i++){
    
    preContent[i] = document.createElement("div");
    preContent[i].classList.toggle("placeholder");
    preContent[i].classList.toggle("unhovered");
    if(isMobile){
    preContent[i].style.width = mainWidth/5 + "px";
    preContent[i].style.height = mainWidth/5 + "px";
    }
    else{
        preContent[i].style.width = mainWidth/9 + "px";
        preContent[i].style.height = mainWidth/9 + "px";
    }


    // --- In case MI text has to flow in with content
    // if(i == 0){
    //     preContent[i].innerHTML="<p>multiple-identities</p>";
    // }


    main.insertBefore(preContent[i], img[0]);
    
}

for(let i = 0; i < img.length; i++){
    let coeff = 2+Math.round(Math.random()*3);
    if(isMobile){
    img[i].style.width = mainWidth/5 * coeff + "px";
    // img[i].style.height = "calc(100vw / 5.09 * " + coeff + ")";
    }
    else {
        img[i].style.width = mainWidth/9 * coeff + "px";
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
if(isMobile){

document.body.style.backgroundSize = "calc(" + mainWidth + "px / 5) calc(" + mainWidth + "px / 5)";
}
else{
document.body.style.backgroundSize = "calc(" + mainWidth + "px / 9) calc(" + mainWidth + "px / 9)";
}
console.log(document.body.style.backgroundSize);



const elements = document.querySelectorAll('.placeholder');
elements.forEach(element => {
    element.addEventListener('click', (e)=>{
        console.log(e);
        element.classList.toggle("hovered");
        element.classList.toggle("unhovered");
    });
 });
}
init();


function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}