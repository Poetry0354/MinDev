//EJERCICIO OPCIONAL
//* Dificultad extra.
/* Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 * */


const mi_agenda = {}; 

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
