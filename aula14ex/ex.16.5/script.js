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
            res.innerHTML='[ERROR]'
        }
        }
    }