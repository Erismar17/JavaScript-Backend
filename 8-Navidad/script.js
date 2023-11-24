let botonPlay = document.querySelector(".play");
let botonPause = document.querySelector(".pause");
let audio = new Audio("./sound/allWant.mp3");
let imagen = document.querySelector(".imagen");

botonPlay.addEventListener("click", () => {
    bailar()
})

function bailar() {    
    audio.play();
    botonPlay.classList.remove("on");
    botonPause.classList.add("on");
}

botonPause.addEventListener("click", () => {
    pausar()
})

function pausar() {
    audio.pause()
    botonPause.classList.remove("on");
    botonPlay.classList.add("on");
}

function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }
};

function cuentaRegresiva(tiempoFaltante,mensaje) {
    let d = document.getElementById("dias");
    let h = document.getElementById("horas");
    let m = document.getElementById("minutos");
    let s = document.getElementById("segundos");
    let texto = document.querySelector(".texto");

    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
            d.innerHTML = t.diasFaltantes;
            h.innerHTML = t.horasFaltantes;
            m.innerHTML = t.minutosFaltantes;
            s.innerHTML = t.segundosFaltantes;
        if (t.tiempoFaltante < 1) {
            clearInterval(tiempoActual);
            imagen.classList.add("on");
            botonPlay.classList.add("on");
            botonPause.classList.add("on");
            texto.innerHTML = mensaje;            
        }
    }, 1000)
};
/* cuentaRegresiva('Dec 25 2023 00:00:00 GMT-0500','¡Felíz Navidad!'); */
cuentaRegresiva('Nov 14 2023 11:53:00 GMT-0500','¡Felíz Navidad!');