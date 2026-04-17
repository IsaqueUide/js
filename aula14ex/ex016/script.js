function onclick{
    let txtini = document.getElementById('iini')
    let ini = Number(iini.value)
    let txtfim = document.getElementById('ifim')
    let fim = Number(ifim.value)
    let txtpasso = document.getElementById('ipas')
    let txtpasso = Number(ipas.value)
    let res = document.getElementById('res')
    res.innerHTML = `${ini}, ${fim}, ${passo}`
}