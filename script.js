const listacontactos = [];
function añadircontacto (contacto)
{listacontactos.push(contacto);}

añadircontacto("Juan Pablo Cespdes");
añadircontacto("Olga Diaz")
añadircontacto("Francisco Diaz")
añadircontacto("Miguel Rubiano")
añadircontacto("Gloria Rodriguez")
añadircontacto("Ana Maria Rodriguez")//

console.log(listacontactos)

function eliminarcontacto (nombre) {
    const indice= listacontactos.indexOf(nombre);
    listacontactos.splice(indice,1);
}

eliminarcontacto("Francisco Diaz")

console.log(listacontactos);

function editarcontacto(nombre, nombreactualizado) {
    const indice = listacontactos.indexOf(nombre);
    listacontactos.splice(indice,1,nombreactualizado);
}

editarcontacto("Gloria Rodriguez", "Gloria Esperanza Rodriguez")
console.log(listacontactos)

