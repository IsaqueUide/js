function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('txtnas')
    let res = document.getElementById('res')
    if (nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] Digite os dados corretamente!')
    } else{
        let radgen = document.getElementById('radgen')
        let idade = ano - Number(nasc.value)
        let genero = ''
        let direito = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(radgen[0].checked){
            genero = "Homem"
            if (idade < 18){
                //Bebe Não pode dirigir
                img.setAttribute('src', 'bebeM.jpg')
                direito = "não pode dirigir."
            }else if(idade >= 18){
                img.setAttribute('src', 'jovemM.jpg')
                direito = "pode dirigir"
            }
            
        }else if (radgen[1].checked){
            genero = "Mulher"

        }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos, por isso ${direito}`
        res.appendChild(img)
    }
}
