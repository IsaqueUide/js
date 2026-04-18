function contar(){
    let num = document.getElementById('txtnum')
    let n1 = Number(num.value)
    let res = document.getElementById('res')
    let c = '0'
    let n2 = n1*c
    while(c<= 10){
        res.innerHTML = `${n1} x ${c} = ${n2} <br>`
        c++
    }
}