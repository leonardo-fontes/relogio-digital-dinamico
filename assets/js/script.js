const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hr < 10 ? hr = '0' + hr : hr; 
    min < 10 ? min = '0' + min : min; 
    s < 10 ? s = '0' + s : s; 

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})