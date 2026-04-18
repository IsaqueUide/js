function contar(){
    let num = document.getElementById('txtnum')
    let n1 = Number(num.value)
    let res = document.getElementById('res')
    
    for(c = 0; c<= 10; c++){
        let n2 = n1*c
        res.innerHTML = `${n1} x ${c} = ${n2} <br>`
    }
}