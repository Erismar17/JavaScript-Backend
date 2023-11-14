const pantalla = document.querySelector(".pantalla");
const boton = document.querySelectorAll(".boton");

boton.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Syntax error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                if (ultNum === "/" || primerNum === "/") {
                    pantalla.textContent = "Syntax error";    
                } else
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Syntax error";

                if (pantalla.textContent === "igual") {
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                }
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Syntax error") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }
    })
})
