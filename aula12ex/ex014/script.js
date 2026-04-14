function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML += `${hora}h`
    var corpo = document.body
    if(hora >= 0 && hora < 12){
        img.src = "imagens/manhã.jpg"
        corpo.style.background = "rgb(248, 238, 102)"
    }else if (hora >= 12 && hora <= 18){
        img.src = "imagens/tarde.jpg"
        corpo.style.background = "rgb(29, 58, 96)"
    }else{
        img.src = "imagens/noite.jpg"
        corpo.style.background = "rgb(11, 9, 55)"
    }
}