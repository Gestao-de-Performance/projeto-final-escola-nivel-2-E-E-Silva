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

var introducao = document.querySelector('.prologoPagina')

function mudandoBackground() {
    introducao.style.background = '#ffc894'
    var textoTroca = document.getElementById('texto')
    textoTroca.innerHTML = 'Bem-vindo ao universo das motos, onde a paixão pelo motociclismo encontra o conhecimento! No Moto Mania, não oferecemos apenas produtos; oferecemos uma imersão completa no mundo das duas rodas. Aqui, você encontra guias aprofundados sobre mecânica, dicas para personalização, curiosidades históricas e análises detalhadas das melhores motos do mercado. Descubra como escolher o motor ideal para o seu estilo, domine técnicas avançadas de pilotagem e explore o espírito de liberdade que só uma moto pode proporcionar. Prepare-se para acelerar no caminho do conhecimento e da adrenalina!'
}

function returBackground() {
    introducao.style.background = 'white'
    var returnadoTexto = document.getElementById('texto')
    returnadoTexto.innerHTML = returnadoTexto.getAttribute('original')
}

