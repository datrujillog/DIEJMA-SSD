const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    // Agregamos los listener de los enlaces para filtrar por categoria.
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    // Agregamos el listener para la barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });

    // Agregamos listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        });
    });

    // Eventlistener del boton de cerrar
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });

    // Eventlistener del overlay
    overlay.addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });
});

// ******************** Cuenta regresiva  ********************

const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }

}

// console.log(getRemainTime('Sep 22 2021 15:00:51 GMT-0500 '))

const countdwn = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timeUpdate = setInterval(() => {

        let t = getRemainTime(deadline);

        el.innerHTML = `<div style="background-color: rgba(0, 0, 0, 0.75); width: 12%; height: 150px; border-radius: 50px;">${t.remainDays}<br> <div style="font-size: 25px;">Days</div>
         </div> 
        
        
       <div style="background-color: rgba(0, 0, 0, 0.75); width: 12%; height: 150px; border-radius: 50px; ">${t.remainHours}<br><div style="font-size: 25px;">Hours</div>
       </div> 
        
        
        <div style="background-color: rgba(0, 0, 0, 0.75); width: 13%; height: 150px; border-radius: 50px;">${t.remainMinutes}<br> <div style="font-size: 25px;">Minutes</div>
        </div>
        
       <div style="background-color: rgba(0, 0, 0, 0.75); width: 14%; height: 150px; border-radius: 50px;">${t.remainSeconds}<br><div style="font-size: 25px;">Seconds</div></div>  `;




        if (t.remainTime <= 1) {
            clearInterval(timeUpdate)
            el.innerHTML = finalMessage;
        }

    }, 1000)

};

countdwn('Oct 31 2021 17:10:00 GMT-0500', 'clock',
    'Feliz 2021');

// style="background-color: rgba(0, 0, 0, 0.4); width: 100px; height: 100px;  border-radius: 50px; !import"


// el.innerHTML = ` ${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
// ******************** FIN CODIGO ********************


// ================= BOOTON ========================
// function validar() {
//     nombre = document.getElementById("name").value;
//     apellido = document.getElementById("LastName").value;
//     correo = document.getElementById("email").value;
//     formato = /\w+@\w+\.+[a-z]/;
//     if (nombre.length == 0 || apellido.length == 0 ||
//         /^\s+$/.test(apellido, nombre, )) {
//         alert("Todos Los Campos Son Obligatorios");
//         return false;
//     } else if (nombre.length > 30) {
//         alert("El Nombre Es Muy Largo");
//         return false;

//     } else if (apellido.length > 30) {
//         alert("El Apellido es muy Largo");
//         return false;
//     } else if (!formato.test(correo)) {
//         alert("Correo Incorrecto");
//         return false;
//     }

// }