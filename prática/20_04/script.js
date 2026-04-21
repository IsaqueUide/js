function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('txtnas')
    let res = document.getElementById('res')
    let corpo = document.body
    if (nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] Digite os dados corretamente!')
    } else{
        let radgen = document.getElementsByName('radgen')
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
                corpo.style.background = 'red'
            }else if (idade >= 18 && idade <= 33 ){
                img.setAttribute('src', 'jovemM.jpg')
                direito = "pode dirigir."
                corpo.style.background = 'green'
            }else if(idade >= 34 && idade <= 55){
                img.setAttribute('src', 'adultoM.jpg')
                direito = "pode dirigir."
                corpo.style.background = 'green'
            }else{
                img.setAttribute('src', 'idosoM.jpg')
                direito = 'pode dirigir.'
                corpo.style.background = 'green'
            }
            
        }else if (radgen[1].checked){
            genero = "Mulher"
            if (idade < 18){
                img.setAttribute('src', 'bebeF.jpg')
                direito ='não pode dirigir.'
                corpo.style.background = 'red'
            }else if(idade >= 18 && idade <= 33 ){
                img.setAttribute('src', 'jovemF.jpg')
                direito = "pode dirigir."
                corpo.style.background = 'green'
            }else if(idade >= 34 && idade <= 55){
                img.setAttribute('src', 'adultaF.jpg')
                direito = "pode dirigir."
                corpo.style.background = 'green'
            }else{
                img.setAttribute('src', 'idosaF.jpg')
                direito = 'pode dirigir.'
                corpo.style.background = 'green'
            }

        }
        res.innerHTML = `Você é ${genero}. Por ter ${idade} anos, você ${direito}`
        res.appendChild(img)
    }
}
