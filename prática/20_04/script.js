function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('txtnas')
    let nas = Number(nasc.value)
    let res = document.getElementById('res')
    res.innerHTML = `${ano} ${nas}`
}
