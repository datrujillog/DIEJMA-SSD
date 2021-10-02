function validar() {
    nombre = document.getElementById("name").value;
    apellido = document.getElementById("LastName").value;
    correo = document.getElementById("email").value;
    formato = /\w+@\w+\.+[a-z]/;
    if (nombre.length == 0 || apellido.length == 0
        || /^\s+$/.test(apellido, nombre,)) {
        alert("Todos Los Campos Son Obligatorios");
        return false;
    }
    else if (nombre.length > 30) {
        alert("El Nombre Es Muy Largo");
        return false;

    }

    else if (apellido.length > 30) {
        alert("El Apellido es muy Largo");
        return false;
    }
    else if (!formato.test(correo)) {
        alert("Correo Incorrecto");
        return false;
    }
 
}
