function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML += `${hora}h`
    if(hora >= 0 && hora < 12){
        img.src = "imagens/manhã.jpg"
        document.body.style.background = "rgb(248, 202, 102)"
    }else if (hora >= 12 && hora <= 18){
        img.src = "imagens/tarde.jpg"
        document.body.style.background = "rgb(29, 58, 96)"
    }else{
        img.src = "imagens/noite.jpg"
        document.body.style.background = "rgb(11, 9, 55)"
    }
}