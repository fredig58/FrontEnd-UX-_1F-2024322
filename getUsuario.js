
function registrarUsuario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("id").value;
    let telefono = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let edadMascota = document.getElementById("edad").value;
    let seleccion = document.getElementById("seleccion").value;

    document.write(nombre +" "+apellido +" "+cedula +" "+email +" "+password +
        " "+nombreMascota+" "+edadMascota+" "+seleccion);

    addUsuario(nombre,apellido,id,tel,email,pass,nombreMascota,edadMascota,seleccion);

}

function registrarCita() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("id").value;
    let nMascota = document.getElementById("nMascota").value;
    let fechaCita = document.getElementById("fechaCita").value;
    let horaCita = document.getElementById("horaCita").value;
    
    document.write(nombre +" "+apellido +" "+cedula +" "+nMascota +" "+fechaCita +
        " "+horaCita);


}




