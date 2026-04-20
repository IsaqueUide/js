function contar(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passos = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        res.innerHTML = '[ERROR] preencha <strong>todos</strong> os dados acima'
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if( p <= 0){
            window.alert('Passo inválido, contando como 1')
            p = 1
        }
        if(i<f){
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} ▶️`
            }
        }else{
            for(let c = i; c>= f; c-=p){
                res.innerHTML += `${c} ▶️`
            }
        }
        res.innerHTML += '🚩'
        }
    }