function calcularTiempo() {
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    if (hora > 12) {
        horaDia = "PM"
        hora = hora - 12;
    } else {
        horaDia = "AM"
    }

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
    
    let pantallaReloj = hora + ":" + minuto + ":" + segundo;
    let relojDigital = document.querySelector(".reloj");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);