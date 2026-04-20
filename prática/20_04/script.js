function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('txtnas')
    let res = document.getElementById('res')
    if (nas.value.length == 0 || nas.value > ano){
        window.alert('[ERRO] Digite os dados corretamente!')
    } else{
        let radgen = document.getElementById('radsex')
        let idade = ano - Number(nasc.value)
        genero = ''
        let img = document.createElement('img')
        img.setAttribute('src', 'id')
        if(radgen[0].checked){
            genero = "Homem"
            if (idade < 18){
                //Bebe Não pode dirigir
                
            }else if{

            }
            
        }else if (radgen[1].checked){
            genero = "Mulher"

        }
    }
}
