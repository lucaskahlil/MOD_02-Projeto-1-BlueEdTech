let imgCentral = document.querySelector('#imgPrincipal')
let textoFoto = document.querySelector('#imgTime')
let botao = 0

function clickBotao(){
    botao ++
    if (botao == 1) {
        imgCentral.setAttribute("src", "assets/imagens/narutoClassico.webp")
        imgCentral.setAttribute("alt", "Naruto IMG")
        textoFoto.innerText = "Naruto Uzumaki"
    } else if (botao == 2) {
        imgCentral.setAttribute("src", "assets/imagens/sasukeClassico.webp")
        imgCentral.setAttribute("alt", "Sazuke IMG")
        textoFoto.innerText = "Sazuke Uchiha"
    } else if (botao == 3) {
        imgCentral.setAttribute("src", "assets/imagens/sakuraClassicoMenor.jpg")
        imgCentral.setAttribute("alt", "Sakura IMG")
        textoFoto.innerText = "Sakura Haruno"
    } else if (botao == 4) {
        imgCentral.setAttribute("src", "assets/imagens/kakashiClassico.jpg")
        imgCentral.setAttribute("alt", "Kakashi IMG")
        textoFoto.innerText = "Kakashi Hatake"
    } 
    if (botao > 4) {
        botao = 0
        imgCentral.setAttribute("src", "assets/imagens/time7.png")
        imgCentral.setAttribute("alt", "IMAGEM TIME 7")
        textoFoto.innerText = "Time Naruto"
    }    
        
    }