const mi_agenda = []; 

alert("Por favor, elige una de las siguientes opciones");

function agregarContacto () {
    let nuevoNombre = null;
    let nuevoTelefono = null;
    do {
        nuevoNombre = prompt("El nombre es: ");
        if (!nuevoNombre) {
            console.log("Por favor, ingresa un nombre válido.");
        }
    } while (!nuevoNombre);
    do {
        nuevoTelefono = prompt("El telefono es: ");
        if (!nuevoTelefono) {
            console.log("Por favor, ingresa un número de teléfono válido.");
        }
    } while (!nuevoTelefono);
    let nuevoContacto = {
        nombre: nuevoNombre,
        telefono: parseInt(nuevoTelefono)
    };
    mi_agenda.push(nuevoContacto);
};

function buscarContacto () {
    let buscar_contac = null;
    do {
        buscar_contac = prompt("Buscar el nombre: ");
    } while (!buscar_contac);

    let buscar_resultado = mi_agenda.find(function (contacto) { 
        return contacto.nombre.toLowerCase() === buscar_contac.toLowerCase();
    } );

        if (buscar_resultado === undefined) {
            alert(buscar_contac + " no existe");
        } else {
            alert(JSON.stringify(buscar_resultado, null, 2));
    }
} 

function actualizarContacto () {
    let actualizar_contac = null;
    do {
        actualizar_contac = prompt("Actualizar el contacto: ");
    } while (!actualizar_contac);
    let actualizar_resultado = mi_agenda.findIndex(function (contacto) { 
        return contacto.nombre.toLowerCase() === actualizar_contac.toLowerCase();
    } );
    if (actualizar_resultado === undefined) {
        alert(actualizar_contac + " no existe");
    } else {
        let nuevoNombre = null;
        let nuevoTelefono = null;
        do {
            nuevoNombre = prompt("Nuevo nombre: ", mi_agenda[actualizar_resultado].nombre);
            mi_agenda[actualizar_resultado].nombre = nuevoNombre;
        } while (nuevoNombre === null);
        do {
            nuevoTelefono = prompt("Nuevo Telefono: ", mi_agenda[actualizar_resultado].telefono)
        } while (nuevoTelefono === null);
        alert(actualizar_contac + " fue actualizado a " + nuevoNombre)
    }
}

function eliminarContacto () {
    let eliminar_contac = null;
    do {
        eliminar_contac = prompt("Que Contacto Elimnar? : ")
    } while (!eliminar_contac);
    let eliminar_resultado = mi_agenda.findIndex(function (contacto) { 
        return contacto.nombre.toLowerCase() === eliminar_contac.toLowerCase();
    } );
    if (eliminar_resultado === undefined) {
        alert(eliminar_contac + " no existe");
    } else {
        mi_agenda.splice(eliminar_resultado, 1);
        alert(eliminar_contac + " fue eliminado");
    }
}

function mostrarAgenda () {
    let mostrar = null;
    do {
        mostrar = prompt("Mostrar Agenda? : ")
    } while (!mostrar);
    alert(JSON.stringify(mi_agenda, null, 2));
}

// ... (resto del código)

function opciones () {
    let option = '';
    let menu = 'MENU: \n 1. Buscar contacto \n 2. Agregar contacto \n 3. Actualizar contacto \n 4. Eliminar contacto \n 5. Mostrar agenda \n 6. Salir';
    while (option !== "6") {
        option = prompt(menu);
        switch (option) { // Cambiamos "opcion" por "option"
        case '1':
            buscarContacto();
            // Eliminamos la llamada recursiva a opciones()
            break;
        case '2':
            agregarContacto();
            // Eliminamos la llamada recursiva a opciones()
            break;
        case '3':
            actualizarContacto();
            // Eliminamos la llamada recursiva a opciones()
            break;
        case '4':
            eliminarContacto();
            // Eliminamos la llamada recursiva a opciones()
            break;
        case '5':
            mostrarAgenda();
            // Eliminamos la llamada recursiva a opciones()
            break;
        default:
            alert('Opcion no valida');
            break;
        }
    }
}
opciones();