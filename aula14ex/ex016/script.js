function contar(){
    var txtini = document.getElementById('iini')
    var ini = Number(txtini.value)
    var txtfim = document.getElementById('ifim')
    var fim = Number(txtfim.value)
    var txtpasso = document.getElementById('ipas')
    var pas = Number(txtpasso.value)
    var res = document.getElementById('res')
    while(ini <= fim){
        ini = +passo
        res.innerHTML = `${ini}`
    }
}