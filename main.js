const relogio = setInterval(function horas(){

    let comprimento = window.window.innerWidth
    let horas = document.querySelector("#hora");
    let minutos = document.querySelector("#minutos");
    let segundos  = document.querySelector("#segundos");

    let manha = document.querySelector(".manha");
    let tarde = document.querySelector(".tarde");
    let noite = document.querySelector(".noite");

    let data = new Date;

    let hour = data.getHours();
    let minute = data.getMinutes();
    let seconds = data.getSeconds();

    if(hour < 10){
        hr = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }


     if(hour >= 6 && hour < 12){
        manha.style.display = "flex";
    }else if(hour >= 12 && hour <= 18){
        tarde.style.display = "flex";
    }else if(hour > 18 && hour <= 5){
        noite.style.display = "flex";
    }
    
    horas.textContent = hour;
    minutos.textContent = minute;
    segundos.textContent = seconds;
});