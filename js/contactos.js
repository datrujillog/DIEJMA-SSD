function validar(){
    nombre=document.getElementById("name").value;
    apellido=document.getElementById("LastName").value;

    if( nombre.length==0 || /^\s+$/.test(nombre)){
        alert("no puedes dejar el campo Nombre vacio");
    }
    if( apellido.length==0 || /^\s+$/.test(apellido)){
        alert("no puedes dejar el campo Apellido vacio");
    }
 
}