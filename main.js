let timer
const relogio =  document.querySelector('#timer')
const btnInit =  document.querySelector('#init')
const btnPause =  document.querySelector('#pause')
const btnRestart =  document.querySelector('#restart')
let CONTROL_VARIABLE = false
let contagem = {
    hour:0,
    min:0,
    sec:0
}
function addZeroes(num, len) {

    var numberWithZeroes = String(num);
  var counter = numberWithZeroes.length;
      
  while(counter < len) {
  
      numberWithZeroes = "0" + numberWithZeroes;
    
    counter++;
  
    }
  
  return numberWithZeroes;

}




function incrementMin(min){
    
    return ++min
}
function incrementHour(hour){
    return ++hour
}
function incrementSec(sec){    
    
    return ++sec
}
function stopTimer(timer){
    clearInterval(timer)
    
    
    
}

function returnTimer(){
    if(CONTROL_VARIABLE){
        return setTimer(contagem.hour,contagem.min,contagem.sec)
    }
}



function setTimer(hour = 0, min = 0, sec=0){
    const timer = setInterval(() => {
        sec = incrementSec(sec)       
        if( hour >= 23 && min == 59 && sec == 59){
            relogio.innerHTML = 'teste'
            stopTimer(timer)
            btnPause.disabled = true
            
            
            
        }
        if( min == 59 && sec == 59){
            min = 0
            sec = 0
            hour = incrementHour(hour)
        }
        if (sec == 59){
            sec = 0
            min = incrementMin(min)
        }
        contagem.hour = hour
        contagem.min = min,
        contagem.sec = sec,
        console.log('chegou')

        relogio.innerHTML = `${addZeroes(hour,2)}:${addZeroes(min,2)}:${addZeroes(sec,2)}`
    
        
    }, 1000);
    console.log(timer)
    return timer

}
btnInit.addEventListener('click', () =>{
    CONTROL_VARIABLE = true
    timer = setTimer()
    btnInit.disabled = true
    
})
btnPause.addEventListener('click', () =>{
    if (CONTROL_VARIABLE){

        if(btnPause.classList.contains('clicked')){
            btnPause.innerHTML = '<b>Pausar</b>'
            timer = returnTimer()
            relogio.style.color = '#000000'
            
            
        }
        else{
            btnPause.innerHTML = '<b>Despausar</b>'
            stopTimer(timer)
            console.log( relogio.style.color)
            relogio.style.color = '#ffc100'
            
        }
        btnPause.classList.toggle('clicked')
    }
        
})
btnRestart.addEventListener('click', () =>{
    stopTimer(timer)
    relogio.innerHTML = '00:00:00'
    btnInit.disabled = false
    CONTROL_VARIABLE = false
    btnPause.disabled = false
    relogio.style.color = '#000000'
    btnPause.innerHTML = '<b>Pausar</b>'

    
    
})









