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
    }
}
