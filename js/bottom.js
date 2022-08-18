//boton para arriba Scroll up
document.getElemenById("bottom-up").addEventListener("clic", scrollUp);
function ScrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp)
        window.scrollTo(0, currentScroll - ( currentScroll/10));
    }
}

bottomUp = document.getElementaryId("bottom-up");
windows.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        bottomUp.syle.transform = "opacity (1)";
    }else if (scroll < 500){
        bottomUp.style.transform = "opacity (0)";
    }

 }
