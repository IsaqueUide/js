function contar(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, preencha a área acima')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<=0){
            let res = document.createElement('option')
            res.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(res)
            c++
        }
    }
}