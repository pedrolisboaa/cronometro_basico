function cronometro(){

    /*Pegando hora*/
    function pegarSegundosDasHoras(segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        })
    }

    console.log(pegarSegundosDasHoras(0))
    /*Variáveis*/
    const relogio = document.querySelector('.cronometro')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0;
    let timer;

    /*Funções*/
    function iniciaRelogio(){
         timer = setInterval(function(){
            segundos++
            relogio.innerHTML = pegarSegundosDasHoras(segundos)
        },1000)
    }

    /*Eventos*/
    document.addEventListener('click', function(e){
        const el = e.target
        if (el.classList.contains('iniciar')){
            clearInterval(timer)
            iniciaRelogio() 
        }

        if (el.classList.contains('pausar')){
            clearInterval(timer)
        }

        if (el.classList.contains('zerar')){
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })

    /*Eventos*/
    /*
    iniciar.addEventListener('click', function(e){
        clearInterval(timer)
        iniciaRelogio()
    })

    pausar.addEventListener('click', function(e){
        clearInterval(timer)
    })

    zerar.addEventListener('click', function(e){
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    })
    */

}

cronometro()