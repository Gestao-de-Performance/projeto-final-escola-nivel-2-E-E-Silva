var menu = document.getElementById("menuPodrao");
    
function chamaMenu(){
    if(menu.style.display == "none"){
        menu.style.display = "block";
    } else {
    menu.style.display = "none";
    }
    
}

window.addEventListener('scroll', () => {
    const moto = document.getElementById('Motos');
    const scroll = window.scrollY;
    moto.style.backgroundPosition = `${scrollY * 0.1}px top`

})

